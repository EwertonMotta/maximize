<?php

use App\Models\Post;
use Illuminate\Testing\Fluent\AssertableJson;

test('returns a successful response', function () {
    $response = $this->get('/api/');

    $response->assertStatus(200);
});

test('returns a json response', function () {

    $response = $this->get('/api/');

    $response->assertJson([
        'message' => 'ok!',
    ]);
});

test('returns a json structure', function () {
    Post::factory(10)->create();

    $response = $this->get('/api/posts');

    $response->assertJsonStructure([
        'data' => [
            '*' => [
                'id',
                'title',
                'slug',
                'description',
                'body',
                'image',
                'published_at',
            ],
        ],
    ]);
});

test('returns a json response with posts', function () {
    $post = \App\Models\Post::factory()->create();

    $response = $this->get('/api/posts');

    $response->assertJson(fn (AssertableJson $json) => $json
        ->where('data.0.id', $post->id)
        ->where('data.0.title', $post->title)
        ->where('data.0.slug', $post->slug)
        ->where('data.0.description', $post->description)
        ->where('data.0.body', $post->body)
        ->where('data.0.image', $post->image)
        ->where('data.0.published_at', 'Publicado em '.$post->published_at)
        ->etc()
    );
});

test('can get a single post', function () {
    $post = \App\Models\Post::factory()->create();

    $response = $this->get('/api/post/'.$post->slug);

    $response->assertJson(fn (AssertableJson $json) => $json
        ->where('data.id', $post->id)
        ->where('data.title', $post->title)
        ->where('data.slug', $post->slug)
        ->where('data.description', $post->description)
        ->where('data.body', $post->body)
        ->where('data.image', $post->image)
        ->where('data.published_at', 'Publicado em '.$post->published_at)
        ->etc()
    );
});

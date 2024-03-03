<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    public function toArray(Request $request): array
    {
return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'image' => $this->image,
            'description' => $this->description,
            'body' => $this->body,
            'published_at' => 'Publicado em ' . $this->created_at->format('d/m/Y \à\s H:i'),
            'url' => '/post/' . $this->slug
        ];
    }
}

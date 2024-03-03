<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Undocumented class.
 *
 * @property-read int $id
 * @property-read string $title
 * @property-read string $slug
 * @property-read string $image
 * @property-read string $description
 * @property-read string $body
 * @property-read string $published_at
 * @property-read string $url
 */
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
            'published_at' => 'Publicado em '.$this->published_at,
            'url' => '/post/'.$this->slug,
        ];
    }
}

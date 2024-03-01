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
            'published_at' => $this->created_at->toDateTimeString(),
            'url' => '/post/' . $this->slug
        ];
    }
}

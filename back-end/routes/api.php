<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json(['message' => 'ok!'], 200);
});

Route::controller(App\Http\Controllers\PostController::class)->group(function () {
    Route::get('/posts', 'index');
    Route::get('/post/{post:slug}', 'show');
});

<?php

use App\Http\Controllers\CommentaireController;
use App\Http\Controllers\FavorieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourController;
use App\Models\Commentaire;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


// // coures
Route::resource('/cours', CourController::class);


// //favories
Route::resource('/favories', FavorieController::class);



//commentaires
Route::resource('/commentaires', CommentaireController::class);

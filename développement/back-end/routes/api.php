<?php

use App\Http\Controllers\CommentaireController;
use App\Http\Controllers\FavorieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourController;
use App\Http\Controllers\FormateurController;
use App\Http\Controllers\LoginController;


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


//formateur
Route::resource('/formateurs',FormateurController::class);//register
Route::post('/formateurs/login',[FormateurController::class,'login']);//login
Route::get('/formateur',[LoginController::class,'details'])->middleware(['auth:sanctum','abilities:formateur']);//deatails
Route::get('/formateurs/{id}/cours',[FormateurController::class,'getmescours'])->middleware(['auth:sanctum','abilities:formateur']);//get cour of a teacher(formateur)


// coures
Route::resource('/cours', CourController::class);//get all courses
Route::get('/cours/{id}/videos', [CourController::class,'getVideos']);// get videos of the course
Route::get('/cours/{id}/etudiants', [CourController::class,'etudiantParCour'])->middleware(['auth:sanctum','abilities:formateur']);//get etudiant by course


// //favories
Route::resource('/favories', FavorieController::class);


//commentaires
Route::resource('/commentaires', CommentaireController::class);









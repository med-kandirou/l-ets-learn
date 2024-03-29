<?php

use App\Http\Controllers\CategorieController;
use App\Http\Controllers\CommentaireController;
use App\Http\Controllers\FavorieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourController;
use App\Http\Controllers\FormateurController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\CloudinaryController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuizController;

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

//cloudinary
Route::get('/getsignature', [CloudinaryController::class, 'getsignature']);

//user
Route::resource('/users',UsersController::class);
Route::get('/user/{id}',[UsersController::class,'getUser']);//get user
Route::get('/user/{id_user}/courses',[UsersController::class,'mescours']);//get user courses
Route::get('/user/admin/statstistique',[UsersController::class,'statistiques']);//statistiques admin
//formateur
Route::resource('/formateurs',FormateurController::class);//register
Route::post('/formateurs/login',[FormateurController::class,'login']);//login
Route::get('/formateur',[LoginController::class,'details'])->middleware(['auth:sanctum','abilities:formateur']);//deatails
Route::get('/formateurs/{id}/cours',[FormateurController::class,'getmescours']);//get cour of a teacher(formateur)
Route::get('/formateurs/{id}/stats',[FormateurController::class,'statistiques']);//statistiques


// coures
Route::resource('/cours', CourController::class);//get all courses
Route::get('/cours/{id}/videos', [CourController::class,'getVideos']);// get videos of the course
Route::get('/cours/{id}/etudiants', [CourController::class,'etudiantParCour'])->middleware(['auth:sanctum','abilities:formateur']);//get etudiant by course


//favories
Route::resource('/favories', FavorieController::class)->middleware('auth:sanctum');


//videos
Route::resource('/videos', VideoController::class);


// categories
Route::resource('/categories', CategorieController::class);


//stripe
Route::post('/create-payment-intent', [PaymentController::class,'createPaymentIntent']);
Route::post('/confirm-payment', [PaymentController::class,'confirmPayment']);



//quiz
Route::resource('/quiz', QuizController::class)->middleware(['auth:sanctum','abilities:formateur']);

//questions
Route::resource('/questions', QuestionController::class)->middleware(['auth:sanctum','abilities:formateur']);
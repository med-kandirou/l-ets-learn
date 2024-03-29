<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User::withCount('course')->get();
    }
    /**
     * get user.
     */
    public function getUser($id)
    {
        return User::find($id);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user=User::find($id);
        return $user->course()->select('cour_id','title','subtitle','image','price','formateur_id')->with('formateur:id,nom,prenom,image')->get();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $formateur =User::find($id);
        $formateur->nom=$request->input('nom');
        $formateur->prenom=$request->input('prenom');
        $formateur->image=$request->input('image');
        
        $formateur->update();
        return ["response"=>"success"];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function mescours($id_user)
    {
        $user=User::find($id_user);
        return $user->course()->with('formateur')->get();
    }

    public function statistiques()
    {
        return [
            "nombre_cour"=>DB::table('cours')->count(),
            "nombre_etudiant"=>DB::table('users')->where('role', '=', 0)->count(),
            "nombre_etudiant"=>DB::table('formateurs')->count(),
            "nombre_video"=>DB::table('cours')->count(),
            "nombre_quiz"=>DB::table('quizzes')->count(),
            "nombre_cat"=>DB::table('categories')->count(),
        ];
    }

}

<?php

namespace App\Http\Controllers;

use App\Models\Formateur;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class FormateurController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }
    public function getmescours($id)
    {
        $formateur=Formateur::find($id);
        return $formateur->cours()->get(['id','image','title','subtitle','price']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function login(Request $request)
    {
        $response=['token'=>null];
        if(Auth::guard('formateur')->attempt(['email' => $request->email, 'password' =>$request->password])){
            $user=Auth::guard('formateur')->user();
            $token=$user->createToken('token',['formateur'])->plainTextToken;
            $response=['token'=>$token];
        }
        return $response;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $formateur =new Formateur();
        $formateur->nom=$request->input('nom');
        $formateur->prenom=$request->input('prenom');
        $formateur->image=$request->input('image');
        $formateur->niveau=$request->input('niveau');
        $formateur->description=$request->input('description');
        $formateur->email=$request->input('email');
        $formateur->password=$request->input('password');
        $formateur->tele=$request->input('tele');
        $formateur->save();
        return ["response"=>"success"];
    }


    /**
     * Display the specified resource.
     */
    public function show(Formateur $formateur)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Formateur $formateur)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user =Formateur::find($id);
        $user->nom=$request->input('nom');
        $user->prenom=$request->input('prenom');
        $user->email=$request->input('email');
        $user->update();
        return ["response"=>"success"];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Formateur $formateur)
    {
        //
    }
}

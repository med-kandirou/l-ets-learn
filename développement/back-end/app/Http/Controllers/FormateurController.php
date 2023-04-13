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
       return Formateur::all('id','image','nom','prenom','email','activer');
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
    public function show($id)
    {
        return Formateur::select('image','nom','prenom','email','niveau','description')->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Formateur $formateur)
    {
        $formateur->activer=1;
        $formateur->update();
        return 'activer';
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user =Formateur::find($id);
        $user->nom=$request->nom;
        $user->prenom=$request->prenom;
        $user->email=$request->email;
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

<?php

namespace App\Http\Controllers;

use App\Models\Formateur;
use Exception;
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

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function login(Request $request)
    {
        return $request;
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
        $formateur->tele=$request->input('tele');
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
    public function update(Request $request, Formateur $formateur)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Formateur $formateur)
    {
        //
    }
}

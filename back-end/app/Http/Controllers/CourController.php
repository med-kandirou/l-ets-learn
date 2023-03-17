<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cour;
class CourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //get product with creator
        return Cour::with('formateur:id,nom,prenom')->get(['id','title','subtitle','image','price','formateur_id']);
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
        return Cour::where('id', $id)->with('formateur')->get();
        
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

}
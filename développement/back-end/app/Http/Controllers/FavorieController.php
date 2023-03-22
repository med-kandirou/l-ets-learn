<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Favorie;
use App\Models\User;
class FavorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ['response'=>'favories'];
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
        $favorie=new Favorie();
        $favorie->user_id=$request->user_id;
        $favorie->cour_id=$request->cour_id;
        $favorie->save();
        return ['response'=>'success'];
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user=User::find($id);
        return $user->favories()->get();
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

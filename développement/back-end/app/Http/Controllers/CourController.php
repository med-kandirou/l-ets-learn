<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cour;
use App\Models\Formateur;

class CourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //get product with creator
        return Cour::with('formateur:id,nom,prenom')->with('categorie:id,nom')->get(['id','title','subtitle','image','price','formateur_id','categorie_id','created_at']);
    }

    function etudiantParCour($id_c){
        //get les etudiant d'un cour
        $cour=Cour::find($id_c);
        return $cour->users()->get();//ici
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
        $cour=new Cour();
        $cour->title=$request->title;
        $cour->subtitle=$request->subtitle;
        $cour->price=$request->price;
        $cour->image='https://res.cloudinary.com/dxn7gskyn/image/upload/v1682635855/book/django_cmsimk.png';
        $cour->video='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
        $cour->base=$request->base;
        $cour->but=$request->but;
        $cour->categorie_id=$request->categorie;
        $cour->formateur_id=$request->formateur;
        $cour->save();
        return "added";
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
        $cour=Cour::find($id);
        $cour->title=$request->title;
        $cour->subtitle=$request->subtitle;
        $cour->base=$request->base;
        $cour->but=$request->but;
        $cour->price=$request->price;
        $cour->update();
        return 'update';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $cour=Cour::find($id);
        $cour->delete();
        return ['response'=>'deleted'];
    }


    public function getVideos($cour_id)
    {
        $cour=Cour::find($cour_id); 
        return $cour->videos()->get();
    }

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cour extends Model
{
    use HasFactory;

    protected $table = 'cours';


    //fonction pour faire la relation avec formateur(createur)
    public function formateur()
    {
        return $this->belongsTo(Formateur::class);
    }


    //fonction pour faire la relation avec les videos d'un cour
    public function videos(){
        return $this->hasMany(Video::class);
    }



    //get etudiant by course 
    public function users()
    {
        return $this->belongsToMany(User::class, Achat::class);
    }


    public function categorie()
    {
        return $this->belongsTo(Categorie::class);
    }

    


    //  //fonction pour faire la relation avec le commentaire
    //  public function commentaires()
    //  {
    //     return $this->belongsToMany(User::class,Commentaire::class);
    //  }
    
    

    

}

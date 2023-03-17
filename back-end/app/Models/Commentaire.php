<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commentaire extends Model
{
    use HasFactory;


    // // Relation avec l'utilisateur
    // public function user() {
    //     return $this->belongsTo(User::class);
    // }

    // // Relation avec le cour
    // public function cour() {
    //     return $this->belongsTo(Cour::class);
    // }
}

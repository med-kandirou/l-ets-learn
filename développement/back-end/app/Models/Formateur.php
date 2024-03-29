<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
class Formateur extends Authenticatable
{
    use HasFactory,HasApiTokens;

    protected $guard='formateur';

    public $timestamps=false;

    //la relation avec les cours 
    public function cours(){
        return $this->hasMany(cour::class);
    }
    //la relation avec quiz
    public function quiz(){
        return $this->hasMany(Quiz::class);
    }
}

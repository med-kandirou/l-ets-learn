<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    public function cour(){
        return $this->belongsTo(Cour::class);
    } 
    public function formateur(){
        return $this->belongsTo(Formateur::class);
    } 
}

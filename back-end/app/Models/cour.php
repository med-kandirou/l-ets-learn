<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cour extends Model
{
    use HasFactory;

    protected $table = 'cours';


    //fonction pour faire la relation avec user(createur)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cour extends Model
{
    use HasFactory;

    protected $table = 'cours';

    public function favoris()
    {
        return $this->hasMany(favorie::class);
    }
}

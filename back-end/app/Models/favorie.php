<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class favorie extends Model
{
    use HasFactory;

    protected $table = 'favories';

    // public function user()
    // {
    //     return $this->belongsTo(User::class);
    // }

    // public function cour()
    // {
    //     return $this->belongsTo(cour::class);
    // }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class FavorieController extends Controller
{
    function getfavoriebyid($id){
        $user=User::find($id);
        return $user->cours;  
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Formateur;
use Exception;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function details(){
        $formateur=Auth::user();
        return response()->json(['data'=>$formateur]);
    }
}

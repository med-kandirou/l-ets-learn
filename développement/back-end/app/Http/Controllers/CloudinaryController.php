<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
require_once(__DIR__ . '/vendor/autoload.php');
use Cloudinary\Cloudinary;

class CloudinaryController extends Controller
{
    public function getsignature(){
        $cloudinaryConfig = new CloudConfig([
            "cloud_name" => env('cloud_name'),
            "api_key" => env('api_key'),
            "api_secret" => env('api_secret')
        ]);
        $timestamp=time();
        $params =
            [
                "timestamp" => time(),
                "folder" => 'learn'
            ];
        $data = ['signature' => ApiUtils::signParameters($params, $cloudinaryConfig->apiSecret), 'timestamp' => $timestamp];
        return $data;
    }
}

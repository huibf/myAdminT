<?php

namespace App\Http\Controllers\Roast\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AppController extends Controller
{
    public function getApp()
    {
        return view('roast.app');
    }

    public function getLogin()
    {
        return view('roast.login');
    }
}

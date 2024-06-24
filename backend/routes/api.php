<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/generate-resume', 'App\Http\Controllers\ResumeController@generate');

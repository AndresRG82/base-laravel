<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

class PrivateImgController extends Controller
{
  public function showPrivateImage($filename): StreamedResponse
{
    // Aquí puedes validar permisos según el usuario logueado
    if (!auth()->check()) {
        abort(403);
    }

    $path = "private/users/{$filename}";

    if (!Storage::exists($path)) {
        abort(404);
    }

    return Storage::download($path); // o ->response() para mostrar en navegador
}
}

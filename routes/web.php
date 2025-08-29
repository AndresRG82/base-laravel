<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');
 Route::get('/Validador', function () {
        return Inertia::render('Main/Certificates/Qr/Page');
    })->name('certificado.qr');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/private-image/{filename}', [PrivateImgController::class, 'showPrivateImage'])->name('private.image');

    Route::get('/certificados', function () {
        return Inertia::render('Main/certificates/page');
    })->name('certificates');

    Route::get('/empresas', function () {
        return Inertia::render('Main/companies/page');
    })->name('companies');

    Route::get('/maquinas', function () {
        return Inertia::render('Main/machinery/page');
    })->name('machinery');

});


require __DIR__.'/auth.php';

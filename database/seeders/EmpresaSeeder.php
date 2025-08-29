<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmpresaSeeder extends Seeder
{
    /**
     * Run the database seeds.

     **/
    public function run(): void
    {

      DB::table('empresas')->insert([
            'nombre' => "MECANICA SEBASTIAN ANDRES VALDEBENITO GONZALEZ E.I.R.L",
            'direccion' => "PASAJE DIAGONAL SUR 33, GOMES CARREÑO, VIÑA DEL AMR",
            'glosa' => "MANTENCION Y REPARACION DE VEHICULOS",
            'rut' => "76.938.678-5",
            'telefono' => "+56972139153",
            'email' => "sebastian@mecanicavaldebenito.cl",
            'tipo' => 'emisora',
        ],
    );


     DB::table('empresas')->insert([
            'nombre' => "TRANSPORTES DE COMBUSTIBLES CHILE LTDA",
            'rut' => "79.904.920-1",
            'tipo' => 'receptora',
        ]);



    }
}

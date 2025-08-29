<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\tipoMaquinaria;

class MaquinariaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         $path = database_path('seeders/data/equipo.csv');

        if (($handle = fopen($path, 'r')) !== false) {
            $header = fgetcsv($handle, 1000, ';'); // Cabecera

            while (($row = fgetcsv($handle, 1000, ';')) !== false) {
                $data = array_combine($header, $row);

                $tipoMaquinaria = tipoMaquinaria::where('nombre', $data['tipo'])->first();
                $this->command->info($data['tipo'] . ' -> ' . ($tipoMaquinaria ? $tipoMaquinaria->id : 'No encontrado'));

                DB::table('maquinarias')->insert([
                    'numero_interno'    => $data['numero_interno'],
                    'ppu'               => $data['ppu'],
                    'tipo_maquinaria_id'=> $tipoMaquinaria ? $tipoMaquinaria->id : null,
                    'anio'              => $data['anio'],
                    'marca'             => $data['marca'],
                    'modelo'            => $data['modelo'],
                    'numero_motor'      => $data['numero_motor'],
                    'vin'               => $data['vin'],
                ]);
            }

            fclose($handle);
        }
    }
}

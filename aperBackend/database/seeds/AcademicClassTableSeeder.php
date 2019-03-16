<?php

use Illuminate\Database\Seeder;

class AcademicClassTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('academic_class')
            ->insert([

                ['name' => "First-class", 'description' => "description",],
                ['name' => "Distinction", 'description' => "description",],
                ['name' => "Second-class-upper", 'description' => "description",],
                ['name' => "Second-class-lower", 'description' => "description",],
                ['name' => "Third-class", 'description' => "description",],
                ['name' => "Pass", 'description' => "description",],

            ]);
    }
}

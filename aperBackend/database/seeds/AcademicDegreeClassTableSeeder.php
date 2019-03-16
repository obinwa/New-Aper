<?php

use Illuminate\Database\Seeder;

class AcademicDegreeClassTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('academic_degree')
            ->insert([

                ['name' => "M.Sc", 'description' => "description",],
                ['name' => "M.Ed", 'description' => "description",],
                ['name' => "M.A", 'description' => "description",],
                ['name' => "LL.M", 'description' => "description",],
                ['name' => "M.Phd", 'description' => "description",],
                ['name' => "M.Pa", 'description' => "description",],

            ]);
    }
}

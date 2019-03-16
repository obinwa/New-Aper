<?php

use Illuminate\Database\Seeder;

class GradeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('grades')
            ->insert([

                ['name' => "grade-1", 'description' => "description",],
                ['name' => "grade-2", 'description' => "description",],

                ['name' => "grade-3", 'description' => "description"],

                ['name' => "grade-4", 'description' => "description",],
                ['name' => "grade-5", 'description' => "description",],
                ['name' => "grade-6", 'description' => "description",],
            ]);

    }
}

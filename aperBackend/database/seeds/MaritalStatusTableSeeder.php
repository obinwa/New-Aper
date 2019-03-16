<?php

use Illuminate\Database\Seeder;

class MaritalStatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        DB::table('marital_status')
            ->insert([

                ['name' => "married", 'description' => "description",],
                ['name' => "divorced", 'description' => "description",],

                ['name' => "single", 'description' => "description",],

                ['name' => "widowed", 'description' => "description",],
//                ['name' => "grade-5", 'description' => "description",],
//                ['name' => "grade-6", 'description' => "description",],
            ]);
    }
}

<?php

use Illuminate\Database\Seeder;

class StepTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('steps')
            ->insert([

                ['name' => "step-1", 'description' => "description",],
                ['name' => "step-2", 'description' => "description",],

                ['name' => "step-3", 'description' => "description",],

                ['name' => "step-4", 'description' => "description",],

                ['name' => "step-5", 'description' => "description",],

                ['name' => "step-6", 'description' => "description",],
            ]);
    }
}

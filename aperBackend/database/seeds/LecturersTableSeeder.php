<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class LecturersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('lecturers')
            ->insert([

                ['first_name' => "user1",'last_name' => "user1", 'middle_name' => "user1", 'email' => "user1@gmail.com",'password' => Hash::make('secret'),],
                ['first_name' => "user2",'last_name' => "user2", 'middle_name' => "user2", 'email' => "user2@gmail.com",'password' => Hash::make('secret'),],
                ['first_name' => "user3",'last_name' => "user3", 'middle_name' => "user3", 'email' => "user3@gmail.com",'password' => Hash::make('secret'),],

            ]);
    }
}

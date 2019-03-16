<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSettingsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('settings', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->dateTime('lecturer_start_time')->nullable();
			$table->dateTime('lecturer_end_time')->nullable();
			$table->dateTime('hod_start-time')->nullable();
			$table->dateTime('hod_end_time')->nullable();
			$table->dateTime('dean_start_time')->nullable();
			$table->dateTime('dean_end_time')->nullable();
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('settings');
	}

}

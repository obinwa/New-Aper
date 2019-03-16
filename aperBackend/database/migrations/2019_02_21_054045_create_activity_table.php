<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateActivityTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('activity', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('lecturer_id')->nullable()->index('lecturer_id_fk4_idx');
			$table->string('position', 45)->nullable()->default('NUL');
			$table->boolean('type')->nullable()->comment('1=current, 2=previous');
			$table->dateTime('start_date')->nullable();
			$table->dateTime('end_date')->nullable();
			$table->dateTime('till_date')->nullable();
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
		Schema::drop('activity');
	}

}

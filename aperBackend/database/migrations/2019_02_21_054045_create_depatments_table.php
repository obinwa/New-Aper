<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDepatmentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('depatments', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('faculty_id')->nullable()->index('faculty_id_fk1_idx');
			$table->string('name', 45)->nullable();
			$table->string('description', 45)->nullable();
			$table->boolean('active')->nullable();
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
		Schema::drop('depatments');
	}

}

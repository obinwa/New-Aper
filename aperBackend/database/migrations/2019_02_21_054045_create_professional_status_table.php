<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProfessionalStatusTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('professional_status', function(Blueprint $table)
		{
			$table->integer('id')->primary();
			$table->string('name', 45)->nullable();
			$table->string('description', 45)->nullable();
			$table->string('alias', 45)->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('professional_status');
	}

}

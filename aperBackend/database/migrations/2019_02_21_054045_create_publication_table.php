<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePublicationTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('publication', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('lecturer_id')->nullable()->index('lecturer_id_fk12_idx');
			$table->string('title', 100)->nullable();
			$table->string('type', 45)->nullable();
			$table->string('details', 45)->nullable();
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
		Schema::drop('publication');
	}

}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateResearchGrantTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('research_grant', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('lecturer_id')->nullable()->index('lecturer_id_fk5_idx');
			$table->string('type', 45)->nullable();
			$table->string('awarding_body', 100)->nullable();
			$table->dateTime('start_date')->nullable();
			$table->dateTime('end_date')->nullable();
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
		Schema::drop('research_grant');
	}

}

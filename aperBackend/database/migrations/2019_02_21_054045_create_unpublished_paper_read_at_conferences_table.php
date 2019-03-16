<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUnpublishedPaperReadAtConferencesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('unpublished_paper_read_at_conferences', function(Blueprint $table)
		{
			$table->integer('id')->primary();
			$table->integer('lecturer_id')->nullable()->index('lecturer_id_fk21_idx');
			$table->string('name', 50)->nullable();
			$table->string('title', 50)->nullable();
			$table->string('venue', 45)->nullable();
			$table->dateTime('date')->nullable();
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
		Schema::drop('unpublished_paper_read_at_conferences');
	}

}

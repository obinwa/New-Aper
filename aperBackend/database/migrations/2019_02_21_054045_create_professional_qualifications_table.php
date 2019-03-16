<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProfessionalQualificationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('professional_qualifications', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('lecturer_id')->nullable()->index('lecturer_id_fk1_idx');
			$table->string('profession', 100)->nullable();
			$table->string('qualification', 100)->nullable();
			$table->string('institution', 100)->nullable();
			$table->string('country', 45)->nullable();
			$table->string('awarding_body', 45)->nullable();
			$table->dateTime('date_of_award')->nullable();
			$table->string('evidence_url', 180)->nullable();
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
		Schema::drop('professional_qualifications');
	}

}

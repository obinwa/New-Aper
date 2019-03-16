<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAcademicQualificationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('academic_qualifications', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('lecturer_id')->nullable()->index('lecturer_id_fk2_idx');
			$table->integer('degree_id')->nullable()->index('degree_id_fk2_idx');
			$table->integer('academic_class_id')->nullable()->index('academic_class_id_fk3_idx');
			$table->string('institution', 45)->nullable();
			$table->dateTime('award_date')->nullable();
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
		Schema::drop('academic_qualifications');
	}

}

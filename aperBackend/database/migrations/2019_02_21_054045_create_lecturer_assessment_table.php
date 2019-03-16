<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLecturerAssessmentTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('lecturer_assessment', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('lecturer_id')->nullable()->index('lecturer_id_fk18_idx');
			$table->integer('settings_id')->nullable()->index('settings_id_fk1_idx');
			$table->string('teaching_score', 45)->nullable();
			$table->string('research_score', 45)->nullable();
			$table->string('publication_score', 45)->nullable();
			$table->string('post_graduate_score', 45)->nullable();
			$table->string('other_departmental_resposibilities_score', 45)->nullable();
			$table->string('contribution_to_university_score', 45)->nullable();
			$table->integer('hod_id')->nullable()->index('hod_id_fk1_idx');
			$table->integer('dean_id')->nullable()->index('dean_id_fk1_idx');
			$table->boolean('lecturer_decison')->nullable();
			$table->integer('dean_recomendation')->nullable();
			$table->string('dean_comment', 60)->nullable();
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
		Schema::drop('lecturer_assessment');
	}

}

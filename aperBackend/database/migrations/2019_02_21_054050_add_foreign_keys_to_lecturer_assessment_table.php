<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToLecturerAssessmentTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('lecturer_assessment', function(Blueprint $table)
		{
			$table->foreign('dean_id', 'dean_id_fk1')->references('id')->on('lecturers')->onUpdate('CASCADE')->onDelete('NO ACTION');
			$table->foreign('hod_id', 'hod_id_fk1')->references('id')->on('lecturers')->onUpdate('CASCADE')->onDelete('NO ACTION');
			$table->foreign('lecturer_id', 'lecturer_id_fk18')->references('id')->on('lecturers')->onUpdate('CASCADE')->onDelete('NO ACTION');
			$table->foreign('settings_id', 'settings_id_fk1')->references('id')->on('settings')->onUpdate('CASCADE')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('lecturer_assessment', function(Blueprint $table)
		{
			$table->dropForeign('dean_id_fk1');
			$table->dropForeign('hod_id_fk1');
			$table->dropForeign('lecturer_id_fk18');
			$table->dropForeign('settings_id_fk1');
		});
	}

}

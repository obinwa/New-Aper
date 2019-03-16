<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToAcademicQualificationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('academic_qualifications', function(Blueprint $table)
		{
			$table->foreign('academic_class_id', 'academic_class_id_fk3')->references('id')->on('academic_class')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('degree_id', 'degree_id_fk2')->references('id')->on('academic_degree')->onUpdate('CASCADE')->onDelete('NO ACTION');
			$table->foreign('lecturer_id', 'lecturer_id_fk2')->references('id')->on('lecturers')->onUpdate('CASCADE')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('academic_qualifications', function(Blueprint $table)
		{
			$table->dropForeign('academic_class_id_fk3');
			$table->dropForeign('degree_id_fk2');
			$table->dropForeign('lecturer_id_fk2');
		});
	}

}

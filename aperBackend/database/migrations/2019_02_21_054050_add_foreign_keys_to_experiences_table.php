<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToExperiencesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('experiences', function(Blueprint $table)
		{
			$table->foreign('designation_id', 'designation_id')->references('id')->on('designation')->onUpdate('CASCADE')->onDelete('NO ACTION');
			$table->foreign('lecturer_id', 'lecturer_id_fk')->references('id')->on('lecturers')->onUpdate('CASCADE')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('experiences', function(Blueprint $table)
		{
			$table->dropForeign('designation_id');
			$table->dropForeign('lecturer_id_fk');
		});
	}

}

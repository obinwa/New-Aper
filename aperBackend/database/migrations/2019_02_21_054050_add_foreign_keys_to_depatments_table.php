<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToDepatmentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('depatments', function(Blueprint $table)
		{
			$table->foreign('faculty_id', 'faculty_id_fk1')->references('id')->on('faculties')->onUpdate('CASCADE')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('depatments', function(Blueprint $table)
		{
			$table->dropForeign('faculty_id_fk1');
		});
	}

}

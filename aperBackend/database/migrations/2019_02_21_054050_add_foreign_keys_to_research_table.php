<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToResearchTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('research', function(Blueprint $table)
		{
			$table->foreign('lecturer_id', 'lecturer_id_fk17')->references('id')->on('lecturers')->onUpdate('CASCADE')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('research', function(Blueprint $table)
		{
			$table->dropForeign('lecturer_id_fk17');
		});
	}

}

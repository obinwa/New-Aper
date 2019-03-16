<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToResaerchCollaboratorsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('resaerch_collaborators', function(Blueprint $table)
		{
			$table->foreign('id', 'lecturer_id_fk16')->references('id')->on('lecturers')->onUpdate('CASCADE')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('resaerch_collaborators', function(Blueprint $table)
		{
			$table->dropForeign('lecturer_id_fk16');
		});
	}

}

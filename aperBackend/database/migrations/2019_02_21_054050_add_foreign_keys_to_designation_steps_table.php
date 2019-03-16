<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToDesignationStepsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('designation_steps', function(Blueprint $table)
		{
			$table->foreign('designation_id', 'designation_id_fk3')->references('id')->on('designation')->onUpdate('CASCADE')->onDelete('NO ACTION');
			$table->foreign('step_id', 'step_id_fk3')->references('id')->on('steps')->onUpdate('CASCADE')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('designation_steps', function(Blueprint $table)
		{
			$table->dropForeign('designation_id_fk3');
			$table->dropForeign('step_id_fk3');
		});
	}

}

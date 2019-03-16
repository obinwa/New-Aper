<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDesignationStepsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('designation_steps', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('designation_id')->nullable()->index('designation_id_fk3_idx');
			$table->integer('step_id')->nullable()->index('step_id_fk3_idx');
			$table->string('salary', 45)->nullable();
			$table->timestamps();
			$table->softDeletes();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('designation_steps');
	}

}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateResaerchCollaboratorsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('resaerch_collaborators', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('lecturer_id')->nullable();
			$table->integer('type')->nullable()->comment('1=collaboration within faculty,2=collaboration within university,3=collaboration outside university,');
			$table->string('title', 100)->nullable();
			$table->string('collaborator', 50)->nullable();
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
		Schema::drop('resaerch_collaborators');
	}

}

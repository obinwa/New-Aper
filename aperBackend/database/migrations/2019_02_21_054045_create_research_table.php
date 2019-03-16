<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateResearchTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('research', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('lecturer_id')->nullable()->index('lecturer_id_fk17_idx');
			$table->boolean('status')->nullable()->comment('0=Research in progress, 1=Research completed not published,');
			$table->integer('rcnp_status')->nullable()->comment('1=writting,2=sent for publication, 3=accepted, 4=correction, 5=GalleryProof

rcnp=research completed but not yet  published');
			$table->string('title', 100)->nullable();
			$table->string('description', 100)->nullable();
			$table->dateTime('start_date')->nullable();
			$table->dateTime('end_date')->nullable();
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
		Schema::drop('research');
	}

}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToLecturersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('lecturers', function(Blueprint $table)
		{
			$table->foreign('current_appt_designation_id', 'current_appt_designation_id_fk1')->references('id')->on('designation')->onUpdate('CASCADE')->onDelete('NO ACTION');
			$table->foreign('department_id', 'department_id_fk')->references('id')->on('depatments')->onUpdate('CASCADE')->onDelete('NO ACTION');
			$table->foreign('first_appt_designation_id', 'first_appt_designation_id_fk')->references('id')->on('designation')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('last_promotion_designation_id', 'last_promotion_designation_id_fk1')->references('id')->on('designation')->onUpdate('CASCADE')->onDelete('NO ACTION');
			$table->foreign('marital_status_id', 'marital_status_id_fk')->references('id')->on('marital_status')->onUpdate('CASCADE')->onDelete('NO ACTION');
			$table->foreign('professional_status_id', 'professional_status_id_fk')->references('id')->on('professional_status')->onUpdate('CASCADE')->onDelete('NO ACTION');
			$table->foreign('step_current_appt_designation_id', 'step_current_appt_designation_id')->references('id')->on('steps')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('step_first_appt_designation_id', 'step_first_appt_designation_id_fk1')->references('id')->on('steps')->onUpdate('CASCADE')->onDelete('NO ACTION');
			$table->foreign('step_last_promotion_designation_id', 'step_last_promotion_designation_id')->references('id')->on('steps')->onUpdate('CASCADE')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('lecturers', function(Blueprint $table)
		{
			$table->dropForeign('current_appt_designation_id_fk1');
			$table->dropForeign('department_id_fk');
			$table->dropForeign('first_appt_designation_id_fk');
			$table->dropForeign('last_promotion_designation_id_fk1');
			$table->dropForeign('marital_status_id_fk');
			$table->dropForeign('professional_status_id_fk');
			$table->dropForeign('step_current_appt_designation_id');
			$table->dropForeign('step_first_appt_designation_id_fk1');
			$table->dropForeign('step_last_promotion_designation_id');
		});
	}

}

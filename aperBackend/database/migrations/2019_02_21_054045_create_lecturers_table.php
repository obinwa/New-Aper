<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLecturersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('lecturers', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('first_name', 60)->nullable();
			$table->string('last_name', 60)->nullable();
			$table->string('middle_name', 60)->nullable();
			$table->string('email', 225)->nullable()->unique('email');
			$table->string('sex', 45)->nullable();
			$table->integer('professional_status_id')->nullable()->index('professional_status_id_fk_idx');
			$table->string('password', 225)->nullable();
			$table->integer('admin')->nullable();
			$table->string('remember_token', 45)->nullable();
			$table->dateTime('date_of_birth')->nullable();
			$table->integer('marital_status_id')->nullable()->index('marital_status_id_fk_idx');
			$table->string('file_number', 45)->nullable();
			$table->dateTime('retirement_date')->nullable();
			$table->integer('department_id')->nullable()->index('department_id_fk_idx');
			$table->integer('hod')->nullable();
			$table->integer('dean')->nullable();
			$table->dateTime('first_appointment_date')->nullable();
			$table->integer('first_appt_designation_id')->nullable()->index('first_appt_designation_id_fk_idx');
			$table->integer('step_first_appt_designation_id')->nullable()->index('step_first_appt_designation_id_fk1_idx');
			$table->integer('last_promotion_date')->nullable();
			$table->integer('last_promotion_designation_id')->nullable()->index('last_promotion_designation_id_fk1_idx');
			$table->integer('step_last_promotion_designation_id')->nullable()->index('step_last_promotion_designation_id_idx');
			$table->integer('current_appt_designation_id')->nullable()->index('current_appt_designation_id_fk1_idx');
			$table->integer('step_current_appt_designation_id')->nullable()->index('step_current_appt_designation_id_idx');
			$table->boolean('appt_confirmation')->nullable();
			$table->dateTime('confirmation_date')->nullable();
			$table->string('salary', 45)->nullable();
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
		Schema::drop('lecturers');
	}

}

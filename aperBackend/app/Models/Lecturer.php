<?php

/**
 * Created by Reliese Model.
 * Date: Wed, 13 Feb 2019 04:31:18 +0000.
 */

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Reliese\Database\Eloquent\Model as Eloquent;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;
/**
 * Class Lecturer
 * 
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property string $middle_name
 * @property string $email
 * @property string $sex
 * @property int $professional_status_id
 * @property string $password
 * @property int $admin
 * @property string $remember_token
 * @property \Carbon\Carbon $date_of_birth
 * @property int $marital_status_id
 * @property string $file_number
 * @property \Carbon\Carbon $retirement_date
 * @property int $department_id
 * @property int $hod
 * @property int $dean
 * @property \Carbon\Carbon $first_appointment_date
 * @property int $first_appt_designation_id
 * @property int $step_first_appt_designation_id
 * @property int $last_promotion_date
 * @property int $last_promotion_designation_id
 * @property int $step_last_promotion_designation_id
 * @property int $current_appt_designation_id
 * @property int $step_current_appt_designation_id
 * @property int $appt_confirmation
 * @property \Carbon\Carbon $confirmation_date
 * @property string $salary
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \App\Models\Designation $designation
 * @property \App\Models\Depatment $depatment
 * @property \App\Models\MaritalStatus $marital_status
 * @property \App\Models\ProfessionalStatus $professional_status
 * @property \App\Models\Step $step
 * @property \Illuminate\Database\Eloquent\Collection $academic_qualifications
 * @property \Illuminate\Database\Eloquent\Collection $activities
 * @property \Illuminate\Database\Eloquent\Collection $experiences
 * @property \Illuminate\Database\Eloquent\Collection $professional_qualifications
 * @property \Illuminate\Database\Eloquent\Collection $publications
 * @property \App\Models\ResaerchCollaborator $resaerch_collaborator
 * @property \Illuminate\Database\Eloquent\Collection $research_grants
 *
 * @package App\Models
 */
class Lecturer extends Authenticatable implements JWTSubject
{
	protected $casts = [
		'professional_status_id' => 'int',
		'admin' => 'int',
		'marital_status_id' => 'int',
		'department_id' => 'int',
		'hod' => 'int',
		'dean' => 'int',
		'first_appt_designation_id' => 'int',
		'step_first_appt_designation_id' => 'int',
		'last_promotion_date' => 'int',
		'last_promotion_designation_id' => 'int',
		'step_last_promotion_designation_id' => 'int',
		'current_appt_designation_id' => 'int',
		'step_current_appt_designation_id' => 'int',
		'appt_confirmation' => 'int'
	];

	protected $dates = [
		'date_of_birth',
		'retirement_date',
		'first_appointment_date',
		'confirmation_date'
	];

	protected $hidden = [
		'password',
		'remember_token'
	];

	protected $fillable = [
		'first_name',
		'last_name',
		'middle_name',
		'email',
		'sex',
		'professional_status_id',
		'password',
		'admin',
		'remember_token',
		'date_of_birth',
		'marital_status_id',
		'file_number',
		'retirement_date',
		'department_id',
		'hod',
		'dean',
		'first_appointment_date',
		'first_appt_designation_id',
		'step_first_appt_designation_id',
		'last_promotion_date',
		'last_promotion_designation_id',
		'step_last_promotion_designation_id',
		'current_appt_designation_id',
		'step_current_appt_designation_id',
		'appt_confirmation',
		'confirmation_date',
		'salary'
	];

    public function getJWTIdentifier() {
        return $this->getKey();
    }

    public function getJWTCustomClaims() {
        return [];

    }

	public function designation()
	{
		return $this->belongsTo(\App\Models\Designation::class, 'last_promotion_designation_id');
	}

	public function depatment()
	{
		return $this->belongsTo(\App\Models\Depatment::class, 'department_id');
	}

	public function marital_status()
	{
		return $this->belongsTo(\App\Models\MaritalStatus::class);
	}

	public function professional_status()
	{
		return $this->belongsTo(\App\Models\ProfessionalStatus::class);
	}

	public function step()
	{
		return $this->belongsTo(\App\Models\Step::class, 'step_last_promotion_designation_id');
	}

	public function academic_qualifications()
	{
		return $this->hasMany(\App\Models\AcademicQualification::class);
	}

	public function activities()
	{
		return $this->hasMany(\App\Models\Activity::class);
	}

	public function experiences()
	{
		return $this->hasMany(\App\Models\Experience::class);
	}

	public function professional_qualifications()
	{
		return $this->hasMany(\App\Models\ProfessionalQualification::class);
	}

	public function publications()
	{
		return $this->hasMany(\App\Models\Publication::class);
	}

	public function resaerch_collaborator()
	{
		return $this->hasMany(\App\Models\ResaerchCollaborator::class, 'lecturer_id');
	}

	public function research_grants()
	{
		return $this->hasMany(\App\Models\ResearchGrant::class);
	}
}

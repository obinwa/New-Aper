<?php

/**
 * Created by Reliese Model.
 * Date: Sun, 24 Feb 2019 04:01:11 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Setting
 * 
 * @property int $id
 * @property \Carbon\Carbon $lecturer_start_time
 * @property \Carbon\Carbon $lecturer_end_time
 * @property \Carbon\Carbon $hod_start_time
 * @property \Carbon\Carbon $hod_end_time
 * @property \Carbon\Carbon $dean_start_time
 * @property \Carbon\Carbon $dean_end_time
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \Illuminate\Database\Eloquent\Collection $lecturer_assessments
 *
 * @package App\Models
 */
class Setting extends Eloquent
{
	protected $dates = [
		'lecturer_start_time',
		'lecturer_end_time',
		'hod_start_time',
		'hod_end_time',
		'dean_start_time',
		'dean_end_time'
	];

	protected $fillable = [
		'lecturer_start_time',
		'lecturer_end_time',
		'hod_start_time',
		'hod_end_time',
		'dean_start_time',
		'dean_end_time'
	];

	public function lecturer_assessments()
	{
		return $this->hasMany(\App\Models\LecturerAssessment::class, 'settings_id');
	}
}

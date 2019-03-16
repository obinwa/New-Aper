<?php

/**
 * Created by Reliese Model.
 * Date: Sat, 09 Feb 2019 23:08:18 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Experience
 * 
 * @property int $id
 * @property int $lecturer_id
 * @property int $designation_id
 * @property string $specialization
 * @property string $subject_taught
 * @property string $institution
 * @property \Carbon\Carbon $start_date
 * @property \Carbon\Carbon $end_date
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \App\Models\Designation $designation
 * @property \App\Models\Lecturer $lecturer
 *
 * @package App\Models
 */
class Experience extends Eloquent
{
	protected $casts = [
		'lecturer_id' => 'int',
		'designation_id' => 'int'
	];

	protected $dates = [
		'start_date',
		'end_date'
	];

	protected $fillable = [
		'lecturer_id',
		'designation_id',
		'specialization',
		'subject_taught',
		'institution',
		'start_date',
		'end_date'
	];

	public function designation()
	{
		return $this->belongsTo(\App\Models\Designation::class);
	}

	public function lecturer()
	{
		return $this->belongsTo(\App\Models\Lecturer::class);
	}
}

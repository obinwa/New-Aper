<?php

/**
 * Created by Reliese Model.
 * Date: Sat, 09 Feb 2019 08:46:47 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class AcademicQualification
 * 
 * @property int $id
 * @property int $lecturer_id
 * @property int $degree_id
 * @property int $academic_class_id
 * @property string $institution
 * @property \Carbon\Carbon $award_date
 * @property string $evidence_url
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \App\Models\AcademicClass $academic_class
 * @property \App\Models\AcademicDegree $academic_degree
 * @property \App\Models\Lecturer $lecturer
 *
 * @package App\Models
 */
class AcademicQualification extends Eloquent
{
	protected $casts = [
		'lecturer_id' => 'int',
		'degree_id' => 'int',
		'academic_class_id' => 'int'
	];

	protected $dates = [
		'award_date'
	];

	protected $fillable = [
		'lecturer_id',
		'degree_id',
		'academic_class_id',
		'institution',
		'award_date',
		'evidence_url'
	];

	public function academic_class()
	{
		return $this->belongsTo(\App\Models\AcademicClass::class);
	}

	public function academic_degree()
	{
		return $this->belongsTo(\App\Models\AcademicDegree::class, 'degree_id');
	}

	public function lecturer()
	{
		return $this->belongsTo(\App\Models\Lecturer::class);
	}
}

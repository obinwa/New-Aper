<?php

/**
 * Created by Reliese Model.
 * Date: Mon, 28 Jan 2019 17:05:25 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Depatment
 * 
 * @property int $id
 * @property int $faculty_id
 * @property string $name
 * @property string $description
 * @property bool $active
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \App\Models\Faculty $faculty
 * @property \Illuminate\Database\Eloquent\Collection $lecturers
 *
 * @package App\Models
 */
class Depatment extends Eloquent
{
	protected $casts = [
		'faculty_id' => 'int',
		'active' => 'bool'
	];

	protected $fillable = [
		'faculty_id',
		'name',
		'description',
		'active'
	];

	public function faculty()
	{
		return $this->belongsTo(\App\Models\Faculty::class);
	}

	public function lecturers()
	{
		return $this->hasMany(\App\Models\Lecturer::class, 'department_id');
	}
}

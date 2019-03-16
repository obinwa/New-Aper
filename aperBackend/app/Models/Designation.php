<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 05 Feb 2019 02:36:43 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Designation
 * 
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $alias
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \Illuminate\Database\Eloquent\Collection $steps
 * @property \Illuminate\Database\Eloquent\Collection $experiences
 * @property \Illuminate\Database\Eloquent\Collection $lecturers
 *
 * @package App\Models
 */
class Designation extends Eloquent
{
	protected $table = 'designation';

	protected $fillable = [
		'name',
		'description',
		'alias'
	];

	public function steps()
	{
		return $this->belongsToMany(\App\Models\Step::class, 'designation_steps')
					->withPivot('id', 'salary', 'deleted_at')
					->withTimestamps();
	}

	public function experiences()
	{
		return $this->hasMany(\App\Models\Experience::class);
	}

	public function lecturers()
	{
		return $this->hasMany(\App\Models\Lecturer::class, 'first_appt_designation_id');
	}
}

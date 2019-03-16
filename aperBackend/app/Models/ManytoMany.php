<?php

/**
 * Created by Reliese Model.
 * Date: Mon, 28 Jan 2019 14:28:37 +0000.
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
 * @property string $salary
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \Illuminate\Database\Eloquent\Collection $steps
 * @property \Illuminate\Database\Eloquent\Collection $lecturers
 *
 * @package App\Models
 */
class ManytoMany extends Eloquent
{
	protected $table = 'designation';

	protected $fillable = [
		'name',
		'description',
		'alias',
		'salary'
	];

	public function steps()
	{
		return $this->belongsToMany(\App\Models\Step::class, 'designation_steps')
					->withPivot('id', 'salary', 'deleted_at')
					->withTimestamps();
	}

	public function lecturers()
	{
		return $this->hasMany(\App\Models\Lecturer::class, 'first_appt_designation_id');
	}
}

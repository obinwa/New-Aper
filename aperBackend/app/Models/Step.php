<?php

/**
 * Created by Reliese Model.
 * Date: Mon, 28 Jan 2019 17:05:25 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Step
 * 
 * @property int $id
 * @property string $name
 * @property string $description
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \Illuminate\Database\Eloquent\Collection $designations
 *
 * @package App\Models
 */
class Step extends Eloquent
{
	protected $fillable = [
		'name',
		'description'
	];

	public function designations()
	{
		return $this->belongsToMany(\App\Models\Designation::class, 'designation_steps')
					->withPivot('id', 'salary', 'deleted_at')
					->withTimestamps();
	}
	
}

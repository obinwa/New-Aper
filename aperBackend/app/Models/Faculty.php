<?php

/**
 * Created by Reliese Model.
 * Date: Mon, 28 Jan 2019 17:05:25 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Faculty
 * 
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $location
 * @property int $active
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \Illuminate\Database\Eloquent\Collection $depatments
 * @property \Illuminate\Database\Eloquent\Collection $lecturers
 *
 * @package App\Models
 */
class Faculty extends Eloquent
{
	protected $casts = [
		'active' => 'int'
	];

	protected $fillable = [
		'name',
		'description',
		'location',
		'active'
	];

	public function depatments()
	{
		return $this->hasMany(\App\Models\Depatment::class);
	}

	public function lecturers()
	{
		return $this->hasMany(\App\Models\Lecturer::class);
	}
}

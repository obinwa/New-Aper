<?php

/**
 * Created by Reliese Model.
 * Date: Mon, 28 Jan 2019 17:05:25 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class MaritalStatus
 * 
 * @property int $id
 * @property string $name
 * @property string $description
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \Illuminate\Database\Eloquent\Collection $lecturers
 *
 * @package App\Models
 */
class MaritalStatus extends Eloquent
{
	protected $table = 'marital_status';

	protected $fillable = [
		'name',
		'description'
	];

	public function lecturers()
	{
		return $this->hasMany(\App\Models\Lecturer::class);
	}
}

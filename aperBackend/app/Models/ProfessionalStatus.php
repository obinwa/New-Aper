<?php

/**
 * Created by Reliese Model.
 * Date: Mon, 28 Jan 2019 17:05:25 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class ProfessionalStatus
 * 
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $alias
 * 
 * @property \Illuminate\Database\Eloquent\Collection $lecturers
 *
 * @package App\Models
 */
class ProfessionalStatus extends Eloquent
{
	protected $table = 'professional_status';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id' => 'int'
	];

	protected $fillable = [
		'name',
		'description',
		'alias'
	];

	public function lecturers()
	{
		return $this->hasMany(\App\Models\Lecturer::class);
	}
}

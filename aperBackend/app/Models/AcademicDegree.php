<?php

/**
 * Created by Reliese Model.
 * Date: Mon, 04 Feb 2019 12:23:16 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class AcademicDegree
 * 
 * @property int $id
 * @property string $name
 * @property string $description
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property string $deleted_at
 * 
 * @property \Illuminate\Database\Eloquent\Collection $academic_qualifications
 *
 * @package App\Models
 */
class AcademicDegree extends Eloquent
{
	use \Illuminate\Database\Eloquent\SoftDeletes;
	protected $table = 'academic_degree';

	protected $fillable = [
		'name',
		'description'
	];

	public function academic_qualifications()
	{
		return $this->hasMany(\App\Models\AcademicQualification::class, 'degree_id');
	}
}

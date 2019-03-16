<?php

/**
 * Created by Reliese Model.
 * Date: Mon, 28 Jan 2019 17:05:24 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class AcademicClass
 * 
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $range
 *
 * @package App\Models
 */
class AcademicClass extends Eloquent
{
	protected $table = 'academic_class';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id' => 'int'
	];

	protected $fillable = [
		'name',
		'description',
		'range'
	];
}

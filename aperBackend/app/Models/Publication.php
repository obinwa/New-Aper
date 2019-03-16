<?php

/**
 * Created by Reliese Model.
 * Date: Sun, 10 Feb 2019 03:58:03 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Publication
 * 
 * @property int $id
 * @property int $lecturer_id
 * @property string $title
 * @property string $type
 * @property string $details
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \App\Models\Lecturer $lecturer
 *
 * @package App\Models
 */
class Publication extends Eloquent
{
	protected $table = 'publication';

	protected $casts = [
		'lecturer_id' => 'int'
	];

	protected $fillable = [
		'lecturer_id',
		'title',
		'type',
		'details'
	];

	public function lecturer()
	{
		return $this->belongsTo(\App\Models\Lecturer::class);
	}
}

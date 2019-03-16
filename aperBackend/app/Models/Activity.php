<?php

/**
 * Created by Reliese Model.
 * Date: Mon, 04 Feb 2019 15:21:07 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Activity
 * 
 * @property int $id
 * @property int $lecturer_id
 * @property string $position
 * @property bool $type
 * @property \Carbon\Carbon $start_date
 * @property \Carbon\Carbon $end_date
 * @property \Carbon\Carbon $till_date
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \App\Models\Lecturer $lecturer
 *
 * @package App\Models
 */
class Activity extends Eloquent
{
	protected $table = 'activity';

	protected $casts = [
		'lecturer_id' => 'int',
		'type' => 'int'
	];

	protected $dates = [
		'start_date',
		'end_date',
		'till_date'
	];

	protected $fillable = [
		'lecturer_id',
		'position',
		'type',
		'start_date',
		'end_date',
		'till_date'
	];

	public function lecturer()
	{
		return $this->belongsTo(\App\Models\Lecturer::class);
	}
}

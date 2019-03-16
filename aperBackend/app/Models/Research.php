<?php

/**
 * Created by Reliese Model.
 * Date: Wed, 13 Feb 2019 04:42:10 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Research
 * 
 * @property int $id
 * @property int $lecturer_id
 * @property int $status
 * @property int $rcnp_status
 * @property string $title
 * @property string $description
 * @property \Carbon\Carbon $start_date
 * @property \Carbon\Carbon $end_date
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \App\Models\Lecturer $lecturer
 *
 * @package App\Models
 */
class Research extends Eloquent
{
	protected $table = 'research';

	protected $casts = [
		'lecturer_id' => 'int',
		'status' => 'int',
		'rcnp_status' => 'int'
	];

	protected $dates = [
		'start_date',
		'end_date'
	];

	protected $fillable = [
		'lecturer_id',
		'status',
		'rcnp_status',
		'title',
		'description',
		'start_date',
		'end_date'
	];

	public function lecturer()
	{
		return $this->belongsTo(\App\Models\Lecturer::class);
	}
}

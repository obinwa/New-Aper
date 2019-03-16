<?php

/**
 * Created by Reliese Model.
 * Date: Mon, 28 Jan 2019 17:05:25 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class ResearchGrant
 * 
 * @property int $id
 * @property int $lecturer_id
 * @property string $type
 * @property string $awarding_body
 * @property \Carbon\Carbon $start_date
 * @property \Carbon\Carbon $end_date
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \App\Models\Lecturer $lecturer
 *
 * @package App\Models
 */
class ResearchGrant extends Eloquent
{
	protected $table = 'research_grant';

	protected $casts = [
		'lecturer_id' => 'int'
	];

	protected $dates = [
		'start_date',
		'end_date'
	];

	protected $fillable = [
		'lecturer_id',
		'type',
		'awarding_body',
		'start_date',
		'end_date'
	];

	public function lecturer()
	{
		return $this->belongsTo(\App\Models\Lecturer::class);
	}
}

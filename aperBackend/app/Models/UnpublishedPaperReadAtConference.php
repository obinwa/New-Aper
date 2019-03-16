<?php

/**
 * Created by Reliese Model.
 * Date: Wed, 13 Feb 2019 09:54:11 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class UnpublishedPaperReadAtConference
 * 
 * @property int $id
 * @property int $lecturer_id
 * @property string $name
 * @property string $title
 * @property string $venue
 * @property \Carbon\Carbon $date
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \App\Models\Lecturer $lecturer
 *
 * @package App\Models
 */
class UnpublishedPaperReadAtConference extends Eloquent
{
	public $incrementing = false;

	protected $casts = [
		'id' => 'int',
		'lecturer_id' => 'int'
	];

	protected $dates = [
		'date'
	];

	protected $fillable = [
		'lecturer_id',
		'name',
		'title',
		'venue',
		'date'
	];

	public function lecturer()
	{
		return $this->belongsTo(\App\Models\Lecturer::class);
	}
}

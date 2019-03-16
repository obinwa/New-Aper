<?php

/**
 * Created by Reliese Model.
 * Date: Tue, 05 Feb 2019 01:53:04 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class ProfessionalQualification
 * 
 * @property int $id
 * @property int $lecturer_id
 * @property string $profession
 * @property string $qualification
 * @property string $institution
 * @property string $country
 * @property string $awarding_body
 * @property \Carbon\Carbon $date_of_award
 * @property string $evidence_url
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \App\Models\Lecturer $lecturer
 *
 * @package App\Models
 */
class ProfessionalQualification extends Eloquent
{
	protected $casts = [
		'lecturer_id' => 'int'
	];

	protected $dates = [
		'date_of_award'
	];

	protected $fillable = [
		'lecturer_id',
		'profession',
		'qualification',
		'institution',
		'country',
		'awarding_body',
		'date_of_award',
		'evidence_url'
	];

	public function lecturer()
	{
		return $this->belongsTo(\App\Models\Lecturer::class);
	}
}

<?php

/**
 * Created by Reliese Model.
 * Date: Wed, 13 Feb 2019 09:50:22 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class LecturerAssessment
 * 
 * @property int $id
 * @property int $lecturer_id
 * @property int $settings_id
 * @property string $teaching_score
 * @property string $research_score
 * @property string $publication_score
 * @property string $post_graduate_score
 * @property string $other_departmental_resposibilities_score
 * @property string $contribution_to_university_score
 * @property int $hod_id
 * @property int $dean_id
 * @property int $lecturer_decison
 * @property int $dean_recomendation
 * @property string $dean_comment
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \App\Models\Lecturer $lecturer
 * @property \App\Models\Setting $setting
 *
 * @package App\Models
 */
class LecturerAssessment extends Eloquent
{
	protected $table = 'lecturer_assessment';

	protected $casts = [
		'lecturer_id' => 'int',
		'settings_id' => 'int',
		'hod_id' => 'int',
		'dean_id' => 'int',
		'lecturer_decison' => 'int',
		'dean_recomendation' => 'int'
	];

	protected $fillable = [
		'lecturer_id',
		'settings_id',
		'teaching_score',
		'research_score',
		'publication_score',
		'post_graduate_score',
		'other_departmental_resposibilities_score',
		'contribution_to_university_score',
		'hod_id',
		'dean_id',
		'lecturer_decison',
		'dean_recomendation',
		'dean_comment'
	];

	public function lecturer()
	{
		return $this->belongsTo(\App\Models\Lecturer::class);
	}

	public function setting()
	{
		return $this->belongsTo(\App\Models\Setting::class, 'settings_id');
	}
}

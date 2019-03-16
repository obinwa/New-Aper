<?php

/**
 * Created by Reliese Model.
 * Date: Wed, 13 Feb 2019 04:05:40 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class ResaerchCollaborator
 * 
 * @property int $id
 * @property int $lecturer_id
 * @property int $type
 * @property string $title
 * @property string $collaborator
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property \App\Models\Lecturer $lecturer
 *
 * @package App\Models
 */
class ResaerchCollaborator extends Eloquent
{
	protected $casts = [
		'lecturer_id' => 'int',
		'type' => 'int'
	];

	protected $fillable = [
		'lecturer_id',
		'type',
		'title',
		'collaborator'
	];

	public function lecturer()
	{
		return $this->belongsTo(\App\Models\Lecturer::class, 'id');
	}
}

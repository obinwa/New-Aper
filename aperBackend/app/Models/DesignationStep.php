<?php

/**
 * Created by Reliese Model.
 * Date: Mon, 28 Jan 2019 17:05:25 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class DesignationStep
 * 
 * @property int $id
 * @property int $designation_id
 * @property int $step_id
 * @property string $salary
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property string $deleted_at
 * 
 * @property \App\Models\Designation $designation
 * @property \App\Models\Step $step
 *
 * @package App\Models
 */
class DesignationStep extends Eloquent
{
	use \Illuminate\Database\Eloquent\SoftDeletes;

	protected $casts = [
		'designation_id' => 'int',
		'step_id' => 'int'
	];

	protected $fillable = [
		'designation_id',
		'step_id',
		'salary'
	];

	public function designation()
	{
		return $this->belongsTo(\App\Models\Designation::class);
	}

	public function step()
	{
		return $this->belongsTo(\App\Models\Step::class);
	}
}

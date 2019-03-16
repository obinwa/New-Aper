<?php

/**
 * Created by Reliese Model.
 * Date: Mon, 28 Jan 2019 17:05:24 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Admin
 * 
 * @property int $id
 * @property string $firstname
 * @property string $lastname
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property int $active
 *
 * @package App\Models
 */
class Admin extends Eloquent
{
	protected $table = 'admin';

	protected $casts = [
		'active' => 'int'
	];

	protected $fillable = [
		'firstname',
		'lastname',
		'active'
	];
}

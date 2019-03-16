<?php

namespace App\Http\Controllers;

use App\Traits\ApiResponser;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests, ApiResponser;

    public function save_uploaded_file($uploaded_file, $folder)
    {
        try {

            $name = str_slug('uploaded_file_' . microtime()) . '.' . $uploaded_file->getClientOriginalExtension();
            $destinationPath = ('lecturer_files/'.$folder);

            $uploaded_file->move(public_path($destinationPath), $name);
            $file_saver = $destinationPath . '/' . $name;
            return $file_saver;

        } catch (\Exception $e) {
            dd($e->getMessage());
            return false;
        }
    }
}

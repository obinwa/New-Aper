<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    //

    public function test (){
//        dd("oooosjdjjdjkdj");
    }

    public function  createSettings(Request $request){

        $request->validate([
            'lecturer_start_time'=>'required',
        ]);

//        1=collaboration within faculty,2=collaboration within university,3=collaboration outside university
        $input = $request->only('lecturer_start_time');

        if($request->has('lecturer_end_time')){
            $input['lecturer_end_time'] = $request->lecturer_end_time;
        }

        if($request->has('lecturer_end_time')){
            $input['lecturer_end_time'] = $request->lecturer_end_time;
        }

        if($request->has('hod_start_time')){
            $input['hod_start_time'] = $request->hod_start_time;
        }

        if($request->has('hod_end_time')){
            $input['hod_end_time'] = $request->hod_end_time;
        }

        if($request->has('dean_start_time')){
            $input['dean_start_time'] = $request->dean_start_time;
        }

        if($request->has('dean_end_time')){
            $input['dean_end_time'] = $request->dean_end_time;
        }

        $settings = Setting::create($input);
        return $this->showOne($settings, 200);

    }

    public function update(Request $request, $id){
        $step = Setting::findOrFail($id);

        if($request->has('lecturer_start_time')){
            $step->lecturer_start_time = $request->lecturer_start_time;
        }

        if($request->has('lecturer_end_time')){
            $step->lecturer_end_time = $request->lecturer_end_time;
        }

        if($request->has('hod_start_time')){
            $step->hod_start_time = $request->hod_start_time;
        }

        if($request->has('hod_end_time')){
            $step->hod_end_time = $request->hod_end_time;
        }

        if($request->has('dean_start_time')){
            $step->dean_start_time = $request->dean_start_time;
        }

        if($request->has('dean_end_time')){
            $step->dean_end_time = $request->dean_end_time;
        }

        if(!$step->isDirty()){
            $errormessage="you need to specify a different value";
            return $this->errorResponse($errormessage, 409);
        }

        $step->save();

        return $this->showOne($step, 200);
    }

    public function getAll(){
        $step = Setting::latest()->get();
        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = Faculty::where('id', $id)->first();
        return $this->showOne($step);
    }

}

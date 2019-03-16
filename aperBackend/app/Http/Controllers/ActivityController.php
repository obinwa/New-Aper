<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    //
    public function create(){

    }

    public function update(Request $request, $id){
        $step = Activity::findOrFail($id);

        if($request->has('position')){
            $step->position = $request->position;
        }

        if($request->has('type')){
            $step->type = $request->type;
        }

        if($request->has('start_date')){
            $step->start_date = Carbon::parse($request->start_date);
        }

        if($request->has('end_date')){
            $step->end_date = Carbon::parse($request->end_date);
        }

        if($request->has('till_date')){
            $step->till_date = Carbon::parse($request->till_date);
        }
//        1=current, 2=previous

        if( $request->type == 1){
            $step->end_date = null;
        }
        if( $request->type == 2){
            $step->till_date = null;
        }

//        Evidence upload update
//        if($request->has('alias')){
//            $step->alias = $request->alias;
//        }

        if(!$step->isDirty()){
            $errormessage="you need to specify a different value";
            return $this->errorResponse($errormessage, 409);
        }

        $step->save();


        return $this->showOne($step, 200);
    }

    public function getAll($id=null){
        $lecturerId= auth('api')->user()->id;
        if(isset($id)){
            $lecturerId=$id;
        }
        $step = Activity::with('lecturer')->where('lecturer_id',$lecturerId)->get();

        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = Designation::with('lecturer')->where('id', $id)->first();
        return $this->showOne($step);
    }

}

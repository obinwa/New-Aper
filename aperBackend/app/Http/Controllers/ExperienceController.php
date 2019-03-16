<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    //
    public function create(){

    }

    public function update(Request $request, $id){
        $step = Experience::findOrFail($id);

        if($request->has('designation_id')){
            $step->designation_id = $request->designation_id;
        }

        if($request->has('subject_taught')){
            $step->subject_taught = $request->subject_taught;
        }

        if($request->has('start_date')){
            $step->start_date = Carbon::parse($request->start_date);
        }

        if($request->has('end_date')){
            $step->end_date = Carbon::parse($request->end_date);
        }

        if($request->has('specialization')){
            $step->specialization = $request->specialization;
        }

//        Evidence Url
//        if($request->has('evidence_url')){
//            $step->evidence_url = $request->evidence_url;
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
        $step = Experience::with(['lecturer','designation'])->where('lecturer_id', $lecturerId)->get();
        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = Experience::with(['lecturer','designation'])->where('id', $id)->first();
        return $this->showOne($step);
    }
}

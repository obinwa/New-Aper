<?php

namespace App\Http\Controllers;

use App\Models\AcademicQualification;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AcademicQualificationController extends Controller
{
    //This is also known as Academic qualification/Educational Qualification
    public function create(){

    }

    public function update(Request $request, $id){
        $step = AcademicQualification::findOrFail($id);

        if($request->has('degree_id')){
            $step->degree_id = $request->degree_id;
        }

        if($request->has('academic_class_id')){
            $step->academic_class_id = $request->academic_class_id;
        }

        if($request->has('institution')){
            $step->institution = $request->institution;
        }

        if($request->has('award_date')){
            $step->award_date = Carbon::parse($request->award_date);
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
        $step = AcademicQualification::with(['lecturer', 'academic_degree','academic_class'])->where('lecturer_id',$lecturerId)->get();

        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = AcademicQualification::with(['lecturer', 'academic_degree','academic_class'])->where('id', $id)->first();
        return $this->showOne($step);
    }

}

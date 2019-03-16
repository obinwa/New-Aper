<?php

namespace App\Http\Controllers;

use App\Models\ProfessionalQualification;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class ProfessionalQualificationController extends Controller
{
    //
    public function create(){

    }

    public function update(Request $request, $id){
        $step = ProfessionalQualification::findOrFail($id);

        if($request->has('profession')){
            $step->profession = $request->profession;
        }

        if($request->has('qualification')){
            $step->qualification = $request->qualification;
        }

        if($request->has('qualification_institution')){
            $step->institution = $request->qualification_institution;
        }

        if($request->has('country')){
            $step->country = $request->country;
        }

        if($request->has('awarding_body')){
            $step->awarding_body = $request->awarding_body;
        }

        if($request->has('award_date')){
            $step->date_of_award = Carbon::parse($request->date_of_award);
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
        $step = ProfessionalQualification::with('lecturer')->where('lecturer_id',$lecturerId)->get();

        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = ProfessionalQualification::with('lecturer')->where('id', $id)->first();
        return $this->showOne($step);
    }
}

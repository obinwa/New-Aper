<?php

namespace App\Http\Controllers;

use App\Models\ResearchGrant;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ResearchGrantController extends Controller
{
    //

    public function update(Request $request, $id){
        $step = ResearchGrant::findOrFail($id);

        if($request->has('awarding_body')){
            $step->awarding_body = $request->awarding_body;
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
        $step = ResearchGrant::with('lecturer')->where('lecturer_id',  $lecturerId)->get();

        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = ResearchGrant::with('lecturer')->where('id', $id)->first();
        return $this->showOne($step);
    }
}

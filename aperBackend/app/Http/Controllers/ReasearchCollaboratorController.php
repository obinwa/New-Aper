<?php

namespace App\Http\Controllers;

use App\Models\ResaerchCollaborator;
use App\Models\ResearchForCb;
use Illuminate\Http\Request;

class ReasearchCollaboratorController extends Controller
{
    //
    public function update(Request $request, $id){
        $step = ResaerchCollaborator::findOrFail($id);

        if($request->has('title')){
            $step->title = $request->title;
        }

        if($request->has('type')) {
            $step->type = $request->type;
        }

        if($request->has('collaborator')) {
            $step->collaborator = $request->collaborator;
        }

        if(!$step->isDirty()){
            $errormessage="you need to specify a different value";
            return $this->errorResponse($errormessage, 409);
        }

        $step->save();

        return $this->showOne($step, 200);
    }

    public function getAll( $id=null){
        $lecturerId= auth('api')->user()->id;
        if(isset($id)){
            $lecturerId=$id;
        }
        $step = ResaerchCollaborator::where('lecturer_id',$lecturerId)->get();

        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = ResaerchCollaborator::with('steps')->where('id', $id)->first();
        return $this->showOne($step);
    }
}

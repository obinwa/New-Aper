<?php

namespace App\Http\Controllers;

use App\Models\Publication;
use Illuminate\Http\Request;

class PublicationController extends Controller
{
    //
    public function update(Request $request, $id){
        $step = Publication::findOrFail($id);

        if($request->has('title')){
            $step->title = $request->title;
        }

        if($request->has('type')){
            $step->type = $request->type;
        }

        if($request->has('details')){
            $step->details = $request->details;
        }

        if(!$step->isDirty()){
            $errormessage="you need to specify a different value";
            return $this->errorResponse($errormessage, 409);
        }

        $step->save();

        return $this->showOne($step, 200);
    }

    public function getAll($id = null){
        $lecturerId= auth('api')->user()->id;
        if(isset($id)){
            $lecturerId=$id;
        }
        $step = Publication::with('lecturer')->where('lecturer_id', $lecturerId)->get();
        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = Publication::with('lecturer')->where('id', $id)->first();
        return $this->showOne($step);
    }

    public function delete($id){
        $step = Publication::findOrFail($id);
        $step->delete();
        return $this->showOne($step);
    }
}

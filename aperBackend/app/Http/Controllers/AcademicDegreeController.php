<?php

namespace App\Http\Controllers;

use App\Models\AcademicDegree;
use Illuminate\Http\Request;

class AcademicDegreeController extends Controller
{
    //
    public function create(Request $request)
    {
        $request->validate([
//            'designation_id'=> 'required|exists:designation,id',
            'name'=>'required',
//            'title' => 'required',
            'description' => 'required'
        ]);


        $ms = AcademicDegree::create([
//            'lecturer_id' => auth('api')->user()->id,
            'name' => $request->name,
            'description' => $request->description,

        ]);



        return $this->showOne($ms, 200);
    }

    public function update(Request $request, $id){
        $step = AcademicDegree::findOrFail($id);

        if($request->has('name')){
            $step->name = $request->name;
        }

        if($request->has('description')){
            $step->description = $request->description;
        }


        if(!$step->isDirty()){
            $errormessage="you need to specify a different value";
            return $this->errorResponse($errormessage, 409);
        }

        $step->save();

        return $this->showOne($step, 200);
    }


    public function getAll(){
        $step = AcademicDegree::all();
        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = AcademicDegree::where('id', $id)->first();
        return $this->showOne($step);
    }
}

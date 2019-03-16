<?php

namespace App\Http\Controllers;

use App\Models\MaritalStatus;
use Illuminate\Http\Request;

class MaritalStatusController extends Controller
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


        $ms = MaritalStatus::create([
//            'lecturer_id' => auth('api')->user()->id,
            'name' => $request->name,
            'description' => $request->description,

        ]);



        return $this->showOne($ms, 200);
    }

    public function update(Request $request, $id){
        $step = MaritalStatus::findOrFail($id);

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
        $step = MaritalStatus::all();
        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = Experience::where('id', $id)->first();
        return $this->showOne($step);
    }
}

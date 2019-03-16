<?php

namespace App\Http\Controllers;

use App\Models\Grade;
use Illuminate\Http\Request;

class GradeController extends Controller
{
    //
    public function create(Request $request){
        $request->validate([
            'name' => 'required|unique:grades',
            'description'=>'required',

        ]);
        $input = $request->only(['name', 'description']);
        $step = Grade::create($input);
        return $this->showOne($step);
    }

    public function update(Request $request, $id){
        $step = Grade::findOrFail($id);

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
        $step = Grade::all();

        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = Grade::where('id', $id)->first();

        return $this->showOne($step);
    }

}

<?php

namespace App\Http\Controllers;

use App\Models\Step;
use Illuminate\Http\Request;

class StepController extends Controller
{
    //
    public function create(Request $request){
        $request->validate([
            'name' => 'required|unique:steps',
            'description'=>'required',

        ]);
        $input = $request->only(['name', 'description']);
        $step = Step::create($input);
        return $this->showOne($step);
    }

    public function update(Request $request, $id){
        $step = Step::findOrFail($id);

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


//        $step->fresh();
        return $this->showOne($step, 200);
    }

    public function getAll(){
       $step = Step::all();

       return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = Step::where('id', $id)->first();

        return $this->showOne($step);
    }


}

<?php

namespace App\Http\Controllers;

use App\Models\DesignationStep;
use Illuminate\Http\Request;

class DesignationStepController extends Controller
{
    //
    public function create(Request $request){
        $request->validate([
            'designation_id' => 'required|exists:designation,id',
            'step_id'=>'required|exists:steps,id',
            'salary' => 'required'
        ]);
        $input = $request->only(['designation_id', 'step_id', 'salary']);
        $step = DesignationStep::create($input);
        return $this->showOne($step);
    }

    public function update(Request $request, $id){
        $step = DesignationStep::findOrFail($id);

        if($request->has('salary')){
            $step->salary = $request->salary;
        }


        if(!$step->isDirty()){
            $errormessage="you need to specify a different value";
            return $this->errorResponse($errormessage, 409);
        }

        $step->save();


        return $this->showOne($step, 200);
    }

    public function getAll(){
        $step = DesignationStep::with(['designation','step'])->get();

        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = DesignationStep::with(['designation','steps'])->where('id', $id)->first();
        return $this->showOne($step);
    }


}

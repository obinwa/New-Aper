<?php

namespace App\Http\Controllers;

use App\Models\Designation;
use App\Models\ManytoMany;
use Illuminate\Http\Request;

class DesignationController extends Controller
{
    //
    public function create(Request $request){
        $request->validate([
            'name' => 'required|unique:grades',
            'description'=>'required',
//            'grade_id'=> 'required|exists:grades,id',
//            'step_id'=> 'required|exists:steps,id',
            'alias' => 'required'
        ]);
        $input = $request->only(['name', 'description', 'alias']);
        $step = Designation::create($input);
        return $this->showOne($step);
    }

    public function update(Request $request, $id){
        $step = Designation::findOrFail($id);

        if($request->has('name')){
            $step->name = $request->name;
        }

        if($request->has('description')){
            $step->description = $request->description;
        }

        if($request->has('alias')){
            $step->alias = $request->alias;
        }


        if(!$step->isDirty()){
            $errormessage="you need to specify a different value";
            return $this->errorResponse($errormessage, 409);
        }

        $step->save();

        return $this->showOne($step, 200);
    }

    public function getAll(){
        $step = Designation::with('steps')->get();

        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = Designation::with('steps')->where('id', $id)->first();
        return $this->showOne($step);
    }
}

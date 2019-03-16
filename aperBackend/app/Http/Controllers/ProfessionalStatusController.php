<?php

namespace App\Http\Controllers;

use App\Models\ProfessionalStatus;
use Illuminate\Http\Request;

class ProfessionalStatusController extends Controller
{
    //
    public function create(Request $request){
        $request->validate([
            'name' => 'required|unique:grades',
            'description'=>'required',
//            'alias'=> 'required|exists:grades,id',

        ]);
        $input = $request->only(['name', 'description','alias']);
        $step = ProfessionalStatus::create($input);
        return $this->showOne($step);
    }

    public function update(Request $request, $id){
        $step = ProfessionalStatus::findOrFail($id);

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
        $step = ProfessionalStatus::all();

        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = ProfessionalStatus::where('id', $id)->first();
        return $this->showOne($step);
    }
}

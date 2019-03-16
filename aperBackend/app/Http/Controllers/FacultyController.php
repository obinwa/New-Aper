<?php

namespace App\Http\Controllers;

use App\Models\Faculty;
use Illuminate\Http\Request;

class FacultyController extends Controller
{
    //
    public function create(Request $request){
        $request->validate([
            'name' => 'required|unique:grades',
            'description'=>'required',
        ]);
        $input = $request->only(['name', 'description','location']);
        $step = Faculty::create($input);
        return $this->showOne($step);
    }

    public function update(Request $request, $id){
        $step = Faculty::findOrFail($id);

        if($request->has('name')){
            $step->name = $request->name;
        }

        if($request->has('description')){
            $step->description = $request->description;
        }

        if($request->has('location')){
            $step->location = $request->location;
        }


        if(!$step->isDirty()){
            $errormessage="you need to specify a different value";
            return $this->errorResponse($errormessage, 409);
        }

        $step->save();

        return $this->showOne($step, 200);
    }

    public function getAll(){
        $step = Faculty::with('depatments')->get();
        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = Faculty::where('id', $id)->first();
        return $this->showOne($step);
    }

    public function createDepartment(Request$request){
        $request->validate([
            'faculty_id'=>'required|exists:faculties,id',
            'name' => 'required|unique:grades',
            'description'=>'required',
        ]);

        $input = $request->only(['name', 'description']);
        $faculty = Faculty::where('id', $request->id)->first();
        $faculty->depatments()->create($input);

        $faculty = Faculty::with('depatments')->where('id',$request->id)->first();
        return $this->showOne($faculty);

    }
}

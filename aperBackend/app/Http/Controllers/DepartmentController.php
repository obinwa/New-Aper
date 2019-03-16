<?php

namespace App\Http\Controllers;

use App\Models\Depatment;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    //
//    public function create(Request $request){
//        $request->validate([
//            'name' => 'required|unique:grades',
//            'description'=>'required',
//        ]);
//        $input = $request->only(['name', 'description','location']);
//        $step = Faculty::create($input);
//        $this->showOne($step);
//    }

    public function update(Request $request, $id){
        $step = Depatment::findOrFail($id);

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
        $step = Depatment::all();
        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = Depatment::where('id', $id)->first();
        return $this->showOne($step);
    }

//    public function createDepartment(Request$request){
//        $request->validate([
//            'faculty_id'=>'required|exists:faculties,id',
//            'name' => 'required|unique:grades',
//            'description'=>'required',
//        ]);
//
//        $input = $request->only(['name', 'description']);
//        $faculty = Faculty::where('id', $request->id)->first();
//        $faculty->depatments()->create($input);
//
//        $faculty = Faculty::with('depatments')->where('id',$request->id)->first();
//        return $this->showOne($faculty);
//
//    }
}

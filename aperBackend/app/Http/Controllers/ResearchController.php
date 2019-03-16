<?php

namespace App\Http\Controllers;

use App\Models\Research;
use Illuminate\Http\Request;

class ResearchController extends Controller
{
    //
    public function create(Request $request)
    {
        $request->validate([
//            'designation_id'=> 'required|exists:designation,id',
            'status'=>'required',
            'title' => 'required',
            'description' => 'required',
            'start_date'=>'required',
            'end_date' => 'required',
            'rcnp_status' => 'required',
            'collaborators' => 'required|array'
        ]);

//        $file_path = $this->save_uploaded_file($request->certificate, 'research');

//        $user = auth('api')->user();
        $research = Research::create([
            'lecturer_id' => auth('api')->user()->id,
            'status' => $request->status,
            'title' => $request->title,
            'rcnp_status' => $request->rcnp_status,
            'description' => $request->description,
            'start_date'=> Carbon::parse($request->start_date),
            'end_date' => Carbon::parse($request->end_date),
//            'evidence_url' =>$file_path
        ]);

        foreach($request->collaborators as $collaborator){
            $research->resaerch_collaborators()->create([
                'author'=>$collaborator['author'],
                'type'=>$collaborator['type']
            ]);
        }

        $research = Research::with('resaerch_collaborators')->where('id',$research->id)->first();
        return $this->showOne($research, 200);
    }

    public function getAll($id=null){
        $lecturerId= auth('api')->user()->id;
        if(isset($id)){
            $lecturerId=$id;
        }
        $step = Research::with('resaerch_collaborators')->where('lecturer_id',$lecturerId)->get();
        return $this->showAll($step,200);
    }

    public function  getOne($id){
        $step = Experience::with('resaerch_collaborators')->where('id', $id)->first();
        return $this->showOne($step);
    }
}

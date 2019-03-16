<?php

namespace App\Http\Controllers;

use App\Models\AcademicQualification;
use App\Models\Activity;
use App\Models\Experience;
use App\Models\Lecturer;
use App\Models\LecturerAssessment;
use App\Models\ProfessionalQualification;
use App\Models\ResaerchCollaborator;
use App\Models\ResearchForCb;
use App\Models\ResearchGrant;
use App\Models\Setting;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LecturerController extends Controller
{
    //
    public function update(Request$request){
        $step = Lecturer::findOrFail(auth('api')->user()->id);

        if($request->has('first_name') && isset($request->first_name)){
            $step->first_name = $request->first_name;
        }

        if($request->has('last_name')&& isset($request->last_name)){
            $step->last_name = $request->last_name;
        }

        if($request->has('email') && isset($request->email)){
            $step->email = $request->email;
        }

        if($request->has('sex') && isset($request->sex)){
            $step->sex = $request->sex;
        }
        if($request->has('professional_status_id') && isset($request->professional_status_id)){
            $step->professional_status_id = $request->professional_status_id;
        }

        if($request->has('date_of_birth') && isset($request->date_of_birth)){
            $step->date_of_birth = Carbon::parse($request->date_of_birth);
        }
        if($request->has('marital_status_id') && isset($request->marital_status_id)){
            $step->marital_status_id = $request->marital_status_id;
        }
        if($request->has('file_number') && isset($request->file_number)){
            $step->file_number = $request->file_number;
        }

        if($request->has('retirement_date') && isset($request->retirement_date)){
            $step->retirement_date =Carbon::parse($request->retirement_date);
        }

        if($request->has('department_id')  && isset($request->department_id)){
            $step->department_id = $request->department_id;
        }

        if($request->has('first_appointment_date') && isset($request->first_appointment_date)){
            $step->first_appointment_date =Carbon::parse($request->first_appointment_date);
        }

        if($request->has('first_appt_designation_id') && isset($request->first_appt_designation_id) ){
            $step->first_appt_designation_id = $request->first_appt_designation_id;
        }

        if($request->has('step_first_appt_designation_id') && isset($request->step_first_appt_designation_id)){
            $step->step_first_appt_designation_id = $request->step_first_appt_designation_id;
        }

        if($request->has('last_promotion_date') && isset($request->last_promotion_date)){
            $step->last_promotion_date = Carbon::parse($request->last_promotion_date);
        }

        if($request->has('last_promotion_designation_id') && isset($request->last_promotion_designation_id)){
            $step->last_promotion_designation_id = Carbon::parse($request->last_promotion_designation_id);
        }

        if($request->has('step_last_promotion_designation_id') && isset($request->step_last_promotion_designation_id)){
            $step->step_last_promotion_designation_id = $request->step_last_promotion_designation_id;
        }

        if($request->has('current_appt_designation_id') && isset($request->current_appt_designation_id)){
            $step->current_appt_designation_id = $request->current_appt_designation_id;
        }

        if($request->has('step_current_appt_designation_id') && isset($request->step_current_appt_designation_id)){
            $step->step_current_appt_designation_id = $request->step_current_appt_designation_id;
        }

        if($request->has('appt_confirmation')){
            $step->appt_confirmation = $request->appt_confirmation;
        }

        if($request->has('confirmation_date') && isset($request->confirmation_date)){
            $step->confirmation_date = Carbon::parse($request->confirmation_date);
        }

        if($request->has('salary')  && isset($request->salary)){
            $step->salary = $request->salary;
        }


        if(!$step->isDirty()){
            $errormessage="you need to specify a different value";
            return $this->errorResponse($errormessage, 409);
        }

        $step->save();

        return $this->showOne($step, 200);

    }


    public function login() {
        $credentials = request(['email', 'password']);
//        dd($credentials);
        $type = 'lecturer';
        if (!$token = auth('api')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $lecturer = Lecturer::where('email',request('email'))->first();
        if(isset($lecturer)){
           if($lecturer->hod==1){
               $type='hod';
           }
           if($lecturer->dean==1){
               $type='dean';
           }
        }
        return response()->json([
            'token' => $token,
            'expires' => auth('api')->factory()->getTTL() * 60,
            'type' => $type
        ], 200);
    }

    public function getLecturerByDepartment($id){
        $lecturer = Lecturer::with(['marital_status','professional_status','depatment'])->where('department_id',$id)->get();
        return $this->showAll($lecturer);
    }

    public function getLecturerFacultyDepartments(){
        $departments = auth('api')->user()->depatment->faculty->depatments;
        return $this->showAll($departments);
    }

    public function getBioData($id)
    {
        $lecturerId = auth('api')->user()->id;
        if (isset($id)) {
            $lecturerId = $id;
        }
        $lecturer = Lecturer::with(['marital_status','professional_status','depatment'])->where('id',$lecturerId)->first();
        return $this->showOne($lecturer);
    }

    public function getUser(){
        return response()->json([
            'user' => auth('api')->user(),
        ]);

    }

    public function createAcademicQualification(Request $request)
    {
        $request->validate([
            'academic_class_id' => 'required|exists:academic_class,id',
            'degree_id'=> 'required|exists:academic_degree,id',
            'institution'=>'required',
            'award_date' => 'required'
        ]);

        $file_path=null;
        if($request->has('certificate') && isset($request->certificate)){
            $file_path = $this->save_uploaded_file($request->certificate, 'academicQualification');
        }

        $user = auth('api')->user();
        $user->academic_qualifications()->create([
            'academic_class_id' => $request->academic_class_id,
            'degree_id' => $request->degree_id,
            'institution' => $request->institution,
            'award_date' => $request->award_date,
            'evidence_url' =>$file_path
        ]);

        $academicQualification = AcademicQualification::with(['lecturer','academic_degree'])->where('lecturer_id',auth('api')->user()->id)->latest()->first();
        return $this->showOne($academicQualification, 200);

    }

    public function createActivity(Request $request){
        $request->validate([
            'type' => 'required|numeric',
            'position' => 'required',
            'start_date'=>'required',

        ]);

//        1=current, 2=previous
        if($request->type == 2){
            $request->validate([
                'end_date' => 'required'
            ]);

            $input = $request->only(['type','position', 'start_date', 'end_date']);
            $input['start_date'] = Carbon::parse($input['start_date']);
            $input['end_date'] = Carbon::parse($input['end_date']);

            auth('api')->user()->activities()->create($input);
        }else{
            $request->validate([
                'till_date' => 'required'
            ]);

            $input = $request->only(['type','position', 'start_date', 'till_date']);

            $input['start_date'] = Carbon::parse($input['start_date']);
            $input['till_date'] = Carbon::parse($input['till_date']);

            auth('api')->user()->activities()->create($input);
        }

        $activity = Activity::with('lecturer')->where('lecturer_id',auth('api')->user()->id)->latest()->first();
        return $this->showOne($activity, 200);
    }

    public function createProfessionalQualification(Request $request)
    {
        $request->validate([
//            'academic_class_id' => 'required|exists:academic_class,id',
//            'degree_id'=> 'required|exists:academic_degree,id',
            'profession'=>'required',
            'qualification'=>'required',
            'qualification_institution'=>'required',
            'country'=>'required',
            'awarding_body'=>'required',
            'date_of_award' => 'required'
        ]);

        $file_path=null;
        if($request->has('certificate') && isset($request->certificate)){
            $file_path = $this->save_uploaded_file($request->certificate, 'academicQualification');
        }

        $user = auth('api')->user();
        $user->professional_qualifications()->create([
            'profession' => $request->profession,
            'qualification' => $request->qualification,
            'institution' => $request->qualification_institution,
            'country'=>$request->country,
            'awarding_body'=>$request->awarding_body,
            'date_of_award' => Carbon::parse($request->date_of_award),
            'evidence_url' =>$file_path
        ]);

        $professionalQualification = ProfessionalQualification::with('lecturer')->where('lecturer_id',auth('api')->user()->id)->latest()->first();
        return $this->showOne($professionalQualification, 200);
    }

    public function createExperience(Request $request)
    {
        $request->validate([
            'institution' => 'required',
            'designation_id'=> 'required|exists:designation,id',
            'subject_taught'=>'required',
            'specialization'=>'required',
            'start_date'=>'required',
            'end_date' => 'required'
        ]);

        $file_path=null;
        if($request->has('certificate') && isset($request->certificate)){
            $file_path = $this->save_uploaded_file($request->certificate, 'academicQualification');
        }
        $user = auth('api')->user();
        $user->experiences()->create([
            'institution' =>  $request->institution,
            'designation_id' => $request->designation_id,
            'subject_taught' => $request->subject_taught,
            'specialization' => $request->specialization,
            'start_date'=> Carbon::parse($request->start_date),
            'end_date' => Carbon::parse($request->end_date),
            'evidence_url' =>$file_path
        ]);

        $experience = Experience::with(['lecturer','designation'])->where('lecturer_id',auth('api')->user()->id)->latest()->first();
        return $this->showOne($experience, 200);
    }


    public function createResearchGrant(Request $request)
    {
        $request->validate([
            'awarding_body'=>'required',
            'type'=>'required',
            'start_date'=>'required',
            'end_date' => 'required'
        ]);

//        1=collaboration within faculty,2=collaboration within university,3=collaboration outside university,
        $file_path=null;
        if($request->has('certificate') && isset($request->certificate)){
            $file_path = $this->save_uploaded_file($request->certificate, 'academicQualification');
        }
        $user = auth('api')->user();
        $user->research_grants()->create([
            'awarding_body' => $request->awarding_body,
            'type' => $request->type,
            'start_date'=> Carbon::parse($request->start_date),
            'end_date' => Carbon::parse($request->end_date),
//            'evidence_url' =>$file_path
        ]);

        $researchgrant = ResearchGrant::with('lecturer')->where('lecturer_id',auth('api')->user()->id)->latest()->first();
        return $this->showOne($researchgrant, 200);
    }

    public function createPublication(Request $request)
    {
        $request->validate([
            'title'=>'required',
            'type'=>'required',
            'details'=>'required',
//            'end_date' => 'required'
        ]);

//        1=collaboration within faculty,2=collaboration within university,3=collaboration outside university,
        $file_path=null;
        if($request->has('certificate') && isset($request->certificate)){
            $file_path = $this->save_uploaded_file($request->certificate, 'academicQualification');
        }
        $user = auth('api')->user();
        $user->publications()->create([
            'title' => $request->title,
            'type' => $request->type,
            'details'=> $request->details,
//            'end_date' => Carbon::parse($request->end_date),
//            'evidence_url' =>$file_path
        ]);

        $researchgrant = ResearchGrant::with('lecturer')->where('lecturer_id',auth('api')->user()->id)->latest()->first();
        return $this->showOne($researchgrant, 200);
    }

    public function createResearchCollaboration(Request $request)
    {
        $request->validate([
            'title'=>'required',
            'type'=>'required',
            'collaborator' => 'required'
        ]);

//        1=collaboration within faculty,2=collaboration within university,3=collaboration outside university,
        $file_path=null;
        if($request->has('certificate') && isset($request->certificate)){
            $file_path = $this->save_uploaded_file($request->certificate, 'academicQualification');
        }

        $user = auth('api')->user();

        $user->resaerch_collaborator()->create([
            'title' => $request->title,
            'type'=>$request->type,
            'collaborator' => $request->collaborator,
        ]);

        $researchcb = ResaerchCollaborator::where('lecturer_id',auth('api')->user()->id)->latest()->first();

        return $this->showOne($researchcb, 200);
    }

    public function gradeLecturer(Request $request)
    {
        $request->validate([

            'teaching_score' => 'required',
            'research_score' => 'required',
            'publication_score' => 'required',
            'post_graduate_score' => 'required',
            'other_departmental_resposibilities_score' => 'required',
            'contribution_to_university_score' => 'required',

        ]);

        $hod = auth('api')->user();
        $setting = Setting::latest()->first();
        $input = $request->only(['teaching_score', 'research_score', 'publication_score', 'post_graduate_score', 'other_departmental_resposibilities_score', 'contribution_to_university_score', 'lecturer_id']);
        $input['hod_id'] = $hod->id;
        $input['settings_id'] = $setting->id;

        LecturerAssessment::create($input);

        $researchcb = LecturerAssessment::where('lecturer_id',$request->lecturer_id)->latest()->first();

        return $this->showOne($researchcb, 200);
    }

    public function getLecturerGrade($id){
        $step = LecturerAssessment::where('lecturer_id',$id)->latest()->first();
        return $this->showOne($step,200);
    }


    public function deanGradeLecturer($id,Request $request)
    {
//        $request->validate([
//            'dean_recomendation' => 'required',
//            'dean_comment' => 'required',
//
//        ]);

        $step = LecturerAssessment::where('lecturer_id',$id)->latest()->first();

        if($request->has('dean_recomendation')){
            $step->dean_recomendation = $request->dean_recomendation;
            $step->dean_id = auth('api')->user()->id;
        }
//
//        if($request->has('dean_comment')){
//            $step->dean_comment = $request->dean_comment;
//        }
//
//
//        if(!$step->isDirty()){
//            $errormessage="you need to specify a different value";
//            return $this->errorResponse($errormessage, 409);
//        }

        $step->save();

        return $this->showOne($step, 200);
    }

}

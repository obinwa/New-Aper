<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

 Route::get('/user', function (Request $request) {
    return response()->json([
        'token' => 'uisknj',
        'expires' => "jxkjnxj",
        'type' => 'ksjsnkjn'
    ], 200);});

//Route::post('/lecturer/login','LecturerController@login');


//$api = app(Dingo\Api\Routing\Router::class);


//Route::version('v1', ['namespace' => '\App\Http\Controllers'], function ($api) {

    Route::post('/user/register','AdminController@register');
    Route::post('/user/login','AdminController@login');
//    -------------------------------------------------------
//    Steps
    Route::get('/admin/getAllStep','StepController@getAll');
    Route::get('/admin/getOneStep/{id}','StepController@getOne');
    Route::post('/admin/createStep','StepController@create');
    Route::post('/admin/updateStep/{id}','StepController@update');

//    ---------------------------------------------------------

//    -------------------------------------------------------
//    Grades
//    Route::get('/admin/getAllGrade','GradeController@getAll');
//    Route::get('/admin/getOneGrade/{id}','GradeController@getOne');
//    Route::post('/admin/createGrade','GradeController@create');
//    Route::post('/admin/updateGrade/{id}','GradeController@update');

//    ---------------------------------------------------------

//    -------------------------------------------------------
//    Marital status
    Route::get('/admin/getAllMaritalStatus','MaritalStatusController@getAll');
    Route::get('/admin/getOneMaritalStatus/{id}','MaritalStatusController@getOne');
    Route::post('/admin/createMaritalStatus','MaritalStatusController@create');
    Route::post('/admin/updateMaritalStatus/{id}','MaritalStatusController@update');

//    ---------------------------------------------------------

//    -------------------------------------------------------
//    Academic degree
    Route::get('/admin/getAllAcademicDegree','AcademicDegreeController@getAll');
    Route::get('/admin/getOneAcademicDegree/{id}','AcademicDegreeController@getOne');
    Route::post('/admin/createAcademicDegree','AcademicDegreeController@create');
    Route::post('/admin/updateAcademicDegree/{id}','AcademicDegreeController@update');

//    ---------------------------------------------------------

//    -------------------------------------------------------
//    Academic class
    Route::get('/admin/getAllAcademicClass','AcademicClassController@getAll');
    Route::get('/admin/getOneAcademicClass/{id}','AcademicClassController@getOne');
    Route::post('/admin/createAcademicClass','AcademicClassController@create');
    Route::post('/admin/updateAcademicClass/{id}','AcademicClassController@update');

//    ---------------------------------------------------------

//    -------------------------------------------------------
//    Designation and Designation steps
    Route::get('/admin/getAllDesignation','DesignationController@getAll');
    Route::get('/admin/getOneDesignation/{id}','DesignationController@getOne');
    Route::post('/admin/createDesignation','DesignationController@create');
    Route::post('/admin/updateDesignation/{id}','DesignationController@update');

    Route::get('/admin/getAllDesignationSteps','DesignationStepController@getAll');
    Route::get('/admin/getOneDesignationSteps/{id}','DesignationStepController@getOne');
    Route::post('/admin/createDesignationSteps','DesignationStepController@create');
    Route::post('/admin/updateDesignationSteps/{id}','DesignationStepController@update');

//    ---------------------------------------------------------

//    -------------------------------------------------------
//    Faculty and Department
    Route::get('/admin/getAllFaculty','FacultyController@getAll');
    Route::get('/admin/getOneFaculty/{id}','FacultyController@getOne');
    Route::post('/admin/createFaculty','FacultyController@create');
    Route::post('/admin/updateFaculty/{id}','FacultyController@update');

    Route::get('/admin/getAllDepartment','DepartmentController@getAll');
    Route::get('/admin/getOneDepartment/{id}','DepartmentController@getOne');
    Route::post('/admin/createDepartment','FacultyController@createDepartment');
    Route::post('/admin/updateDepartment/{id}','DepartmentController@update');
//    -------------------------------------------------------------------------------------

//    ---------------------------------------------------------------------------------------
    //    Professional Status
    Route::get('/admin/getAllProfessionalStatus','ProfessionalStatusController@getAll');
    Route::get('/admin/getOneProfessionalStatus/{id}','ProfessionalStatusController@getOne');
    Route::post('/admin/createProfessionalStatus','ProfessionalStatusController@create');
    Route::post('/admin/updateProfessionalStatus/{id}','ProfessionalStatusController@update');

//    ----------------------------------------------------------------------------------------

//    ---------------------------------------------------------------------------------------
    //    Login Status
    Route::post('/lecturer/login','LecturerController@login');
//    ----------------------------------------------------------------------------------------


    Route::group(['middleware' => 'jwt.auth'], function ($api) {
        Route::get('/lecturer/me','LecturerController@getUser');

        Route::get('/lecturer/byHod/{id}','LecturerController@getBioData');
        Route::post('/lecturer/profileUpdate','LecturerController@update');

//    -------------------------------------------------------
//    Activity
        Route::get('/lecturer/activityByHod/{id}','ActivityController@getAll');
        Route::get('/lecturer/activity','ActivityController@getAll');
        Route::get('/lecturer/activity/{id}','ActivityController@getOne');
        Route::post('/lecturer/activity','LecturerController@createActivity');
        Route::post('/lecturer/activity/{id}','ActivityController@update');

//    ---------------------------------------------------------

//    -------------------------------------------------------
//    Academic Qualification
        Route::get('/lecturer/academicQualificationsByHod/{id}','AcademicQualificationController@getAll');
        Route::get('/lecturer/academicQualifications','AcademicQualificationController@getAll');
        Route::get('/lecturer/academicQualifications/{id}','AcademicQualificationController@getOne');
        Route::post('/lecturer/academicQualifications','LecturerController@createAcademicQualification');
        Route::post('/lecturer/academicQualifications/{id}','AcademicQualificationController@update');

//    ---------------------------------------------------------

//    ------------------------------------------------------------------------------------
//    Professional Qualification
        Route::get('/lecturer/professionalQualificationsByHod/{id}','ProfessionalQualificationController@getAll');
        Route::get('/lecturer/professionalQualifications','ProfessionalQualificationController@getAll');
        Route::get('/lecturer/professionalQualifications/{id}','ProfessionalQualificationController@getOne');
        Route::post('/lecturer/professionalQualifications','LecturerController@createProfessionalQualification');
        Route::post('/lecturer/professionalQualifications/{id}','ProfessionalQualificationController@update');

//    --------------------------------------------------------------------------------------

//    ------------------------------------------------------------------------------------
//    Experience

                Route::get('/lecturer/experienceByHod/{id}','ExperienceController@getAll');

        Route::get('/lecturer/experience','ExperienceController@getAll');
        Route::get('/lecturer/experience/{id}','ExperienceController@getOne');
        Route::post('/lecturer/experience','LecturerController@createExperience');
        Route::post('/lecturer/experience/{id}','ExperienceController@update');

//    --------------------------------------------------------------------------------------


//    ------------------------------------------------------------------------------------
//    Research
        Route::get('/lecturer/academicResearchByHod/{id}','ResearchController@getAll');
        Route::get('/lecturer/academicResearch','ResearchController@getAll');
        Route::get('/lecturer/academicResearch/{id}','ResearchController@getOne');
        Route::post('/lecturer/academicResearch','ResearchController@create');
//        Route::post('/lecturer/academicResearch/{id}','ResearchController@update');

//    --------------------------------------------------------------------------------------

//    ------------------------------------------------------------------------------------
//    Research Collaboration
        Route::get('/lecturer/collaboratorByHod/{id}','ResearchController@getAll');
        Route::get('/lecturer/collaborator','ReasearchCollaboratorController@getAll');
        Route::get('/lecturer/collaborator/{id}','ReasearchCollaboratorController@getOne');
        Route::post('/lecturer/collaborator','LecturerController@createResearchCollaboration');
        Route::post('/lecturer/collaborator/{id}','ReasearchCollaboratorController@update');

//        Route::post('/lecturer/academicResearch/{id}','ResearchController@update');

//    --------------------------------------------------------------------------------------

//    ------------------------------------------------------------------------------------
//    Research Grant


        Route::get('/lecturer/researchGrantByHod/{id}','ResearchGrantController@getAll');
        Route::get('/lecturer/researchGrant','ResearchGrantController@getAll');
        Route::get('/lecturer/researchGrant/{id}','ResearchGrantController@getOne');
        Route::post('/lecturer/researchGrant','LecturerController@createResearchGrant');
        Route::post('/lecturer/researchGrant/{id}','ResearchGrantController@update');

//        Route::post('/lecturer/academicResearch/{id}','ResearchController@update');

//    --------------------------------------------------------------------------------------

//    ------------------------------------------------------------------------------------
//    Publicaion

        Route::get('/lecturer/publicationByHod/{id}','PublicationController@getAll');
        Route::get('/lecturer/publication','PublicationController@getAll');
        Route::get('/lecturer/publication/{id}','PublicationController@getOne');
        Route::post('/lecturer/publication','LecturerController@createPublication');
        Route::post('/lecturer/publication/{id}','PublicationController@update');
//        Route::delete('/lecturer/publication/{id}','PublicationController@update');


//    --------------------------------------------------------------------------------------

//    ------------------------------------------------------------------------------------
//    Hod
//        ByHod/{id}
        Route::get('/hod/getAllLecturer/{id}','LecturerController@getLecturerByDepartment');
        Route::get('/dean/getAllDepartmentForDean','LecturerController@getLecturerFacultyDepartments');
        Route::get('/lecturer/publication/{id}','PublicationController@getOne');
        Route::post('/lecturer/publication','LecturerController@createPublication');
//        Route::post('/lecturer/academicResearch/{id}','ResearchController@update');

//    --------------------------------------------------------------------------------------

        //    ------------------------------------------------------------------------------------
//    Hod
//        ByHod/{id}
//        Route::get('/hod/getAllLecturer/{id}','LecturerController@getLecturerByDepartment');
//        Route::get('/dean/getAllDepartmentForDean','LecturerController@getLecturerFacultyDepartments');
        Route::get('/getLecturerGrade/{id}','LecturerController@getLecturerGrade');
        Route::post('/hod/gradeLecturer','LecturerController@gradeLecturer');
        Route::post('/deanGradeLecturerResult/{id}','LecturerController@deanGradeLecturer');

//    --------------------------------------------------------------------------------------

//    ------------------------------------------------------------------------------------
//    Admin
//        ByHod/{id}
//        Route::get('/hod/getAllLecturer/{id}','LecturerController@getLecturerByDepartment');
//        Route::get('/dean/getAllDepartmentForDean','LecturerController@getLecturerFacultyDepartments');
//        Route::get('/lecturer/publication/{id}','PublicationController@getOne');
        Route::post('/admin/publication','AdminController@createSettings');
        Route::post('/admin/publication/{id}','AdminController@update');
//        Route::post('/lecturer/academicResearch/{id}','ResearchController@update');

//    --------------------------------------------------------------------------------------

//    ------------------------------------------------------------------------------------
//    Admin
//        ByHod/{id}
//        Route::get('/hod/getAllLecturer/{id}','LecturerController@getLecturerByDepartment');
        Route::get('/admin/setting','AdminController@getAll');
        Route::get('/admin/setting/{id}','AdminController@getOne');
        Route::post('/admin/setting','AdminController@createSettings');
        Route::post('/admin/setting/{id}','AdminController@update');
//        Route::put('/lecturer/academicResearch/{id}','ResearchController@update');
//
//    --------------------------------------------------------------------------------------


    });

//});

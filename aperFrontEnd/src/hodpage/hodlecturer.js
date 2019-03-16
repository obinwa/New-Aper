import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import RightSidebar from '../components/right-sidebar';
// import './App.css';
import { Link, Redirect} from "react-router-dom";

class HodLecturer extends Component  {

  constructor(props) {
    super(props);
    this.state = {
    user:{},
    redirect: false,
    toUrl:'',
    token:'',    

    // This is professional Qualification form
    lecturer_id:'',
    biodata:{},  
    lecturerGrade:{},  
    experiences:[],
    activities:[],  
    professional_qualifications:[], 
    academic_qualifications:[], 
    researchgrants:[],  
    publications:[],  

    teaching_score:'',
    publication_score:'',
    post_graduate_score:'',
    other_departmental_resposibilities_score:'',
    contribution_to_university_score:'',
    research_score:'',
    dean_recomendation:'',
    dean_comment:''
    // date_of_award:''
    }
    // this.check();
  }

  componentDidMount(){
    const { match: { params } } = this.props;
    this.setState({lecturer_id:params.userId})    
    this.getUser();
    // this.getDesignations();
    // this.getAcademicClass();
    // this.getAcademicQualification();
  }

  getUser(){
    let token = localStorage.getItem('token');
    if(token){
      this.setState({token:token})
        
        const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};             
        axios.get(`${URL}/lecturer/me`,options)
        .then( (response) => {
            if(response.data.user){
              console.log("fghgc")
              console.log(this.state.token)              
              console.log(response.data.user)
                this.setState({user : response.data.user });
                this.getBioData();
                this.getActivity();
                this.getExperiences();
                this.getAcademicQualification();
                this.getProfessionalQualification();
                this.getResearchGrant();
                this.getPublications();
                this.getLecturerGrade();
            }
        })
        .catch((error)=> {
            if(error.response){
              console.log(error.response);
              if(error.response.data.status_code == 401){
                // redirect
                this.setMyRoute('/')
              }            
              localStorage.clear()
            }
        });
    }
  }

  setMyRoute(x){
    this.setState({redirect:true,toUrl:x});
  }

  onSubmitGrade = (e) => {
    e.preventDefault();
    const {...formData } = this.state;
    console.log(formData);
    console.log(URL);
    console.log(this.state.token)
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};             
    axios.post(`${URL}/hod/gradeLecturer`, formData, options)
      .then((response) => {
        if (response.status == 200) {
          this.setState({
            teaching_score:'',
            publication_score:'',
            post_graduate_score:'',
            other_departmental_resposibilities_score:'',
            contribution_to_university_score:'',
            research_score:''
          })
            console.log(response.data)
            this.getLecturerGrade();
            // localStorage.setItem('token', response.data.token);
          // this.setState({ redirect: true });
          // this.setState({ toUrl:'biodata' });
          
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  onSubmitDeanGrade = (e) => {
    e.preventDefault();
    const {...formData } = this.state;
    console.log(formData);
    console.log(URL);
    console.log(this.state.token)
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};             
    axios.post(`${URL}/deanGradeLecturerResult/${this.state.lecturer_id}`, formData, options)
      .then((response) => {
        if (response.status == 200) {
          this.setState({
            dean_recomendation:'',
            dean_comment:''
          })
            console.log(response.data)
            this.getLecturerGrade();
          
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  getBioData=()=>{   
    console.log("yea")   
    console.log(this.state.lecturer_id);    
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};
    let urlHod = `${URL}/lecturer/byHod/${this.state.lecturer_id}`     
    axios.get(urlHod,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({biodata : response.data });
        }
    })
    .catch((error)=> {
        if(error.response){
          console.log(error.response);              
          // localStorage.clear()
        }
    });
  }

  getLecturerGrade=()=>{   
    console.log("yea")   
    console.log(this.state.lecturer_id);    
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};
    let urlHod = `${URL}/getLecturerGrade/${this.state.lecturer_id}`     
    axios.get(urlHod,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({lecturerGrade : response.data });
        }
    })
    .catch((error)=> {
        if(error.response){
          console.log(error.response);              
          // localStorage.clear()
        }
    });
  }

  getActivity=()=>{   
    console.log("yea")   
    console.log(this.state.lecturer_id);    
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};
    let urlHod = `${URL}/lecturer/activityByHod/${this.state.lecturer_id}`     
    axios.get(urlHod,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({activities : response.data });
        }
    })
    .catch((error)=> {
        if(error.response){
          console.log(error.response);              
          // localStorage.clear()
        }
    });
  }

  getActivity=()=>{   
    console.log("yea")   
    console.log(this.state.lecturer_id);    
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};
    let urlHod = `${URL}/lecturer/activityByHod/${this.state.lecturer_id}`     
    axios.get(urlHod,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({activities : response.data });
        }
    })
    .catch((error)=> {
        if(error.response){
          console.log(error.response);              
          // localStorage.clear()
        }
    });
  }


  getExperiences=()=>{   
    console.log("yea")   
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}}; console.log(options);            
    let urlHod = `${URL}/lecturer/experienceByHod/${this.state.lecturer_id}`     
    axios.get(urlHod,options)    
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({experiences : response.data });
        }
    })
    .catch((error)=> {
        if(error.response){
          console.log(error.response);              
          // localStorage.clear()
        }
    });
  }

  getAcademicQualification=()=>{   
    console.log("yea")   
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}}; console.log(options);            
    let urlHod = `${URL}/lecturer/academicQualificationsByHod/${this.state.lecturer_id}`     
    axios.get(urlHod,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({academic_qualifications : response.data });
        }
    })
    .catch((error)=> {
        if(error.response){
          console.log(error.response);              
          // localStorage.clear()
        }
    });
  }

  getProfessionalQualification=()=>{   
    console.log("yea")   
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}}; console.log(options);            
    let urlHod = `${URL}/lecturer/professionalQualificationsByHod/${this.state.lecturer_id}`     
    axios.get(urlHod,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({professional_qualifications : response.data });
        }
    })
    .catch((error)=> {
        if(error.response){
          console.log(error.response);              
          // localStorage.clear()
        }
    });
  }

  getResearchGrant=()=>{   
    console.log("yea")   
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}}; console.log(options);            
    let urlHod = `${URL}/lecturer/researchGrantByHod/${this.state.lecturer_id}`     
    axios.get(urlHod,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({researchgrants : response.data });
        }
    })
    .catch((error)=> {
        if(error.response){
          console.log(error.response);              
          // localStorage.clear()
        }
    });
  }

  getPublications=()=>{   
    console.log("yea")   
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}}; console.log(options);            
    let urlHod = `${URL}/lecturer/publicationByHod/${this.state.lecturer_id}`     
    axios.get(urlHod,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({publications : response.data });
        }
    })
    .catch((error)=> {
        if(error.response){
          console.log(error.response);              
          // localStorage.clear()
        }
    });
  }

// ---------------tables-------------
  profileBioData(){
    let item ='';
    if(this.state.biodata){
      const {biodata} = this.state
      item=
      <div style={{border: '1px solid #dee2e6', padding: '20px'}}>
        <h2 className="profilename">{biodata.first_name} {biodata.last_name} {biodata.last_name}</h2>
        <p>
            <span className="personnel">Email : </span><span className="badge-success  ">{biodata.email}</span> 
        </p>
        <p>
            <span className="personnel">Date Of Birth : </span><span className="lease pl-10">{biodata.date_of_birth}</span>
        </p>
        <p>
            <span className="personnel">sex : </span><span className="lease pl-10">{biodata.sex}</span>
        </p>
        <p>
            <span className="personnel">Department :</span><span className="lease pl-10">{(biodata.depatment)?biodata.depatment.name:''}</span>
        </p>
        <p>
            <span className="personnel">professional Title :</span><span className="lease pl-10">{(biodata.professional_status)?biodata.professional_status.name:''}</span>
        </p>
        <p>
            <span className="personnel">Marital Status :</span><span className="lease pl-10">{ (biodata.marital_status) ? biodata.marital_status.name : ''}</span>
        </p>
        <p>
            <span className="personnel">Date Of First Appointment :</span><span className="lease pl-10">{biodata.date_of_birth}</span>
        </p>
        <p>
            <span className="personnel">Designation Of First Appointment :</span><span className="lease pl-10">{biodata.date_of_birth}</span>
        </p>
        <p>
            <span className="personnel">Date of Last Promotion :</span><span className="lease pl-10">{biodata.date_of_birth}</span>
        </p>
        <p>
            <span className="personnel">Grade of current Promotion :</span><span className="lease pl-10">{biodata.date_of_birth}</span>
        </p>
        <p>
            <span className="personnel">Has Appointment been confirmed :</span><span className="lease pl-10">{biodata.date_of_birth}</span>
        </p>
        <p>
            <span className="personnel">Date of Date of Confirment :</span><span className="lease pl-10">{biodata.date_of_birth}</span>
        </p>
        <p>
            <span className="personnel">Current Salary</span><span className="lease pl-10">{biodata.date_of_birth}</span>
        </p>

      </div>
    }
    return item
  }

  mapTableExperiences(){
    console.log(this.state.experiences);
    let items = <tr style={{width:'100%'}} className="col-md-12" >Nothing</tr>
    // if(this.state.maritalStatuses){
    if(this.state.experiences != undefined && this.state.experiences.length > 0){
        
      items= this.state.experiences.map(item => {
        console.log(item)
        return (
          // <option key={item.id} value={item.id}> {item.name} </option>  
          <tr key={item.id}>
            <td>{item.institution}</td>
            <td>{(item.designation) ? item.designation.name:''}</td>
            <td>{item.specialization}</td>
            <td>{item.subject_taught}</td>
            <td>{item.start_date}</td>
            <td>{item.end_date}</td> 
            <td>{(item.evevidence_url == null)? 'Not Uploaded': item.evevidence_url}</td>
          </tr>
        )
      });
    }

    let table =
    <div className="row">
      <div className="col-md-12">
        <div className="box">
          <div className="box-header with-border">
            <h3 className="box-title">Educational Info</h3>
          </div>
          {/* <!-- /.box-header --> */}
          <div className="box-body">
            <div className="table-responsive">
              <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Institution</th>
                  <th>Designation</th>
                  <th>Specialization</th>
                  <th>Subject Taught</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Evidence</th>
                </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
              <tfoot>
                <tr>
                  <th>Institution</th>
                  <th>Designation</th>
                  <th>Specialization</th>
                  <th>Subject Taught</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Evidence</th>
                </tr>
              </tfoot>
              </table>
            </div>
          </div>
          {/* <!-- /.box-body --> */}
        </div>

      </div>
    </div>

    return table;
  }

  mapTableActivities(){
    let items = <tr style={{width:'100%'}} className="col-md-12" >Nothing</tr>
    // if(this.state.maritalStatuses){
    if(this.state.activities != undefined && this.state.activities.length > 0){
        
      items= this.state.activities.map(item => {
        return (
          // <option key={item.id} value={item.id}> {item.name} </option>  
          <tr key={item.id}>
            <td>{item.position}</td>
            <td>{(item.type == 2) ? 'Previous' : 'Current'}</td>
            <td>{item.start_date}</td>
            <td>{item.end_date}</td> 
            <td>{item.till_date}</td> 
            <td>{(item.evevidence_url == null)? 'Not Uploaded': item.evevidence_url}</td>
          </tr>
        )
      });
    }

    let table =
    <div className="row">
      <div className="col-md-12">
        <div className="box">
          <div className="box-header with-border">
            <h3 className="box-title">Activites Info</h3>
          </div>
          {/* <!-- /.box-header --> */}
          <div className="box-body">
            <div className="table-responsive">
              <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Till Date</th>
                  <th>Evidence</th>
                </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
              <tfoot>
                <tr>
                  <th>Position</th>
                  <th>Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Till Date</th>
                  <th>Evidence</th>
                </tr>
              </tfoot>
              </table>
            </div>
          </div>
          {/* <!-- /.box-body --> */}
        </div>

      </div>
    </div>

    return table;
  }
  
  mapTableAcademicQualification(){
    let items = <tr style={{width:'100%'}} >Nothing</tr>
    // if(this.state.maritalStatuses){
    if(this.state.academic_qualifications != undefined && this.state.academic_qualifications.length > 0){
        
      items= this.state.academic_qualifications.map(item => {
        return (
          // <option key={item.id} value={item.id}> {item.name} </option>  
          <tr key={item.id}>
            <td>{ (item.academic_degree) ? item.academic_degree.name : ''}</td>
            <td>{ (item.academic_class) ? item.academic_class.name : ''}</td>
            <td>{item.institution}</td>
            <td>{item.award_date}</td>
            <td>{(item.evevidence_url == null)? 'Not Uploaded': item.evevidence_url}</td>
          </tr>
        )
      });
    }

    let table =
    <div className="row">
      <div className="col-md-12">
        <div className="box">
          <div className="box-header with-border">
            <h3 className="box-title">Educational Info</h3>
          </div>
          {/* <!-- /.box-header --> */}
          <div className="box-body">
            <div className="table-responsive">
              <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Class</th>
                  <th>Institution</th>
                  <th>Award Date</th>
                  <th>Evidence</th>
                </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
              <tfoot>
                <tr>
                  <th>Level</th>
                  <th>Class</th>
                  <th>Institution</th>
                  <th>Award Date</th>
                  <th>Evidence</th>
                </tr>
              </tfoot>
              </table>
            </div>
          </div>
          {/* <!-- /.box-body --> */}
        </div>

      </div>
    </div>

    return table;
  }

  mapTableProfessionalQualification(){
    let items = <tr style={{width:'100%'}} >Nothing</tr>
    // if(this.state.maritalStatuses){
    if(this.state.professional_qualifications != undefined && this.state.professional_qualifications.length > 0){
        
      items= this.state.professional_qualifications.map(item => {
        return (
          // <option key={item.id} value={item.id}> {item.name} </option>  
          <tr key={item.id}>
            <td>{item.profession}</td>
            <td>{item.qualification}</td>
            <td>{item.institution}</td>
            <td>{item.country}</td>
            <td>{item.awarding_body}</td>
            <td>{item.date_of_award}</td>
            <td>{(item.evevidence_url == null)? 'Not Uploaded': item.evevidence_url}</td>
          </tr>
        )
      });
    }

    let table =
    <div className="row">
      <div className="col-md-12">
        <div className="box">
          <div className="box-header with-border">
            <h3 className="box-title">Educational Info</h3>
          </div>
          {/* <!-- /.box-header --> */}
          <div className="box-body">
            <div className="table-responsive">
              <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Profession</th>
                  <th>Qualification</th>
                  <th>Institution</th>
                  <th>Country</th>
                  <th>Award Body</th>
                  <th>Award Date</th>
                  <th>Evidence</th>
                </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
              <tfoot>
                <tr>
                  <th>Profession</th>
                  <th>Qualification</th>
                  <th>Institution</th>
                  <th>Country</th>
                  <th>Award Body</th>
                  <th>Award Date</th>
                  <th>Evidence</th>
                </tr>
              </tfoot>
              </table>
            </div>
          </div>
          {/* <!-- /.box-body --> */}
        </div>

      </div>
    </div>

    return table;
  }

  mapTableResearchGrant(){
    let items = <tr style={{width:'100%'}} className="col-md-12" >Nothing</tr>
    // if(this.state.maritalStatuses){
    if(this.state.researchgrants != undefined && this.state.researchgrants.length > 0){
        
      items= this.state.researchgrants.map(item => {
        let temp=''
        if(item.type==1){
          temp='Collaboration within faculty'
        }
        else if(item.type==2){
          temp='collaboration within university'
          
        }
        else {
          temp='collaboration outside university'          
        }
        return (
          // <option key={item.id} value={item.id}> {item.name} </option>  
          <tr key={item.id}>
            <td>{item.awarding_body}</td>
            <td>{temp}</td>
            <td>{item.start_date}</td>
            <td>{item.end_date}</td> 
            <td>{(item.evevidence_url == null)? 'Not Uploaded': item.evevidence_url}</td>
          </tr>
        )
      });
    }

    let table =
    <div className="row">
      <div className="col-md-12">
        <div className="box">
          <div className="box-header with-border">
            <h3 className="box-title">Educational Info</h3>
          </div>
          {/* <!-- /.box-header --> */}
          <div className="box-body">
            <div className="table-responsive">
              <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Awarding Body</th>
                  <th>Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Evidence</th>
                </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
              <tfoot>
                <tr>
                  <th>Awarding Body</th>
                  <th>Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Evidence</th>
                </tr>
              </tfoot>
              </table>
            </div>
          </div>
          {/* <!-- /.box-body --> */}
        </div>

      </div>
    </div>

    return table;
  }

  mapTablePublications(){
    let items = <tr style={{width:'100%'}} className="col-md-12" >Nothing</tr>
    // if(this.state.maritalStatuses){
    if(this.state.publications != undefined && this.state.publications.length > 0){
        
      items= this.state.publications.map(item => {
        return (
          // <option key={item.id} value={item.id}> {item.name} </option>  
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.type}</td>
            <td>{item.details}</td>
            <td>{(item.evevidence_url == null)? 'Not Uploaded': item.evevidence_url}</td>
          </tr>
        )
      });
    }

    let table =
    <div className="row">
      <div className="col-md-12">
        <div className="box">
          <div className="box-header with-border">
            <h3 className="box-title">Publications Info</h3>
          </div>
          {/* <!-- /.box-header --> */}
          <div className="box-body">
            <div className="table-responsive">
              <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Title </th>
                  <th>Type</th>
                  <th>Detail</th>
                  <th>Evidence</th>
                </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
              <tfoot>
                <tr>
                  <th>Title </th>
                  <th>Type</th>
                  <th>Detail</th>
                  <th>Evidence</th>
                </tr>
              </tfoot>
              </table>
            </div>
          </div>
          {/* <!-- /.box-body --> */}
        </div>

      </div>
    </div>

    return table;
  }

  actionFormGradeUser(){
    let item =
    <form onSubmit={this.onSubmitGrade} className="form">

      {/* <div className="row"> */}

        <div className="col-md-5">
          <div className="form-group">
            <label>Resarch Collaboration grade</label>
            <input type="number" value={this.state.research_score}
            onChange={event =>this.setState({research_score: event.target.value,})}
              className="form-control" placeholder="between 1 - 5"/>
          </div>
        </div>
        

        <div className="col-md-5">
          <div className="form-group">
            <label>Teaching Grade</label>
            <input type="number" value={this.state.teaching_score}
            onChange={event =>this.setState({teaching_score: event.target.value,})}
              className="form-control" placeholder="between 1 - 5"/>
          </div>
        </div>

        <div className="col-md-5">
          <div className="form-group">
            <label>Publication Grade</label>
            <input type="number" value={this.state.publication_score}
            onChange={event =>this.setState({publication_score: event.target.value,})}
              className="form-control" placeholder="between 1 - 5"/>
          </div>
        </div>

      {/* </div> */}

      {/* <div className="row"> */}

        <div className="col-md-5">
          <div className="form-group">
            <label>Post Graduate Grade</label>
            <input type="number" value={this.state.post_graduate_score}
            onChange={event =>this.setState({post_graduate_score: event.target.value,})}
            className="form-control" placeholder="between 1 - 5"/>
          </div>
        </div>

        <div className="col-md-5">
          <div className="form-group">
            <label>Departmental Resposibilities Grade</label>
            <input type="number" value={this.state.other_departmental_resposibilities_score}
            onChange={event =>this.setState({other_departmental_resposibilities_score: event.target.value,})}
            className="form-control" placeholder="between 1 - 5"/>
          </div>
        </div>

        <div className="col-md-5">
          <div className="form-group">
            <label>University / Country Contributions Grade</label>
            <input type="number" value={this.state.contribution_to_university_score}
            onChange={event =>this.setState({contribution_to_university_score: event.target.value,})}
            className="form-control" placeholder="between 1 - 5"/>
          </div>
        </div>

        
      {/* </div> */}

      <div className="row">
        <div className="col-md-12 ">
          <input type="submit" value="Grade Lecturer" className="btn btn-success col-md-10 offset-md-1 " />
        </div>
      </div>

    </form>

    if(this.state.lecturerGrade.hod_id != null){
      const {lecturerGrade} = this.state
      item=
      <div style={{border: '1px solid #dee2e6', padding: '20px'}}>
        {/* <h2 className="profilename">{biodata.first_name} {biodata.last_name} {biodata.last_name}</h2> */}
        <p>
            <span className="personnel">Teaching Score : </span><span className="badge-success  ">{(lecturerGrade) ? lecturerGrade.teaching_score:''}</span> 
        </p>
        <p>
            <span className="personnel">Research Score : </span><span className="lease pl-10">{(lecturerGrade) ?lecturerGrade.research_score:''}</span>
        </p>
        <p>
            <span className="personnel">Publication Score : </span><span className="lease pl-10">{(lecturerGrade) ?lecturerGrade.publication_score:''}</span>
        </p>
        <p>
            <span className="personnel">Post Graduate Score :</span><span className="lease pl-10">{(lecturerGrade)?lecturerGrade.post_graduate_score:''}</span>
        </p>
        <p>
            <span className="personnel">Other Departmental Responsibilities :</span><span className="lease pl-10">{(lecturerGrade)?lecturerGrade.other_departmental_resposibilities_score.name:''}</span>
        </p>
        <p>
            <span className="personnel">Contribution to University :</span><span className="lease pl-10">{ (lecturerGrade) ? lecturerGrade.contribution_to_university_score : ''}</span>
        </p>
       
        

      </div>
    }

    return item;
  }
  

  actionFormDeanGradeUser(){

    let item =
    <form onSubmit={this.onSubmitDeanGrade} className="form">

      {/* <div className="row"> */}

        <div className="col-md-5">
          <div className="form-group">
            <label>Recommendation Action</label>
            <select value={this.state.dean_recomendation}
            onChange={event =>this.setState({dean_recomendation: event.target.value,})}
            className="form-control">
            <option value="null">Nothing</option>
            <option value="Annual Increment"> Annual Increment </option>
            <option value="Not Recommended For Annual Increment"> Not Recommended For Annual Increment </option>
            <option value="Recommendation for confirmation"> Recommendation for confirmation </option>
            <option value="Recommended for promotion"> Recommended for promotion </option>
            <option value="Not Recommended for promotion"> Not Recommended for promotion </option>
            </select>
          </div>
        </div>
        

        <div className="col-md-5">
          <div className="form-group">
            <label>Dean Comment</label>
            <input type="text" value={this.state.dean_comment}
            onChange={event =>this.setState({dean_comment: event.target.value,})}
              className="form-control" placeholder="Any Comment"/>
          </div>
        </div>

        

      {/* </div> */}

      {/* <div className="row"> */}

        
        
      {/* </div> */}

      <div className="row">
        <div className="col-md-12 ">
          <input type="submit" value="Grade Lecturer" className="btn btn-success col-md-10 offset-md-1 " />
        </div>
      </div>

    </form>

    if(this.state.lecturerGrade.dean_id != null){
      const {lecturerGrade} = this.state
      item=
      <div style={{border: '1px solid #dee2e6', padding: '20px'}}>
        {/* <h2 className="profilename">{biodata.first_name} {biodata.last_name} {biodata.last_name}</h2> */}
        <p>
            <span className="personnel">Dean Recommendation : </span><span className="badge-success  ">{(lecturerGrade) ? lecturerGrade.dean_recomendation:''}</span> 
        </p>
        <p>
            <span className="personnel">Dean Comment Score : </span><span className="badge-success">{(lecturerGrade) ?lecturerGrade.dean_comment:''}</span>
        </p>
        

      </div>
    }


    return item;
  }


  render() {
    const { redirect, toUrl } = this.state;
    if (redirect && toUrl) {
      return <Redirect to={toUrl} />
    }

    return (
      <div className="hold-transition skin-blue sidebar-mini">
        <div className="wrapper">
        <Header user={this.state.user} />
        <Sidebar user={this.state.user} onNavigate={(e)=> {this.setMyRoute(e)}} />
          <div className="content-wrapper">
              <div className="content-header">
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                  <h3 className="page-title">Experience</h3>
                  <div className="d-inline-block align-items-center">
                    <nav>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
                        <li className="breadcrumb-item active" aria-current="page">Control</li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div className="right-title w-170">
                  <span className="subheader_daterange font-weight-600" id="dashboard_daterangepicker">
                    <span className="subheader_daterange-label">
                      <span className="subheader_daterange-title"></span>
                      <span className="subheader_daterange-date text-primary"></span>
                    </span>
                    <a href="#" className="btn btn-sm btn-primary">
                     love God <i className="fa fa-angle-down"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <section className="content">
            {/* Your contents goes in here */}
            <div className="col-lg-12 col-12">
              <div className="box">
                
                <div className="box-header with-border">
                  {/* <h4 className="box-title"> form </h4>			 */}
                  <ul className="box-controls pull-right">
                    {/* <li><a className="box-btn-close" href="#"></a></li> */}
                    {/* <li><a className="box-btn-slide" href="#">Minimize</a></li>	 */}
                    {/* <li><a className="box-btn-fullscreen" href="#"></a></li> */}
                  </ul>
                </div>

                {/* <form className="form"> */}
                <div className="box-body">
                  <h4 className="box-title text-info"><i className="ti-user mr-15"></i> Educational Info {this.state.lecturer_id}</h4>
                  <hr className="my-15" />
                  
                  {/* <div className="box-body"> */}
    	              {/* <!-- Nav tabs --> */}
                  <ul className="nav nav-tabs nav-fill" role="tablist">

                    <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="#home11" role="tab"><span className="hidden-sm-up"><i className="ion-home"></i></span> <span className="hidden-xs-down">Bio Data</span></a> </li>

                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#profile11" role="tab"><span className="hidden-sm-up"><i className="ion-person"></i></span> <span className="hidden-xs-down">Academic Qualification</span></a> </li>

                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#messages11" role="tab"><span className="hidden-sm-up"><i className="ion-email"></i></span> <span className="hidden-xs-down">Professional Qualification</span></a> </li>

                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#setting11" role="tab"><span className="hidden-sm-up"><i className="ion-settings"></i></span> <span className="hidden-xs-down">Research Grant</span></a> </li>

                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#about11" role="tab"><span className="hidden-sm-up"><i className="ion-person"></i></span> <span className="hidden-xs-down">Publications</span></a> </li>
                    
                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#activities" role="tab"><span className="hidden-sm-up"><i className="ion-camera"></i></span> <span className="hidden-xs-down">Activities</span></a> </li>

                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#experiences" role="tab"><span className="hidden-sm-up"><i className="ion-camera"></i></span> <span className="hidden-xs-down">Experiences</span></a> </li>

                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#gradeLecturer" role="tab"><span className="hidden-sm-up"><i className="ion-camera"></i></span> <span className="hidden-xs-down">Grade Lecturer</span></a> </li>

                    {
                      (this.state.user.dean == 1 )
                      ?
                      <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#deangradeLecturer" role="tab"><span className="hidden-sm-up"><i className="ion-camera"></i></span> <span className="hidden-xs-down">Dean Grade Lecturer</span></a> </li>
                      :
                      ''
                    }
                    

                  </ul>
                  {/* <!-- Tab panes --> */}
                  <div className="tab-content tabcontent-border">
                    <div className="tab-pane active" id="home11" role="tabpanel">
                      <div className="pad">
                        {/* biodata here */}
                        {this.profileBioData()}
                        {/* {this.state.biodata.depatment.name}  {this.mapTableExperiences()} */}
                        {/* {this.state.biodata.email} */}
                      </div>
                    </div>

                    <div className="tab-pane pad" id="profile11" role="tabpanel"> 
                      {this.mapTableAcademicQualification()} 
                    </div>

                    <div className="tab-pane pad" id="messages11" role="tabpanel">
                      {this.mapTableProfessionalQualification()}
                    </div>

                    <div className="tab-pane pad" id="setting11" role="tabpanel">
                      {this.mapTableResearchGrant()}
                    </div>

                    <div className="tab-pane pad" id="about11" role="tabpanel">
                      {this.mapTablePublications()}
                    </div>

                    <div className="tab-pane pad" id="activities" role="tabpanel">
                      {this.mapTableActivities()}
                    </div>

                    <div className="tab-pane pad" id="experiences" role="tabpanel">
                      {this.mapTableExperiences()} 
                    </div>

                    <div className="tab-pane pad" id="gradeLecturer" role="tabpanel">
                      {this.actionFormGradeUser()} 
                    </div>

                    <div className="tab-pane pad" id="deangradeLecturer" role="tabpanel">
                      {
                        (this.state.user.dean == 1 )
                        ?
                        this.actionFormDeanGradeUser()
                        :
                        ''
                      } 
                    </div>


                  </div>
                  {/* </div> */}


                  <hr className="my-15" />

                </div>

                <div className="box-footer">
                  <button type="button" className="btn btn-warning btn-outline mr-1">
                    <i className="ti-trash"></i> Cancel
                  </button>
                  <button type="submit" className="btn btn-primary btn-outline">
                    <i className="ti-save-alt"></i> Save
                  </button>
                </div>  
                {/* </form> */}
              </div>
             
          </div> 

              {/* Your content end here */}
            </section>
          </div>
          <Footer/>
          <RightSidebar />
        </div>

      </div>
    );
  }
}

export default HodLecturer;

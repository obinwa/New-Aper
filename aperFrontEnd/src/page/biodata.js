import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import RightSidebar from '../components/right-sidebar';
// import './App.css';
import { Link, Redirect} from "react-router-dom";

class Biodata extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      user:{},
      redirect: false,
      toUrl:'',
      token:'',
      professionalStatuses:[],
      maritalStatuses:[],
      faculties:[],
      designations:[],

      //for salary
      // stepForCurrentSalary:[],

      // lecturer profile

      first_name:'',
      last_name:'',
      middle_name:'',
      email: '',
      sex: '' ,
      professional_status_id: '',
        // 'password',
      // admin : '',
      // remember_token:'',
      date_of_birth : '',
      marital_status_id : '',
      file_number:'',
      retirement_date : '',
      faculty_id:'',
      department_id : '',
      // 'hod',
      // 'dean',
      first_appointment_date : '',
      first_appt_designation_id:'',
      step_first_appt_designation_id:'',
      last_promotion_date:'',
      last_promotion_designation_id:'',
      step_last_promotion_designation_id:'',
      current_appt_designation_id:'',
      step_current_appt_designation_id:'',
      appt_confirmation:'',
      confirmation_date:'',
      salary:''

    }
    // this.check();
    this.stepCurrentApptDesignationOptions = this.stepCurrentApptDesignationOptions.bind(this);
    
  }

  stepForCurrentSalary=[];

  componentDidMount(){
      this.getUser();
      this.getMaritalStatus();
      this.getFaculties();
      this.getDesignations();
      this.getProfessionalStatus();
  }

  setMyRoute(x){
    this.setState({redirect:true,toUrl:x});
  }

  onSubmitProfile = (e) => {
    e.preventDefault();
    const {...formData } = this.state;
    console.log(formData);
    // console.log(URL);
    // console.log(this.state.token)
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};let url = `${URL}/lecturer/profileUpdate`
                 
    axios.post(url, formData, options)
      .then((response) => {
        if (response.status == 200) {
          console.log("from submission")          
            console.log(response.data)
            // this.getAcademicQualification();

            this.setState({
              user:response.data,
              first_name:response.data.first_name,
              last_name:response.data.last_name,
              middle_name:response.data.middle_name,
              email: response.data.email,
              sex: response.data.sex ,
              professional_status_id:response.data.professional_status_id,
                // 'password',
              // admin : '',
              // remember_token:'',
              date_of_birth : response.data.date_of_birth,
              marital_status_id : response.data.marital_status_id,
              file_number:response.data.file_number,
              retirement_date : response.data.retirement_date,
              faculty_id:response.data.faculty_id,
              department_id : response.data.department_id,
              // 'hod',
              // 'dean',
              first_appointment_date : response.data.first_appointment_date,
              first_appt_designation_id: response.data.first_appt_designation_id,
              step_first_appt_designation_id :response.data.step_first_appt_designation_id,
              last_promotion_date: response.data.last_promotion_date,
              last_promotion_designation_id: response.data.last_promotion_designation_id,
              step_last_promotion_designation_id: response.data.step_last_promotion_designation_id,
              current_appt_designation_id: response.data.current_appt_designation_id,
              step_current_appt_designation_id :response.data.step_current_appt_designation_id,
              appt_confirmation :response.data.appt_confirmation,
              confirmation_date:response.data.confirmation_date,
              salary:response.data.salary
        
            })
          
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
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
                // this.setState({user : response.data.user });
                this.setState({
                  user : response.data.user,
                  first_name:response.data.user.first_name,
                  last_name:response.data.user.last_name,
                  middle_name:response.data.user.middle_name,
                  email: response.data.user.email,
                  sex: response.data.user.sex ,
                  professional_status_id:response.data.user.professional_status_id,
                    // 'password',
                  // admin : '',
                  // remember_token:'',
                  date_of_birth : response.data.user.date_of_birth,
                  marital_status_id : response.data.user.marital_status_id,
                  file_number:response.data.user.file_number,
                  retirement_date : response.data.user.retirement_date,
                  faculty_id:response.data.user.faculty_id,
                  department_id :response.data.user.department_id,
                  // 'hod',
                  // 'dean',
                  first_appointment_date : response.data.user.first_appointment_date,
                  first_appt_designation_id: response.data.user.first_appt_designation_id,
                  step_first_appt_designation_id : response.data.user.step_first_appt_designation_id,
                  last_promotion_date: response.data.user.last_promotion_date,
                  last_promotion_designation_id: response.data.user.last_promotion_designation_id,
                  step_last_promotion_designation_id: response.data.user.step_last_promotion_designation_id,
                  current_appt_designation_id: response.data.user.current_appt_designation_id,
                  step_current_appt_designation_id : response.data.user.step_current_appt_designation_id,
                  appt_confirmation : response.data.user.appt_confirmation,
                  confirmation_date: response.data.user.confirmation_date,
                  salary: response.data.user.salary
            
                })
                // this.setState({ toUrl:'biodata'})
            }
          // console.log(response);
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

  getProfessionalStatus(){      
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};             
    axios.get(`${URL}/admin/getAllProfessionalStatus`,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({professionalStatuses : response.data });
        }
    })
    .catch((error)=> {
        if(error.response){
          console.log(error.response);              
          // localStorage.clear()
        }
    });
    
  }

  getMaritalStatus(){      
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};             
    axios.get(`${URL}/admin/getAllMaritalStatus`,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({maritalStatuses : response.data });
        }
    })
    .catch((error)=> {
        if(error.response){
          console.log(error.response);              
          // localStorage.clear()
        }
    });
    
  }

  getFaculties(){      
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};             
    axios.get(`${URL}/admin/getAllFaculty`,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({faculties : response.data });
        }
    })
    .catch((error)=> {
        if(error.response){
          console.log(error.response);              
          // localStorage.clear()
        }
    });
    
  }

  getDesignations(){      
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};             
    axios.get(`${URL}/admin/getAllDesignation`,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data) 
          console.log("okk") 
          
            this.setState({designations : response.data });
        }
    })
    .catch((error)=> {
        if(error.response){
          console.log(error.response);              
          // localStorage.clear()
        }
    });
    
  }

  

  mapProfessionalOptions = ()=>{
    let marital_stat =<option value="null"> Nothing </option> ;
    // if(this.state.maritalStatuses){
    if(this.state.professionalStatuses != undefined && this.state.professionalStatuses.length > 0){
        
      marital_stat= this.state.professionalStatuses.map(ms => {
        return (
          <option key={ms.id} value={ms.id}> {ms.name} </option>  
        )
      });
    }

    return marital_stat;
    
  }
  mapMarriageOptions = ()=>{
    let marital_stat =<option value="null"> Nothing </option> ;
    // if(this.state.maritalStatuses){
    if(this.state.maritalStatuses != undefined && this.state.maritalStatuses.length > 0){
        
      marital_stat= this.state.maritalStatuses.map(ms => {
        return (
          <option key={ms.id} value={ms.id}> {ms.name} </option>  
        )
      });
    }

    return marital_stat;
    
  }

  mapFacultiesOptions = ()=>{
    let marital_stat =<option value="null"> Nothing </option> ;
    if(this.state.faculties != undefined && this.state.faculties.length > 0){
      marital_stat= this.state.faculties.map((ms,index) => {
        return (
          <option key={index} value={ms.id}> {ms.name} </option>  
        )
      });
    }
    return marital_stat;   
  }

  mapDesignationsOptions = ()=>{
    let marital_stat =<option value="null"> Nothing </option> ;
    if(this.state.designations != undefined && this.state.designations.length > 0){ 
      marital_stat= this.state.designations.map((ms, index) => {
        return (
          <option key={index} value={ms.id}> {ms.name} </option>  
        )
      });
    }
    return marital_stat;   
  }

  mapstepFirstApptDesignationOptions = ()=>{
    let marital_stat =<option value="null"> Nothing </option> ;

    if(this.state.first_appt_designation_id != undefined && this.state.first_appt_designation_id.length > 0){    
      let designation = this.state.designations.find(designaton => designaton.id == this.state.first_appt_designation_id) 
      marital_stat= designation.steps.map((ms,index) => {
        return (
          <option key={index} value={ms.id}> {ms.name} </option>  
        )
      });
    }
    return marital_stat;   
  }

  stepLastPromotionDesignationOptions = ()=>{
    let marital_stat =<option value="null"> Nothing </option> ;

    if(this.state.last_promotion_designation_id != undefined && this.state.last_promotion_designation_id.length > 0){    
      console.log(this.state.last_promotion_designation_id)
      let designation = this.state.designations.find(designaton => designaton.id == this.state.last_promotion_designation_id) 
      console.log(designation)
      marital_stat= designation.steps.map((ms,index) => {
        return (
          <option key={index} value={ms.id}> {ms.name} </option>  
        )
      });
    }
    return marital_stat;   
  }

  stepCurrentApptDesignationOptions = ()=>{
    let marital_stat =<option value="null"> Nothing </option> ;

    if(this.state.current_appt_designation_id != undefined && this.state.current_appt_designation_id.length > 0){    
      let designation = this.state.designations.find(designaton => designaton.id == this.state.current_appt_designation_id)
      console.log("chaaoow") 
      console.log(designation.steps);
      this.stepForCurrentSalary = designation.steps
      // console.log(this.stepForCurrentSalary);
      // this.setState({stepForCurrentSalary:designation.steps})
      marital_stat= designation.steps.map( (ms,index) => {
        return (
          <option key={index} value={ms.id}> {ms.name} </option>  
        )
      });
    }
    return marital_stat;   
  }

  mapDepartmentsOptions = ()=>{
    let marital_stat =<option value="null"> Nothing </option> ;

    if(this.state.faculty_id != undefined && this.state.faculty_id != ''){    
      let faculties = this.state.faculties.find(faculty => faculty.id == this.state.faculty_id) 
      marital_stat= faculties.depatments.map( (ms,index) => {
        return (
          <option key={index} value={ms.id}> {ms.name} </option>  
        )
      });
    }
    return marital_stat;   
  }

  getSalaryForTheGivenStep=(x)=>{
    
    // if(this.state.step_current_appt_designation_id){
      console.log("got in here");
      // this.setState({step_current_appt_designation_id: x})
        let item = this.stepForCurrentSalary.find(i => i.id = x)
        this.setState({step_current_appt_designation_id: x, salary:item.pivot.salary});
    // }
  }

  render() {
    const { redirect, toUrl } = this.state;
    if (redirect && toUrl) {
      return <Redirect to={toUrl} />
    }
    return (
      <div className="hold-transition skin-blue sidebar-mini">
        <div className="wrapper">
          <Header user={this.state.user}/>
          <Sidebar user={this.state.user} onNavigate={(e)=> {this.setMyRoute(e)}} />
          <div className="content-wrapper">
              <div className="content-header">
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                  <h3 className="page-title">Biodata  </h3>
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
                  <h4 className="box-title">Biodata form</h4>			
                  <ul className="box-controls pull-right">
                    {/* <li><a className="box-btn-close" href="#"></a></li> */}
                    <li><a className="box-btn-slide" href="#"></a></li>	
                    {/* <li><a className="box-btn-fullscreen" href="#"></a></li> */}
                  </ul>
                </div>

                <form className="form"  onSubmit={this.onSubmitProfile}>
                  <div className="box-body">
                    <h4 className="box-title text-info"><i className="ti-user mr-15"></i> Personal Info</h4>
                    <hr className="my-15" />
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Title</label>
                          <select className="form-control"value={this.state.professional_status_id}
                          onChange={event =>this.setState({professional_status_id: event.target.value,})}>
                          <option>Nothing</option>
                          {this.mapProfessionalOptions()}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Date Of First Appointment</label>
                          <input type="date" className="form-control"
                          value={this.state.first_appointment_date}
                          onChange={event =>this.setState({first_appointment_date: event.target.value,})}
                           placeholder="Date"/>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                     <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" className="form-control" 
                          value={this.state.last_name}
                          onChange={event =>this.setState({last_name: event.target.value})}
                          placeholder="Last Name"/>
                        </div>
                      </div> 
{/* first design */}
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-8">
                            <div className="form-group">
                              <label>Designation of First Appointment</label>
                              <select className="form-control" id="first_appt_designation_id"
                                value={this.state.first_appt_designation_id}
                                onChange={event =>this.setState({first_appt_designation_id: event.target.value,})}>
                                <option>Nothing</option>
                                {this.mapDesignationsOptions()}
                              </select>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="form-group">
                              <label>step </label>
                              <select className="form-control" id="step_first_appt_designation_id"
                                value={this.state.step_first_appt_designation_id}
                                onChange={event =>this.setState({step_first_appt_designation_id: event.target.value,})}>
                                <option>Nothing</option>
                                {this.mapstepFirstApptDesignationOptions()}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
{/* first design */}
                    
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input type="text" className="form-control" 
                          value={this.state.first_name}
                          onChange={event =>this.setState({first_name: event.target.value,})}
                          placeholder="First Name" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Date of Last Promotion</label>
                          <input type="date"
                          value={this.state.last_promotion_date}
                          onChange={event =>this.setState({last_promotion_date: event.target.value,})}
                           className="form-control" placeholder="Date" />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Middle Name</label>
                          <input type="text" 
                          value={this.state.middle_name}
                          onChange={(event) =>{this.setState({middle_name: event.target.value,})}}
                          className="form-control" placeholder="Middle Name" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Sex</label>
                          <select className="form-control" 
                          value={this.state.sex}
                          onChange={event =>this.setState({sex: event.target.value,})}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>File Number</label>
                          <input type="number" 
                          value={this.state.file_number}
                          onChange={(event) =>{this.setState({file_number: event.target.value,})}}
                          className="form-control" placeholder="FIle Number" />
                        </div>
                      </div>

{/* last promotion */}
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-8">
                            <div className="form-group">
                              <label>Grade of Last Position</label>
                              <select className="form-control" 
                              value={this.state.last_promotion_designation_id}
                              onChange={event =>this.setState({last_promotion_designation_id: event.target.value,})}>
                              <option>Nothing</option>
                                {this.mapDesignationsOptions()}
                              </select>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="form-group">
                              <label>step </label>
                              <select className="form-control" id="step_last_promotion_designation_id"
                              value={this.state.step_last_promotion_designation_id}
                              onChange={event =>this.setState({step_last_promotion_designation_id: event.target.value,})}>
                              <option>Nothing</option>
                                {this.stepLastPromotionDesignationOptions()}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
{/* last promotion */}
                    </div>

                   

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Date of Birth</label>
                          <input type="date" 
                          value={this.state.date_of_birth}
                          onChange={event =>this.setState({date_of_birth: event.target.value,})}
                          className="form-control" placeholder="" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-8">
                            <div className="form-group">
                              <label>Grade of Current Appointment</label>
                              <select className="form-control"value={this.state.current_appt_designation_id}
                              onChange={event =>this.setState({current_appt_designation_id: event.target.value,})}>
                              <option>Nothing</option>
                                {this.mapDesignationsOptions()}
                              </select>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="form-group">
                              <label>step </label>
                              <select className="form-control"value={this.state.step_current_appt_designation_id}
                              onChange={(event) =>this.getSalaryForTheGivenStep(event.target.value)}>
                                <option>Nothing</option>
                                {this.stepCurrentApptDesignationOptions()}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Marital Status</label>
                          <select className="form-control"
                          value={this.state.marital_status_id}
                          onChange={event =>this.setState({marital_status_id: event.target.value,})}>
                          <option>Nothing</option>
                            {this.mapMarriageOptions()}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Has appointment been confirmed</label>
                          <select className="form-control" 
                          value={this.state.appt_confirmation}
                          onChange={event =>this.setState({appt_confirmation: event.target.value,})}>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Date Of Cumpulsory Retirement</label>
                          <input type="date" 
                          value={this.state.retirement_date}
                          onChange={event =>this.setState({retirement_date: event.target.value,})}
                          className="form-control" placeholder="Date" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Date Of Confirment</label>
                          <input type="date"
                          value={this.state.confirmation_date}
                          onChange={event =>this.setState({confirmation_date: event.target.value,})}
                          className="form-control" placeholder="Date" />   
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                      
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Faculty</label>
                              <select className="form-control"value={this.state.faculty_id}
                              onChange={event =>this.setState({faculty_id: event.target.value,})}>
                              <option>Nothing</option>
                                {this.mapFacultiesOptions()}
                              </select>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Department </label>
                              <select className="form-control"value={this.state.department_id}
                              onChange={event =>this.setState({department_id: event.target.value,})}>
                                {this.mapDepartmentsOptions()}
                              </select>
                            </div>
                          </div>

                        </div>

                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Current Salary</label>
                          <input type="text" 
                          value={this.state.salary}
                          className="form-control" placeholder="Salary" disabled/>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="box-footer">
                  <input type="submit" className="btn btn-primary btn-outline pull-right " value="Update" />

                    {/* <button type="submit" className="btn btn-primary btn-outline">
                      <i className="ti-save-alt"></i> Save
                    </button> */}
                  </div>  
                </form>
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

export default Biodata;

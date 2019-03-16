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
    maritalStatuses:[],
    departments:[],
    designations:[]
    }
    // this.check();
  }


  componentDidMount(){
      this.getUser();
      this.getMaritalStatus();
      this.getDepartments();
      this.getDesignations();
  }

  setMyRoute(x){
    this.setState({redirect:true,toUrl:x});
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

  getDepartments(){      
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};             
    axios.get(`${URL}/admin/getAllDepartment`,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({departments : response.data });
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
    axios.get(`${URL}/admin/getAllDesignationSteps`,options)
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

  mapDepartmentsOptions = ()=>{
    let marital_stat =<option value="null"> Nothing </option> ;
    if(this.state.departments != undefined && this.state.departments.length > 0){
      marital_stat= this.state.departments.map(ms => {
        return (
          <option key={ms.id} value={ms.id}> {ms.name} </option>  
        )
      });
    }
    return marital_stat;   
  }

  mapDesignationsOptions = ()=>{
    let marital_stat =<option value="null"> Nothing </option> ;
    if(this.state.designations != undefined && this.state.designations.length > 0){      
      marital_stat= this.state.designations.map(ms => {
        return (
          <option key={ms.id} value={ms.id}> {ms.designation.name} - {ms.step.name} </option>  
        )
      });
    }
    return marital_stat;   
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
          <Sidebar onNavigate={(e)=> {this.setMyRoute(e)}} />
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
                  <h4 className="box-title">Sample form 1</h4>			
                  <ul className="box-controls pull-right">
                    {/* <li><a className="box-btn-close" href="#"></a></li> */}
                    <li><a className="box-btn-slide" href="#"></a></li>	
                    {/* <li><a className="box-btn-fullscreen" href="#"></a></li> */}
                  </ul>
                </div>

                <form className="form">
                  <div className="box-body">
                    <h4 className="box-title text-info"><i className="ti-user mr-15"></i> Personal Info</h4>
                    <hr className="my-15" />
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Title</label>
                          <select className="form-control">
                          <option>Interested in</option>
                          <option>design</option>
                          <option>development</option>
                          <option>illustration</option>
                          <option>branding</option>
                          <option>video</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Date Of Last Appointment</label>
                          <input type="date" className="form-control" placeholder="Last Name"/>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                     <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" className="form-control" placeholder="Last Name"/>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Designation of First Appointment</label>
                          <select className="form-control">
                            {this.mapDesignationsOptions()}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Date of Last Promotion</label>
                          <input type="date" className="form-control" placeholder="" />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>File Number</label>
                          <input type="text" className="form-control" placeholder="FIle Number" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Grade of Last Position</label>
                          <select className="form-control">
                            {this.mapDesignationsOptions()}
                          </select>
                        </div>
                      </div>
                    </div>

                   

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Date of Birth</label>
                          <input type="date" className="form-control" placeholder="" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Grade of Current Appointment</label>
                          <select className="form-control">
                            {this.mapDesignationsOptions()}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Marital Status</label>
                          <select className="form-control">
                            {this.mapMarriageOptions()}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Has appointment been confirmed</label>
                          <select className="form-control">
                          <option>Interested in</option>
                          <option>design</option>
                          <option>development</option>
                          <option>illustration</option>
                          <option>branding</option>
                          <option>video</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Date Of Cumpulsory Retirement</label>
                          <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Date Of Confirment</label>
                          <select className="form-control">
                          <option>Interested in</option>
                          <option>design</option>
                          <option>development</option>
                          <option>illustration</option>
                          <option>branding</option>
                          <option>video</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Department</label>
                          <select className="form-control">
                            {this.mapDepartmentsOptions()}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Current Salary</label>
                          <input type="text" className="form-control" placeholder="Last Name" disabled/>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="box-footer">
                    <button type="button" className="btn btn-warning btn-outline mr-1">
                      <i className="ti-trash"></i> Cancel
                    </button>
                    <button type="submit" className="btn btn-primary btn-outline">
                      <i className="ti-save-alt"></i> Save
                    </button>
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

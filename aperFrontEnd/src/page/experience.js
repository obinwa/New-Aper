import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import RightSidebar from '../components/right-sidebar';
// import './App.css';
import { Link, Redirect} from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment'

import Moment from 'react-moment';



class Experience extends Component  {

  constructor(props) {
    super(props);
    this.state = {
    user:{},
    redirect: false,
    toUrl:'',
    token:'',    

    // This is professional Qualification form
    designations:[],    
    experiences:[],
    institution:'',
    designation_id:'',
    subject_taught:'',
    start_date:'',
    end_date:'',
    specialization:'',
    updateId:'',
    // date_of_award:''
    }
    // this.check();
  }

  componentDidMount(){
    this.getUser();
    this.getDesignations();
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
                this.getExperiences();
                // this.getProfessionalQualification();
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

  setMyRoute(x){
    this.setState({redirect:true,toUrl:x});
  }

  setPublicationUpdate = (pub)=>{
    // let pub = this.state.publications[id];
    // this.setState({updatePublication:pub})
    
    this.setState({
      institution: pub.institution,
      designation_id:pub.designation_id,
      subject_taught:pub.subject_taught,
      start_date: moment(pub.start_date).format("YYYY-MM-DD"),
      end_date: moment(pub.end_date).format("YYYY-MM-DD"),
      specialization:pub.specialization,
      updateId:pub.id,
    })
  }

  onSubmitExperience = (e) => {
    e.preventDefault();
    const {...formData } = this.state;
    console.log(formData);
    console.log(URL);
    console.log(this.state.token)
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};let url = `${URL}/lecturer/experience`
    if(this.state.updateId){
       url = `${URL}/lecturer/experience/${this.state.updateId}`
    }             
    axios.post(url, formData, options)
      .then((response) => {
        if (response.status == 200) {
          this.setState({
            institution:'',
            designation_id:'',
            subject_taught:'',
            start_date:'',
            end_date:'',
            specialization:''
          })
            console.log(response.data)
            this.getExperiences();
          // localStorage.setItem('token', response.data.token);
          // this.setState({ redirect: true });
          // this.setState({ toUrl:'biodata' });
          
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  getExperiences=()=>{   
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}}; console.log(options);    
    let url = `${URL}/lecturer/experience`      
    axios.get(url,options)
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

  mapDesignationsOptions = ()=>{
    let marital_stat =<option value="null"> Nothing </option> ;
    if(this.state.designations != undefined && this.state.designations.length > 0){      
      marital_stat= this.state.designations.map(ms => {
        return (
          <option key={ms.id} value={ms.id}>{ms.name}</option>  
        )
      });
    }
    return marital_stat;   
  }

  mapTableExperiences(){
    let items = <tr style={{width:'100%'}} className="col-md-12" >Nothing</tr>
    // if(this.state.maritalStatuses){
    if(this.state.experiences != undefined && this.state.experiences.length > 0){
        
      items= this.state.experiences.map(item => {
        return (
          // <option key={item.id} value={item.id}> {item.name} </option>  
          <tr key={item.id}>
            <td>{item.institution}</td>
            <td>{item.designation.name}</td>
            <td>{item.specialization}</td>
            <td>
            {/* <Moment parse="YYYY-MM-DD HH:mm"> */}
               {item.subject_taught}
            {/* </Moment> */}
              
            </td>
            <td>
            <Moment format="DD-MM-YYYY">
               {item.start_date}
            </Moment>
             
            </td>
            <td>
            <Moment format="DD-MM-YYYY">
               {item.end_date}
            </Moment>
            </td> 

            <td>
              <Button color="primary" size="xs" 
                onClick={()=>{this.setPublicationUpdate(item)}}>
                Update
              </Button> 
            </td>
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
                  <th>Settings</th>
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
                  <h4 className="box-title"> form </h4>			
                  <ul className="box-controls pull-right">
                    {/* <li><a className="box-btn-close" href="#"></a></li> */}
                    <li><a className="box-btn-slide" href="#"></a></li>	
                    {/* <li><a className="box-btn-fullscreen" href="#"></a></li> */}
                  </ul>
                </div>

                {/* <form className="form"> */}
                <div className="box-body">
                  <h4 className="box-title text-info"><i className="ti-user mr-15"></i> Educational Info</h4>
                  <hr className="my-15" />
                  <form onSubmit={this.onSubmitExperience} className="form">

                    <div className="row">

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Institution</label>
                          <input type="text" value={this.state.institution}
                          onChange={event =>this.setState({institution: event.target.value,})}
                           className="form-control" placeholder="Institution"/>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Designation</label>
                          <select className="form-control" value={this.state.designation_id}
                          onChange={event =>this.setState({designation_id: event.target.value,})} >
                            {this.mapDesignationsOptions()}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Specialization</label>
                          <input type="text" value={this.state.specialization}
                          onChange={event =>this.setState({specialization: event.target.value,})} 
                          className="form-control" placeholder="Specialization"/>
                        </div>
                      </div>

                      
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Subject Taught</label>
                          <input type="text" value={this.state.subject_taught}
                          onChange={event =>this.setState({subject_taught: event.target.value,})} 
                           className="form-control" placeholder="Subject Taught"/>
                        </div>
                      </div>

                    </div>

                    <div className="row">

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Start Date </label>
                          <input type="date" value={this.state.start_date}
                          onChange={event =>this.setState({start_date: event.target.value,})}
                          className="form-control" placeholder="Start Date"/>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>End Date</label>
                          <input type="date" value={this.state.end_date}
                          onChange={event =>this.setState({end_date: event.target.value,})}
                          className="form-control" placeholder="End Date"/>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Evidence</label>
                          <input type="file" id="file" className="form-control" />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 pull-right">
                        <input type="submit" value= {(this.state.updateId)? "Update" : "Save"} className="btn btn-primary pull-right  col-md-5" />
                      </div>
                    </div>

                  </form>


                  <hr className="my-15" />

                  {this.mapTableExperiences()}
                
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

export default Experience;

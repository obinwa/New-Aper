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

import moment from 'moment';
import Moment from 'react-moment';

class Qualification extends Component  {

  constructor(props) {
    super(props);
    this.state = {
    user:{},
    redirect: false,
    toUrl:'',
    token:'',
    degrees:[],
    aclass:[],
    academic_qualifications:[],
    academic_class_id:'',
    degree_id:'',
    institution:'',
    award_date:'',
    updateEId:'',

    // This is professional Qualification form
    professional_qualifications:[],

    updatePId:'',    
    profession:'',
    qualification:'',
    qualification_institution:'',
    country:'',
    awarding_body:'',
    date_of_award:''
    }
    // this.check();
  }


  componentDidMount(){
      this.getUser();
      this.getDegree();
      this.getAcademicClass();
      // this.getAcademicQualification();
  }

  setUpdate = (pub, type)=>{

    if(type =="Eid"){
      this.setState({
        academic_class_id:pub.academic_class_id,
        degree_id:pub.degree_id,
        institution:pub.institution,
        award_date:moment(pub.award_date).format("YYYY-MM-DD"),
        updateEId:pub.id
        
      })
    }

    if(type =="Pid"){
      this.setState({
        updatePId:pub.id,    
        profession:pub.profession,
        qualification:pub.qualification,
        qualification_institution:pub.institution,
        country:pub.country,
        awarding_body:pub.awarding_body,
        date_of_award:moment(pub.date_of_award).format("YYYY-MM-DD")
        
      })
    }
    
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
                this.getAcademicQualification();
                this.getProfessionalQualification();
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

  getDegree(){      
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};             
    axios.get(`${URL}/admin/getAllAcademicDegree`,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({degrees : response.data });
        }
    })
    .catch((error)=> {
        if(error.response){
          console.log(error.response);              
          // localStorage.clear()
        }
    });
    
  }

  getAcademicClass(){      
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};             
    axios.get(`${URL}/admin/getAllAcademicClass`,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({aclass : response.data });
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
    axios.get(`${URL}/lecturer/academicQualifications`,options)
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
    axios.get(`${URL}/lecturer/professionalQualifications`,options)
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


  mapDegree = ()=>{
    let items =<option value="null"> Nothing </option> ;
    // if(this.state.maritalStatuses){
    if(this.state.degrees != undefined && this.state.degrees.length > 0){
        
      items= this.state.degrees.map(item => {
        return (
          <option key={item.id} value={item.id}> {item.name} </option>  
        )
      });
    }

    return items;
    
  }

  mapAclass = ()=>{
    let items =<option value="null"> Nothing </option> ;
    // if(this.state.maritalStatuses){
    if(this.state.aclass != undefined && this.state.aclass.length > 0){
        
      items= this.state.aclass.map(item => {
        return (
          <option key={item.id} value={item.id}> {item.name} </option>  
        )
      });
    }

    return items;
    
  }

  onSubmitAcademic = (e) => {
    e.preventDefault();
    const {...formData } = this.state;
    console.log(formData);
    console.log(URL);
    console.log(this.state.token)
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};let url = `${URL}/lecturer/academicQualifications`
    if(this.state.updateEId){
       url = `${URL}/lecturer/academicQualifications/${this.state.updateEId}`
    }                
    axios.post(url, formData, options)
      .then((response) => {
        if (response.status == 200) {
            console.log(response.data)
            this.getAcademicQualification();

            this.setState({
              academic_class_id:'',
              degree_id:'',
              institution:'',
              award_date:'',
              updateEId:'',
            })
          
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  onSubmitProfessional = (e) => {
    e.preventDefault();
    const {...formData } = this.state;
    console.log(formData);
    console.log(URL);
    console.log(this.state.token)
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};let url = `${URL}/lecturer/professionalQualifications`
    if(this.state.updatePId){
       url = `${URL}/lecturer/professionalQualifications/${this.state.updatePId}`
    }               
    axios.post(url, formData, options)
      .then((response) => {
        if (response.status == 200) {
            console.log(response.data)
            this.getProfessionalQualification(); 
            this.setState({
              updatePId:'',    
              profession:'',
              qualification:'',
              qualification_institution:'',
              country:'',
              awarding_body:'',
              date_of_award:''
            })
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  
  mapTableAcademicQualification(){
    let items = <tr style={{width:'100%'}} >Nothing</tr>
    // if(this.state.maritalStatuses){
    if(this.state.academic_qualifications != undefined && this.state.academic_qualifications.length > 0){
        
      items= this.state.academic_qualifications.map(item => {
        return (
          // <option key={item.id} value={item.id}> {item.name} </option>  
          <tr key={item.id}>
            <td>{item.academic_degree.name}</td>
            <td>{item.academic_class.name}</td>
            <td>{item.institution}</td>
            <td>{item.award_date}</td>
            <td>
              <Button color="primary" size="xs" 
                onClick={()=>{this.setUpdate(item,"Eid")}}>
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
            <td>
              <Button color="primary" size="xs" 
                onClick={()=>{this.setUpdate(item,"Pid")}}>
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
                  <h3 className="page-title">Qualification</h3>
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

                {/* <form onSubmit={this.onSubmit} className="form"> */}
                <div className="box-body">
                  <h4 className="box-title text-info"><i className="ti-user mr-15"></i> Educational Info</h4>
                  <hr className="my-15" />
                  <form onSubmit={this.onSubmitAcademic} className="form">

                    <div className="row">

                      <div className="col-md-2">
                        <div className="form-group">
                          <label>Degree</label>
                          <select className="form-control" value={this.state.degree_id}
                          onChange={event =>this.setState({degree_id: event.target.value,})}>
                            {this.mapDegree()}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Class</label>
                          <select className="form-control" value={this.state.academic_class_id}
                            onChange={event =>this.setState({academic_class_id: event.target.value,})}>
                            {this.mapAclass()}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Institution</label>
                          <input type="text" value={this.state.institution}
                          onChange={event =>this.setState({institution: event.target.value,})}
                          className="form-control" placeholder="Unilag"/>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Award Date</label>
                          <input type="date" value={this.state.award_date}
                          onChange={event =>this.setState({award_date: event.target.value,})} className="form-control" placeholder=" date"/>
                        </div>
                      </div>

                      
                    </div>
                  <div className="row">
                    <div className="col-md-12 pull-right">
                      <input type="submit" className="btn btn-warning btn-outline pull-right " value= {(this.state.updateEId)? "Update" : "Save"}/>
                    </div>
                  </div>

                  </form>

                  {this.mapTableAcademicQualification()}

                  
                  <h4 className="box-title text-info"><i className="ti-save mr-15"></i> Professional Info</h4>
                  <hr className="my-15"/>


                  <form onSubmit={this.onSubmitProfessional} className="form">

                    <div className="row">

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>profession</label>
                          <input type="text" value={this.state.profession}
                          onChange={event =>this.setState({profession: event.target.value,})}
                          className="form-control" placeholder="Last Name"/>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Qualification</label>
                          <input type="text" value={this.state.qualification}
                          onChange={event =>this.setState({qualification: event.target.value,})}
                          className="form-control" placeholder="Last Name"/>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Institution</label>
                          <input type="text" value={this.state.qualification_institution}
                          onChange={event =>this.setState({qualification_institution: event.target.value,})}
                          className="form-control" placeholder="Last Name"/>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Country</label>
                          <input type="input" value={this.state.country}
                          onChange={event =>this.setState({country: event.target.value,})}
                          className="form-control" placeholder="Last Name"/>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Awarding Body</label>
                          <input type="input" value={this.state.awarding_body}
                          onChange={event =>this.setState({awarding_body: event.target.value,})}
                          className="form-control" placeholder="Last Name"/>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Award Date</label>
                          <input type="date" value={this.state.date_of_award}
                          onChange={event =>this.setState({date_of_award: event.target.value,})}
                          className="form-control" placeholder="Award Date"/>
                        </div>
                      </div>

                      
                    </div>

                    <div className="row">
                      <div className="col-md-12 pull-right">
                      <input type="submit" className="btn btn-warning btn-outline pull-right " value= {(this.state.updatePId)? "Update" : "Save"} />

                      </div>
                    </div>

                  </form>

                  {this.mapTableProfessionalQualification()}
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

export default Qualification;

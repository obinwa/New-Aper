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


class ResearchCollaborators extends Component  {

  constructor(props) {
    super(props);
    this.state = {
    user:{},
    redirect: false,
    toUrl:'',
    token:'',    

    // This is professional Qualification form
    // designations:[],    
    collaborators:[],
    type:'',
    // lecturer_id:'',
    title:'',
    collaborator:'',
    updateId:''

    }
    // this.check();
  }

  componentDidMount(){
    this.getUser();
    // this.getDesignations();
    // this.getAcademicClass();
    // this.getAcademicQualification();
  }

  setUpdate = (pub)=>{
    this.setState({
      type:pub.type,
      title:pub.title,
      collaborator:pub.collaborator,
      updateId:pub.id,
      
    })
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
                this.getResearchCollaborators();
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
              // localStorage.clear()
            }
        });
    }
  }

  clear = ()=>{
    this.setState({
      type:'',
      title:'',
      collaborator:'',
      updateId:''
    })
  }

  setMyRoute(x){
    this.setState({redirect:true,toUrl:x});
  }

  onSubmitResearch = (e) => {
    e.preventDefault();
    const {...formData } = this.state;
    console.log(formData);
    console.log(this.state.token)
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};let url = `${URL}/lecturer/collaborator`
    if(this.state.updateId){
       url = `${URL}/lecturer/collaborator/${this.state.updateId}`
    }      
    console.log(url);    
    axios.post(url,formData, options)
      .then((response) => {
        if (response.status == 200) {
          this.setState({
            type:'',
            awarding_body:'',
            start_date:'',
            end_date:''
          })
            console.log(response.data)
            this.getResearchCollaborators();
          
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  getResearchCollaborators=()=>{   
    console.log("yea")   
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}}; console.log(options);            
    axios.get(`${URL}/lecturer/collaborator`,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({collaborators : response.data });
        }
    })
    .catch((error)=> {
        if(error.response){
          console.log(error.response);              
          // localStorage.clear()
        }
    });
  }

  mapTableResearchGrant(){
    let items = <tr style={{width:'100%'}} className="col-md-12" >Nothing</tr>
    // if(this.state.maritalStatuses){
    if(this.state.collaborators != undefined && this.state.collaborators.length > 0){
        
      items= this.state.collaborators.map(item => {
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
            <td>{item.title}</td>
            <td>{item.collaborator}</td>
            <td>{temp}</td>
            <td>{item.collaborator}</td> 
            <td>
              <Button color="primary" size="xs" 
                onClick={()=>{this.setUpdate(item)}}>
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
            <h3 className="box-title">Research Collaborators</h3>
          </div>
          {/* <!-- /.box-header --> */}
          <div className="box-body">
            <div className="table-responsive">
              <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Collaborator</th>
                  <th>Type</th>
                  <th>Settings</th>
                </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
              <tfoot>
                <tr>
                  <th>Title</th>
                  <th>Collaborator</th>
                  <th>Type</th>
                  <th>Settings</th>
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
                  <h3 className="page-title">Collaborators</h3>
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
                  <h4 className="box-title text-info"><i className="ti-user mr-15"></i> Collaborators</h4>
                  <hr className="my-15" />
                  <form onSubmit={this.onSubmitResearch} className="form">

                    <div className="row">

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Title</label>
                          <input type="text" value={this.state.title}
                          onChange={event =>this.setState({title: event.target.value,})}
                           className="form-control" placeholder="Title"/>
                        </div>
                      </div>

                      
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Type</label>
                          <select className="form-control" value={this.state.type}
                          onChange={event =>this.setState({type: event.target.value,})} >
                            <option value="null"> Select A Option </option>
                            <option value="1"> Collaboration within faculty </option>
                            <option value="2">collaboration within university </option>
                            <option value="3">collaboration outside university </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Collaborator</label>
                          <input type="text" value={this.state.collaborator}
                          onChange={event =>this.setState({collaborator: event.target.value,})}
                          className="form-control" placeholder="Collaborator"/>
                        </div>
                      </div>

                      
                    </div>

                    <div className="row">
                      <div className="col-md-6 pull-right">
                        <input type="submit" value= {(this.state.updateId)? "Update" : "Save"} className="btn btn-primary pull-right  col-md-5" />
                      </div>
                      
                      {/* <div className="col-md-6 ">
                        <input type="submit" value= "clear" className="btn btn-primary pull-right  col-md-5" />
                      </div> */}
                      
                    </div>

                  </form>


                  <hr className="my-15" />

                  {this.mapTableResearchGrant()}
                
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

export default ResearchCollaborators;

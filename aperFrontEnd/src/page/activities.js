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


class Activity extends Component  {

  constructor(props) {
    super(props);
    this.state = {
    user:{},
    redirect: false,
    toUrl:'',
    token:'',    

    // This is professional Qualification form
    // designations:[],    
    activities:[],
    type:'',
    position:'',
    // subject_taught:'',
    start_date:'',
    end_date:'',
    till_date:'',
    updateId:''
    }
    // this.check();
  }

  componentDidMount(){
    this.getUser();
    // this.getActivities();
    // this.getAcademicClass();
    // this.getAcademicQualification();
  }

  setUpdate = (pub)=>{

    this.setState({
      type:pub.type,
      position:pub.position,
      start_date:moment(pub.start_date).format("YYYY-MM-DD"),
      end_date:moment(pub.end_date).format("YYYY-MM-DD"),
      till_date:moment(pub.till_date).format("YYYY-MM-DD"), 
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
                this.getActivities();
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

  onSubmitActivity = (e) => {
    e.preventDefault();
    const {...formData } = this.state;
    console.log(formData);
    console.log(URL);
    console.log(this.state.token)
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};let url = `${URL}/lecturer/activity`
    if(this.state.updateId){
       url = `${URL}/lecturer/activity/${this.state.updateId}`
    }                          
    axios.post(url, formData, options)
      .then((response) => {
        if (response.status == 200) {
          this.setState({
            type:'',
            position:'',
            start_date:'',
            end_date:'',
            till_date:'',
            updateId:'',
          })
            console.log(response.data)
            this.getActivities();
          // localStorage.setItem('token', response.data.token);
          // this.setState({ redirect: true });
          // this.setState({ toUrl:'biodata' });
          
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  getActivities=()=>{   
    console.log("yea")   
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}}; console.log(options);            
    axios.get(`${URL}/lecturer/activity`,options)
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

  mapTableExperiences(){
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
                  <h3 className="page-title">Activity</h3>
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
                  <h4 className="box-title text-info"><i className="ti-user mr-15"></i> Activity Info</h4>
                  <hr className="my-15" />
                  <form onSubmit={this.onSubmitActivity} className="form">

                    <div className="row">

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Position</label>
                          <input type="text" value={this.state.position}
                          onChange={event =>this.setState({position: event.target.value,})}
                           className="form-control" placeholder="position"/>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Type</label>
                          <select className="form-control" value={this.state.type}
                          onChange={event =>this.setState({type: event.target.value,})} >
                          <option value="null"> Select A Option </option>
                          <option value="1"> Current </option>
                          <option value="2"> Previous </option>
                          </select>
                        </div>
                      </div>

                    </div>

                    <div className="row">

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Start Date</label>
                          <input type="date" value={this.state.start_date}
                          onChange={event =>this.setState({start_date: event.target.value,})}
                          className="form-control" placeholder="Start Date"/>
                        </div>
                      </div>

                      {
                        (this.state.type && this.state.type==2) ?
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>End Date</label>
                            <input type="date" value={this.state.end_date}
                            onChange={event =>this.setState({end_date: event.target.value,})}
                            className="form-control" placeholder="End Date"/>
                          </div>
                        </div>
                        :
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Till Date</label>
                            <input type="date" value={this.state.till_date}
                            onChange={event =>this.setState({till_date: event.target.value,})}
                            className="form-control" placeholder="Till Date"/>
                          </div>
                        </div>
                      
                      }
                      
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

                {/* <div className="box-footer">
                  <button type="button" className="btn btn-warning btn-outline mr-1">
                    <i className="ti-trash"></i> Cancel
                  </button>
                  <button type="submit" className="btn btn-primary btn-outline">
                    <i className="ti-save-alt"></i> Save
                  </button>
                </div>   */}
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

export default Activity;

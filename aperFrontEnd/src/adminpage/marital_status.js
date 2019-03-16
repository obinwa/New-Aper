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


class MaritalStatusSetting extends Component  {

  constructor(props) {
    super(props);
    this.state = {
    user:{},
    redirect: false,
    toUrl:'',
    token:'',    

    // This is professional Qualification form
    // designations:[],    
    settings:[],
    lecturer_start_time:'',
    lecturer_end_time:'',
    hod_end_time:'',
    dean_end_time:'',
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
    // let pub = this.state.publications[id];
    // this.setState({updatePublication:pub})
    
    this.setState({
    
        lecturer_start_time: moment(pub.lecturer_start_time).format("YYYY-MM-DD"),
        lecturer_end_time:moment(pub.lecturer_end_time).format("YYYY-MM-DD"),
        hod_end_time:moment(pub.hod_end_time).format("YYYY-MM-DD"),
        dean_end_time:moment(pub.dean_end_time).format("YYYY-MM-DD"),
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
                this.getSetting();
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

  onSubmitResearch = (e) => {
    e.preventDefault();
    const {...formData } = this.state;
    console.log(formData);
    console.log(URL);
    console.log(this.state.token)
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};
    
    let url = `${URL}/admin/setting`
    if(this.state.updateId){
       url = `${URL}/admin/setting/${this.state.updateId}`
    }             
    axios.post(url,formData, options)
      .then((response) => {
        if (response.status == 200) {
            this.setState({
                lecturer_start_time:'',
                lecturer_end_time:'',
                hod_end_time:'',
                dean_end_time:'',
                updateId:''
            })
            console.log(response.data);
            this.getSetting();
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  getSetting=()=>{   
    console.log("yea")   
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}};
     console.log(options);            
    axios.get(`${URL}/admin/setting`,options)
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

  mapTableSetting = ()=>{
    let items = <tr style={{width:'100%'}} className="col-md-12" >Nothing</tr>
    // if(this.state.maritalStatuses){
    if(this.state.researchgrants != undefined && this.state.researchgrants.length > 0){
        
      items= this.state.researchgrants.map(item => {
        return (
          // <option key={item.id} value={item.id}> {item.name} </option>  
          <tr key={item.id}>
            <td>
                <Moment format="DD-MM-YYYY">
                    {item.lecturer_start_time}
                </Moment>
            </td>

            <td>
                <Moment format="DD-MM-YYYY">
                    {item.lecturer_end_time}
                </Moment>
            </td>

            <td>
                <Moment format="DD-MM-YYYY">
                    {item.hod_end_time}
                </Moment>
            </td>

            <td>
                <Moment format="DD-MM-YYYY">
                    {item.dean_end_time}
                </Moment>
            </td>

            
            <td>
            {/* <Moment format="DD-MM-YYYY">
               {item.start_date}
            </Moment> */}
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
            <h3 className="box-title">Educational Info</h3>
          </div>
          {/* <!-- /.box-header --> */}
          <div className="box-body">
            <div className="table-responsive">
              <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Lecturer Start Time</th>
                  <th>Lecturer End Time</th>
                  <th>Hod End Time</th>
                  <th>Dean End Time</th>
                  
                </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
              <tfoot>
                <tr>
                  <th>Lecturer Start Time</th>
                  <th>Lecturer End Time</th>
                  <th>Hod End Time</th>
                  <th>Dean End Time</th>
                  
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
                  <h3 className="page-title">Setting</h3>
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
                  <h4 className="box-title text-info"><i className="ti-user mr-15"></i> Settings Info</h4>
                  <hr className="my-15" />
                  <form onSubmit={this.onSubmitResearch} className="form">

                    <div className="row">

                      <div className="col-md-5">
                        <div className="form-group">
                          <label>Lecturer Start Time</label>
                          <input type="date" value={this.state.lecturer_start_time}
                          onChange={event =>this.setState({lecturer_start_time: event.target.value,})}
                           className="form-control" placeholder="Institution"/>
                        </div>
                      </div>

                      <div className="col-md-5">
                        <div className="form-group">
                          <label>Lecturer End Time</label>
                          <input type="date" value={this.state.lecturer_end_time}
                          onChange={event =>this.setState({lecturer_end_time: event.target.value,})}
                           className="form-control" placeholder="Institution"/>
                        </div>
                      </div>

                      <div className="col-md-5">
                        <div className="form-group">
                          <label>Hod End Time</label>
                          <input type="date" value={this.state.hod_end_time}
                          onChange={event =>this.setState({hod_end_time: event.target.value,})}
                           className="form-control" placeholder="Institution"/>
                        </div>
                      </div>

                      <div className="col-md-5">
                        <div className="form-group">
                          <label>Dean End Time</label>
                          <input type="date" value={this.state.dean_end_time}
                          onChange={event =>this.setState({dean_end_time: event.target.value,})}
                           className="form-control" placeholder="Institution"/>
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

                  {this.mapTableSetting()}
                
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

export default MaritalStatusSetting;

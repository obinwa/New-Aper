import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import RightSidebar from '../components/right-sidebar';
// import './App.css';
import { Link, Redirect} from "react-router-dom";

class OneLecturer extends Component  {

  constructor(props) {
    super(props);
    this.state = {
    user:{},
    redirect: false,
    toUrl:'',
    token:'',    

    // This is professional Qualification form
    // designations:[],    
    lecturers:[],
    type:'',
    awarding_body:'',
    start_date:'',
    end_date:'',
    
    }
    // this.check();
  }

  componentDidMount(){
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
                this.getAllLecturer();
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
    axios.post(`${URL}/lecturer/researchGrant`, formData, options)
      .then((response) => {
        if (response.status == 200) {
          this.setState({
            type:'',
            awarding_body:'',
            start_date:'',
            end_date:''
          })
            console.log(response.data)
            this.getResearchGrant();
          // localStorage.setItem('token', response.data.token);
          // this.setState({ redirect: true });
          // this.setState({ toUrl:'biodata' });
          
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  getAllLecturer=()=>{   
    console.log("yea")   
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}}; console.log(options);            
    axios.get(`${URL}/hod/getAllLecturer/${this.state.user.department_id}`,options)
    .then( (response) => {
        if(response.data){         
          console.log(response.data)
            this.setState({lecturers : response.data });
        }
    })
    .catch((error)=> {
        if(error.response){
          console.log(error.response);              
          // localStorage.clear()
        }
    });
  }

  mapTableHodDepartmentalLecturer(){
    let items = <tr style={{width:'100%'}} className="col-md-12" >Nothing</tr>
    // if(this.state.maritalStatuses){
    if(this.state.lecturers != undefined && this.state.lecturers.length > 0){
        
      items= this.state.lecturers.map(item => {
        return (
          // <option key={item.id} value={item.id}> {item.name} </option>  
          <tr key={item.id}>
            <td>{item.first_name} {item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.professional_status.name}</td>
            <td>{item.sex}</td> 
            <td>{item.marital_status.name}</td>
            {/* <td><a class="btn btn-success btn-xs" target="_blank" onClick={()=>{this.setMyRoute('oneLecturer')}}>preview</a>
            </td> */}
            {/* <td>
            <Link to={`/publication`}>preview</Link>
            </td> */}

          </tr>
        )
      });
    }

    let table =
    <div className="row">
      <div className="col-md-12">
        <div className="box">
          <div className="box-header with-border">
            <h3 className="box-title">Departmental Lecturer Info</h3>
          </div>
          {/* <!-- /.box-header --> */}
          <div className="box-body">
            <div className="table-responsive">
              <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>professional Status</th>
                  <th>sex</th>
                  <th>Marital Status</th>
                  <th>Settings</th>
                </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>professional Status</th>
                  <th>sex</th>
                  <th>Marital Status</th>
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
    // const { id } = this.props.match.params;
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
                  <h3 className="page-title">Department Lecturer</h3>
                  <div className="d-inline-block align-items-center">
                    <nav>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
                        <li className="breadcrumb-item active" aria-current="page"> ONE</li>
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

export default OneLecturer;

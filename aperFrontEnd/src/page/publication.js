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


class Publication extends Component  {

  constructor(props) {
    super(props);
    this.state = {
    user:{},
    redirect: false,
    toUrl:'',
    token:'',    

    // This is professional Qualification form
    // designations:[],    
    publications:[],
    // updatePublication:{},
    type:'',
    details:'',
    title:'',
    updateId:''
    // modal:false
    // end_date:'',
    
    }
    // this.toggle = this.toggle.bind(this);
  }

  toggle =()=> {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  setPublicationUpdate = (pub)=>{
    // let pub = this.state.publications[id];
    // this.setState({updatePublication:pub})
    this.setState({
      type:pub.type,
      details:pub.details,
      title:pub.title,
      updateId:pub.id,
    })
  }

  
  componentDidMount(){
    this.getUser();
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
                this.getPublications();
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
    let url = `${URL}/lecturer/publication`
    if(this.state.updateId){
       url = `${URL}/lecturer/publication/${this.state.updateId}`
    }
    // let url = `${URL}/lecturer/publication`
    axios.post(url, formData, options)
      .then((response) => {
        if (response.status == 200) {
          this.setState({
            type:'',
            details:'',
            title:'',
            updateId:'',
          })
            console.log(response.data)
            this.getPublications();
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  getPublications=()=>{   
    console.log("yea")   
    const options={headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}`}}; console.log(options);            
    axios.get(`${URL}/lecturer/publication`,options)
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

  mapTableResearchGrant(){
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
                  <th>Settings</th>
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
                  <h3 className="page-title">Publications</h3>
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
          
          {/* MODAL */}
            {/* <div>
              <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                  {this.state.updatePublication.id}
                  <form onSubmit={this.onSubmitResearch} className="form">

                   

                      <div className="col-md-5">
                        <div className="form-group">
                          <label>Title</label>
                          <input type="text" value={this.state.updatePublication.title}
                          onChange={event =>this.setState({title: event.target.value,})}
                           className="form-control" placeholder="Title"/>
                        </div>
                      </div>

                      <div className="col-md-5">
                        <div className="form-group">
                          <label>Type</label>
                          <input type="text" value={this.state.updatePublication.type}
                          onChange={event =>this.setState({type: event.target.value,})}
                           className="form-control" placeholder="Type"/>
                        </div>
                      </div>

                   
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Details</label>
                          <input type="text" value={this.state.updatePublication.details}
                          onChange={event =>this.setState({details: event.target.value,})}
                          className="form-control" placeholder="Details"/>
                        </div>
                      </div>

                
                  

                    <div className="row">
                      <div className="col-md-12 pull-right">
                        <input type="submit" value="Add" className="btn btn-primary pull-right  col-md-5" />
                      </div>
                    </div>

                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div> */}

            {/* Modal */}

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
                  <h4 className="box-title text-info"><i className="ti-user mr-15"></i> Publications Info</h4>
                  <hr className="my-15" />
                  <form onSubmit={this.onSubmitResearch} className="form">

                    <div className="row">

                      <div className="col-md-5">
                        <div className="form-group">
                          <label>Title</label>
                          <input type="text" value={this.state.title}
                          onChange={event =>this.setState({title: event.target.value,})}
                           className="form-control" placeholder="Title"/>
                        </div>
                      </div>

                      <div className="col-md-5">
                        <div className="form-group">
                          <label>Type</label>
                          <input type="text" value={this.state.type}
                          onChange={event =>this.setState({type: event.target.value,})}
                           className="form-control" placeholder="Type"/>
                        </div>
                      </div>

                    </div>

                    <div className="row">

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Details</label>
                          <input type="text" value={this.state.details}
                          onChange={event =>this.setState({details: event.target.value,})}
                          className="form-control" placeholder="Details"/>
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

export default Publication;

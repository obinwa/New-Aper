import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import RightSidebar from '../components/right-sidebar';
// import './App.css';
import {
  // BrowserRouter as Router,
  // Route,
  Link,
  Redirect,
  // withRouter
} from "react-router-dom";

class Agrade extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
      toUrl:''
    }
  }

  render() {
    const { redirect, toUrl } = this.state;
    if (redirect && toUrl) {
      return <Redirect to={toUrl} />
    }
    return (
      <div className="hold-transition skin-blue sidebar-mini">
        <div className="wrapper">
          <Header/>
          <Sidebar onNavigate={(e)=> {this.setState({redirect:true,toUrl:e})}}/>
          {/* <Sidebar onNavigate={(e)=> {console.log(e)}} /> */}

          <div className="content-wrapper">
              <div className="content-header">
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                  <h3 className="page-title" onClick={()=>this.setState({redirect:true})}>Grade</h3>
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
                      <i className="fa fa-angle-down"> love God</i>
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

                    <div className="box-body">
                      <h4 className="box-title text-info"><i className="ti-user mr-15"></i> Educational Info</h4>
                      <hr className="my-15" />

                      <form className="form">

                        <div className="row">

                          <div className="col-md-3">
                            <div className="form-group">
                              <label>Name</label>
                              <input type="date" className="form-control" placeholder="Last Name"/>
                            </div>
                          </div>

                          
                          <div className="col-md-3">
                            <div className="form-group">
                              <label>Description</label>
                              <input type="text" className="form-control" placeholder="Last Name"/>
                            </div>
                          </div>
                          
                          <div className="col-md-3">
                            <div className="form-group">
                              <button type="submit" className="btn btn-primary ">
                                <i className="ti-save-alt"></i> Save
                              </button>
                            </div>
                          </div>

                        </div>

                      </form>

                    
                      

                      <div className="row">
                        <div className="col-md-12">
                          <div className="box">
                            <div className="box-header with-border">
                              <h3 className="box-title">Experience Info</h3>
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
                          
                                  <tr>
                                    <td>Jonas Alexander</td>
                                    <td>Developer</td>
                                    <td>San Francisco</td>
                                    <td>30</td>
                                    <td>2010/07/14</td>
                                    <td>30</td>
                                    <td>2010/07/14</td>
                                  </tr>
                                  <tr>
                                    <td>Shad Decker</td>
                                    <td>Regional Director</td>
                                    <td>Edinburgh</td>
                                    <td>51</td>
                                    <td>2008/11/13</td>
                                    <td>30</td>
                                    <td>2010/07/14</td>
                                  </tr>
                                  <tr>
                                    <td>Michael Bruce</td>
                                    <td>Javascript Developer</td>
                                    <td>Singapore</td>
                                    <td>29</td>
                                    <td>2011/06/27</td>
                                    <td>30</td>
                                    <td>2010/07/14</td>
                                  </tr>
                                  <tr>
                                    <td>Donna Snider</td>
                                    <td>Customer Support</td>
                                    <td>New York</td>
                                    <td>27</td>
                                    <td>2011/01/25</td>
                                    <td>30</td>
                                    <td>2010/07/14</td>
                                  </tr>
                                </tbody>
                                <tfoot>
                                  <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                  </tr>
                                </tfoot>
                                </table>
                              </div>
                            </div>
                            {/* <!-- /.box-body --> */}
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

export default Agrade;

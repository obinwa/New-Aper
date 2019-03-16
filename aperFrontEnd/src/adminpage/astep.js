import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import RightSidebar from '../components/right-sidebar';
// import './App.css';

class Astep extends Component  {
  render() {
    return (
      <div className="hold-transition skin-blue sidebar-mini">
        <div className="wrapper">
          <Header/>
          <Sidebar/>
          <div className="content-wrapper">
              <div className="content-header">
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                  <h3 className="page-title">Steps</h3>
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

                    <div className="box-body">
                      <h4 className="box-title text-info"><i className="ti-user mr-15"></i> Step Info</h4>
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
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Settings</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Donna Snider</td>
                                    <td>Customer Support</td>
                                    <td>New York</td>
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

export default Astep;

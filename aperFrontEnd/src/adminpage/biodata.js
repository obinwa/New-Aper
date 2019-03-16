import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import RightSidebar from '../components/right-sidebar';
// import './App.css';

class Biodata extends Component  {
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
                  <h3 className="page-title">Biodata</h3>
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
                          <label>First Name</label>
                          <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Grade of Last Position</label>
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
                          <label>Last Name</label>
                          <input type="text" className="form-control" placeholder="Last Name"/>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Grade of Current Appointment</label>
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
                          <label>Date of Birth</label>
                          <input type="date" className="form-control" placeholder="" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" className="form-control" placeholder="Last Name"/>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Title</label>
                          <select className="form-control">
                          <option>Marital Status</option>
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
                          <label>Current Salary</label>
                          <input type="text" className="form-control" placeholder="Last Name"/>
                        </div>
                      </div>
                    </div>

                    <h4 className="box-title text-info"><i className="ti-save mr-15"></i> Requirements</h4>
                    <hr className="my-15"/>
                    <div className="form-group">
                      <label>Company</label>
                      <input type="text" className="form-control" placeholder="Company Name"/>
                    </div>
                    
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Interested in</label>
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
                          <label>Budget</label>
                          <select className="form-control">
                          <option>Budget</option>
                          <option>less than 5000$</option>
                          <option>5000$ - 10000$</option>
                          <option>10000$ - 20000$</option>
                          <option>more than 20000$</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>About Project</label>
                      <textarea rows="5" className="form-control" placeholder="About Project"></textarea>
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

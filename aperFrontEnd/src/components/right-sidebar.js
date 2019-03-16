import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class RightSidebar extends Component {
  render() {
    return (
      <div>
        <aside className="control-sidebar control-sidebar-light">

          <div className="rpanel-title"><span className="btn pull-right"><i className="ion ion-close" data-toggle="control-sidebar"></i></span> </div>
            <ul className="nav nav-tabs control-sidebar-tabs">
              <li className="nav-item"><a href="#control-sidebar-home-tab" data-toggle="tab">Tas</a></li>
              <li className="nav-item"><a href="#control-sidebar-settings-tab" data-toggle="tab">General</a></li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane" id="control-sidebar-home-tab">
                <h3 className="control-sidebar-heading">Recent Activity</h3>
                <ul className="control-sidebar-menu">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="menu-icon fa fa-birthday-cake bg-danger"></i>

                      <div className="menu-info">
                        <h4 className="control-sidebar-subheading">Admin Birthday</h4>

                        <p>Will be July 24th</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="menu-icon fa fa-user bg-warning"></i>

                      <div className="menu-info">
                        <h4 className="control-sidebar-subheading">Jhone Updated His Profile</h4>

                        <p>New Email : jhone_doe@demo.com</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="menu-icon fa fa-envelope-o bg-info"></i>

                      <div className="menu-info">
                        <h4 className="control-sidebar-subheading">Disha Joined Mailing List</h4>

                        <p>disha@demo.com</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="menu-icon fa fa-file-code-o bg-success"></i>

                      <div className="menu-info">
                        <h4 className="control-sidebar-subheading">Code Change</h4>

                        <p>Execution time 15 Days</p>
                      </div>
                    </a>
                  </li>
                </ul>

                <h3 className="control-sidebar-heading">Tasks Progress</h3>
                <ul className="control-sidebar-menu">
                  <li>
                    <a href="javascript:void(0)">
                      <h4 className="control-sidebar-subheading">
                        Web Design
                        <span className="label label-danger pull-right">40%</span>
                      </h4>

                      <div className="progress progress-xxs">
                        <div className="progress-bar progress-bar-danger" style={{"width": "40%"}}></div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h4 className="control-sidebar-subheading">
                        Update Data
                        <span className="label label-success pull-right">75%</span>
                      </h4>

                      <div className="progress progress-xxs">
                        <div className="progress-bar progress-bar-success" style={{"width": "75%"}}></div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h4 className="control-sidebar-subheading">
                        Order Process
                        <span className="label label-warning pull-right">89%</span>
                      </h4>

                      <div className="progress progress-xxs">
                        <div className="progress-bar progress-bar-warning" style={{"width": "89%"}}></div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h4 className="control-sidebar-subheading">
                        Development
                        <span className="label label-primary pull-right">72%</span>
                      </h4>

                      <div className="progress progress-xxs">
                        <div className="progress-bar progress-bar-primary" style={{"width": "72%"}}></div>
                      </div>
                    </a>
                  </li>
                </ul>

              </div>
              <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
              <div className="tab-pane" id="control-sidebar-settings-tab">
                <form method="post">
                  <h3 className="control-sidebar-heading">General Settings</h3>

                  <div className="form-group">
                    <input type="checkbox" id="report_panel" className="chk-col-grey" />
              <label htmlFor="report_panel" className="control-sidebar-subheading ">Report panel usage</label>

                    <p>
                      general settings information
                    </p>
                  </div>

                  <div className="form-group">
                    <input type="checkbox" id="allow_mail" className="chk-col-grey" />
              <label htmlFor="allow_mail" className="control-sidebar-subheading ">Mail redirect</label>

                    <p>
                      Other sets of options are available
                    </p>
                  </div>

                  <div className="form-group">
                    <input type="checkbox" id="expose_author" className="chk-col-grey" />
              <label htmlFor="expose_author" className="control-sidebar-subheading ">Expose author name</label>

                    <p>
                      Allow the user to show his name in blog posts
                    </p>
                  </div>

                  <h3 className="control-sidebar-heading">Chat Settings</h3>

                  <div className="form-group">
                    <input type="checkbox" id="show_me_online" className="chk-col-grey" />
              <label htmlFor="show_me_online" className="control-sidebar-subheading ">Show me as online</label>
                  </div>

                  <div className="form-group">
                    <input type="checkbox" id="off_notifications" className="chk-col-grey" />
              <label htmlFor="off_notifications" className="control-sidebar-subheading ">Turn off notifications</label>
                  </div>

                  <div className="form-group">
                    <label className="control-sidebar-subheading">
                      <a href="javascript:void(0)" className="text-red margin-r-5"><i className="fa fa-trash-o"></i></a>
                      Delete chat history
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </aside>

          <div className="control-sidebar-bg"></div>
      </div>
    )
  }
}

export default RightSidebar
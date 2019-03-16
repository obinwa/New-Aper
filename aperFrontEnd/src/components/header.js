import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Header extends Component {


  render() {

    const {user} = this.props;
    // const nameOrAccount = (isLoggedIn) ? user.firstname : 'Account';
    
    return (
        <header className="main-header">
        <a href="index.html" className="logo">
          <div className="logo-mini">
              <span className="light-logo"><img src="../images/logo-light.png" alt="logo"/></span>
              <span className="dark-logo"><img src="../images/logo-dark.png" alt="logo"/></span>
          </div>
          <div className="logo-lg">
              <span className="light-logo"><img src="../images/logo-light-text.png" alt="logo"/></span>
                <span className="dark-logo"><img src="../images/logo-dark-text.png" alt="logo"/></span>
          </div>
        </a>
        <nav className="navbar navbar-static-top">
          <div>
              <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only">Toggle navigation</span>
              </a>
          </div>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
    
              <li className="search-box">
                <a className="nav-link hidden-sm-down" href="javascript:void(0)"><i className="mdi mdi-magnify"></i></a>
                <form className="app-search" style={{"display": "none"}}>
                    <input type="text" className="form-control" placeholder="Search &amp; enter"/><a className="srh-btn"><i className="ti-close"></i></a>
                </form>
              </li>
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src="../images/avatar/7.jpg" className="user-image rounded-circle" alt="User Image"/>
                </a>
                <ul className="dropdown-menu animated flipInY">
                  <li className="user-header bg-img" style={{"backgroundImage": "url(../images/user-info.jpg)"}} data-overlay="3">
                      <div className="flexbox align-self-center">
                          <img src="../images/avatar/7.jpg" className="float-left rounded-circle" alt="User Image"/>
                        <h4 className="user-name align-self-center">
                          <span>{user.first_name} {user.last_name} </span>
                          <small>{user.email}</small>
                        </h4>
                      </div>
                  </li>
                  <li className="user-body">
                        <a className="dropdown-item" href="javascript:void(0)"><i className="ion ion-person"></i> My Profile</a>
                        <a className="dropdown-item" href="javascript:void(0)"><i className="ion ion-bag"></i> My Balance</a>
                        <a className="dropdown-item" href="javascript:void(0)"><i className="ion ion-email-unread"></i> Inbox</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="javascript:void(0)"><i className="ion ion-settings"></i> Account Setting</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="javascript:void(0)"><i className="ion-log-out"></i> Logout</a>
                        <div className="dropdown-divider"></div>
                        <div className="p-10"><a href="javascript:void(0)" className="btn btn-sm btn-rounded btn-success">View Profile</a></div>
                  </li>
                </ul>
              </li>
    
              <li className="dropdown messages-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="mdi mdi-email"></i>
                </a>
                <ul className="dropdown-menu animated fadeInDown">
    
                  <li className="header">
                    <div className="bg-img text-white p-20" style={{"backgroundImage": "url(/images/user-info.jpg)"}} data-overlay="5">
                        <div className="flexbox">
                            <div>
                                <h3 className="mb-0 mt-0">5 New</h3>
                                <span className="font-light">Messages</span>
                            </div>
                            <div className="font-size-40">
                                <i className="mdi mdi-email-alert"></i>
                            </div>
                        </div>
                    </div>
                  </li>
                  <li>
                    <ul className="menu sm-scrol">
                     <li>
                        <a href="#">
                          <div className="pull-left">
                            <img src="../images/user2-160x160.jpg" className="rounded-circle" alt="User Image"/>
                          </div>
                          <div className="mail-contnet">
                             <h4>
                              Lorem Ipsum
                              <small><i className="fa fa-clock-o"></i> 15 mins</small>
                             </h4>
                             <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="pull-left">
                            <img src="../images/user3-128x128.jpg" className="rounded-circle" alt="User Image"/>
                          </div>
                          <div className="mail-contnet">
                             <h4>
                              Nullam tempor
                              <small><i className="fa fa-clock-o"></i> 4 hours</small>
                             </h4>
                             <span>Curabitur facilisis erat quis metus congue viverra.</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="pull-left">
                            <img src="../images/user4-128x128.jpg" className="rounded-circle" alt="User Image"/>
                          </div>
                          <div className="mail-contnet">
                             <h4>
                              Proin venenatis
                              <small><i className="fa fa-clock-o"></i> Today</small>
                             </h4>
                             <span>Vestibulum nec ligula nec quam sodales rutrum sed luctus.</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="pull-left">
                            <img src="../images/user3-128x128.jpg" className="rounded-circle" alt="User Image"/>
                          </div>
                          <div className="mail-contnet">
                             <h4>
                              Praesent suscipit
                            <small><i className="fa fa-clock-o"></i> Yesterday</small>
                             </h4>
                             <span>Curabitur quis risus aliquet, luctus arcu nec, venenatis neque.</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="pull-left">
                            <img src="../images/user4-128x128.jpg" className="rounded-circle" alt="User Image"/>
                          </div>
                          <div className="mail-contnet">
                             <h4>
                              Donec tempor
                              <small><i className="fa fa-clock-o"></i> 2 days</small>
                             </h4>
                             <span>Praesent vitae tellus eget nibh lacinia pretium.</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                      <a href="#" className="text-white bg-info">See all e-Mails</a></li>
                </ul>
              </li>
              <li className="dropdown notifications-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="mdi mdi-bell"></i>
                </a>
                <ul className="dropdown-menu animated fadeInDown">
    
                  <li className="header">
                    <div className="bg-img text-white p-20" style={{"backgroundImage": "url(/images/user-info.jpg)"}} data-overlay="5">
                        <div className="flexbox">
                            <div>
                                <h3 className="mb-0 mt-0">7 New</h3>
                                <span className="font-light">Notifications</span>
                            </div>
                            <div className="font-size-40">
                                <i className="mdi mdi-message-alert"></i>
                            </div>
                        </div>
                    </div>
                  </li>
    
                  <li>
                    <ul className="menu sm-scrol">
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-info"></i> Curabitur id eros quis nunc suscipit blandit.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-warning text-warning"></i> Duis malesuada justo eu sapien elementum, in semper diam posuere.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-danger"></i> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart text-success"></i> In gravida mauris et nisi
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-danger"></i> Praesent eu lacus in libero dictum fermentum.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-primary"></i> Nunc fringilla lorem
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-success"></i> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer"><a href="#" className="text-white bg-danger">View all</a></li>
                </ul>
              </li>
              <li className="dropdown tasks-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="mdi mdi-bulletin-board"></i>
                </a>
                <ul className="dropdown-menu animated fadeInDown">
    
                  <li className="header">
                    <div className="bg-img text-white p-20" style={{"backgroundImage": "url(../images/user-info.jpg)]}"}} data-overlay="5">
                        <div className="flexbox">
                            <div>
                                <h3 className="mb-0 mt-0">6 New</h3>
                                <span className="font-light">Tasks</span>
                            </div>
                            <div className="font-size-40">
                                <i className="mdi mdi-bulletin-board"></i>
                            </div>
                        </div>
                    </div>
                  </li>
    
                  <li>
                    <ul className="menu sm-scrol">
                    <li>
                        <a href="#">
                          <h3>
                            Lorem ipsum dolor sit amet
                            <small className="pull-right">30%</small>
                          </h3>
                          <div className="progress xs">
                            <div className="progress-bar progress-bar-danger" style={{"width": "30%"}} role="progressbar"
                                 aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span className="sr-only">30% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
    
                          <h3>
                            Vestibulum nec ligula
                            <small className="pull-right">20%</small>
                          </h3>
                          <div className="progress xs">
                            <div className="progress-bar progress-bar-info" style={{"width": "20%"}} role="progressbar"
                                 aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span className="sr-only">20% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h3>
                            Donec id leo ut ipsum
                            <small className="pull-right">70%</small>
                          </h3>
                          <div className="progress xs">
                            <div className="progress-bar progress-bar-success" style={{"width": "70%"}} role="progressbar"
                                 aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span className="sr-only">70% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h3>
                            Praesent vitae tellus
                            <small className="pull-right">40%</small>
                          </h3>
                          <div className="progress xs">
                            <div className="progress-bar progress-bar-warning" style={{"width": "40%"}} role="progressbar"
                                 aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span className="sr-only">40% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h3>
                            Nam varius sapien
                            <small className="pull-right">80%</small>
                          </h3>
                          <div className="progress xs">
                            <div className="progress-bar progress-bar-primary" style={{"width": "80%"}} role="progressbar"
                                 aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span className="sr-only">80% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h3>
                            Nunc fringilla
                            <small className="pull-right">90%</small>
                          </h3>
                          <div className="progress xs">
                            <div className="progress-bar progress-bar-info" style={{"width": "90%"}} role="progressbar"
                                 aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span className="sr-only">90% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer"><a href="#" className="text-white bg-warning">View all tasks</a></li>
                </ul>
              </li>
              <li>
                <a href="#" data-toggle="control-sidebar"><i className="fa fa-cog fa-spin"></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
       
    )
  }
}

export default Header
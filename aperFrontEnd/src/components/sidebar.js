import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  // Route,
  Link,
  Redirect,
  // withRouter
} from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';


class Sidebar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dashboard: '',
      password: '',
      redirect: false,
    }
  }

  userSideBar =()=>{
    const {user} = this.props;
    
    const hod = 
    <li className="treeview">
      <a href="#">
        <i className="mdi mdi-content-copy"></i>
        <span>Hod Options</span>
        <span className="pull-right-container">
          <i className="fa fa-angle-right pull-right"></i>
        </span>
      </a>
      <ul className="treeview-menu">
       <li><a href="javascript:void()" onClick={()=>this.props.onNavigate('hoddepartmentlecturers')}><i className="mdi mdi-toggle-switch-off"></i>Lecturers</a></li>        
      </ul>
    </li>

    return(
      <ul className="sidebar-menu" data-widget="tree">
        <li className="user-profile treeview">
          <a href="index.html">
            <img src="../images/avatar/7.jpg" alt="user"/>
            <span>
              <span className="d-block font-weight-600 font-size-16">Samuel Brus</span>
              <span className="email-id">samuel@gmail.com</span>
            </span>
            <span className="pull-right-container">
              <i className="fa fa-angle-right pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
              <li><a href="javascript:void()"><i className="fa fa-user mr-5"></i>My Profile </a></li>
              <li><a href="javascript:void()"><i className="fa fa-money mr-5"></i>My Balance</a></li>
              <li><a href="javascript:void()"><i className="fa fa-envelope-open mr-5"></i>Inbox</a></li>
              <li><a href="javascript:void()"><i className="fa fa-cog mr-5"></i>Account Setting</a></li>
              <li><a href="javascript:void()"><i className="fa fa-power-off mr-5"></i>Logout</a></li>
          </ul>
        </li>
        <li className="header nav-small-cap"><i className="mdi mdi-drag-horizontal mr-5"></i>PERSONAL</li>


        <li className="treeview active ">
          <a href="#">
            <i className="mdi mdi-view-dashboard"></i>
            <span>Dashboards</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-right pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li className="active"><a href="index.html"><i className="mdi mdi-toggle-switch-off"></i>Main Dashboard</a></li>
            {/* activity */}
            {/* <li><Link to="/step"><i className="mdi mdi-toggle-switch-off"></i>Steps</Link></li> */}
            {/* <li><a href="javascript:void()" onClick={()=>this.props.onNavigate('biodata')}><i className="mdi mdi-toggle-switch-off"></i>Biodata</a></li> */}
            <li>
              <Link to={`/biodata`} ><i className="mdi mdi-toggle-switch-off"></i>Biodata</Link>
            </li>

            <li>
              <Link to={`/qualification`} ><i className="mdi mdi-toggle-switch-off"></i>Qualification</Link>
            </li>

            <li>
              <Link to={`/experience`} ><i className="mdi mdi-toggle-switch-off"></i>Experience</Link>
            </li>

            <li>
              <Link to={`/activity`} ><i className="mdi mdi-toggle-switch-off"></i>Activity</Link>
            </li>

            <li>
              <Link to={`/researchgrant`} ><i className="mdi mdi-toggle-switch-off"></i>Research Grant</Link>
            </li>

            <li>
              <Link to={`/collaborators`} >
                <i className="mdi mdi-toggle-switch-off"></i>Research Collaborators
              </Link>
            </li>
            

            <li>
              <Link to={`/publication`} ><i className="mdi mdi-toggle-switch-off"></i>Publication</Link>
            </li>


            {/* <li><a href="javascript:void()" onClick={()=>this.props.onNavigate('qualification')}><i className="mdi mdi-toggle-switch-off"></i>Qualification</a></li>
            <li><a href="javascript:void()" onClick={()=>this.props.onNavigate('experience')}><i className="mdi mdi-toggle-switch-off"></i>Experience</a></li>
            <li><a href="javascript:void()" onClick={()=>this.props.onNavigate('activity')}><i className="mdi mdi-toggle-switch-off"></i>Activity</a></li>
            <li><a href="javascript:void()" onClick={()=>this.props.onNavigate('researchgrant')}><i className="mdi mdi-toggle-switch-off"></i>Research Grant</a></li>
            <li><a href="javascript:void()" onClick={()=>this.props.onNavigate('publication')}><i className="mdi mdi-toggle-switch-off"></i>Publication</a></li> */}
            {/* <li><a href="index-3.html"><i className="mdi mdi-toggle-switch-off"></i>Cryptocurrency</a></li>
            <li><a href="index-4.html"><i className="mdi mdi-toggle-switch-off"></i>Analytics</a></li> */}
            
          </ul>
        </li>
        
        {(user.hod == 1 ) ? 
          <li className="treeview active">
            <a href="#">
              <i className="mdi mdi-content-copy"></i>
              <span>Hod Options</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-right pull-right"></i>
              </span>
            </a>
            <ul className="treeview-menu">
              
              <li>
                <Link to={`/hoddepartmentlecturers`} >
                  <i className="mdi mdi-toggle-switch-off"></i>Lecturers
                </Link>
              </li>    

            </ul>
          </li>
          :
          ''
        }

        {(user.dean == 1 ) ? 
          <li className="treeview active">
            <a href="#">
              <i className="mdi mdi-content-copy"></i>
              <span>Dean Options</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-right pull-right"></i>
              </span>
            </a>
            <ul className="treeview-menu">
              
              <li>
                <Link to={`/deanLecturer`} >
                  <i className="mdi mdi-toggle-switch-off"></i> Dean Lecturers
                </Link>
              </li> 
                 
            </ul>
          </li>
          :
          ''
        }

        {(user.admin == 1 ) ? 


        
          <li className="treeview active">
            <a href="#">
              <i className="mdi mdi-content-copy"></i>
              <span>Admin options</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-right pull-right"></i>
              </span>
            </a>
            <ul className="treeview-menu">
              
              <li>
                <Link to={`/adminlecturersetting`} >
                  <i className="mdi mdi-toggle-switch-off"></i> Settings
                </Link>
              </li> 
                 
            </ul>
          </li>
          :
          ''
        }
        

        {/* <li className="treeview">
          <a href="#">
            <i className="mdi mdi-tune-vertical"></i>
            <span>Page Layouts </span>
            <span className="pull-right-container">
              <i className="fa fa-angle-right pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="pages/page_layout_inner_left_sidebar.html"><i className="mdi mdi-toggle-switch-off"></i>Inner Left Sidebar </a></li>
          </ul>
        </li> */}

        {/* <li className="header nav-small-cap"><i className="mdi mdi-drag-horizontal mr-5"></i>UI</li>

        <li className="header nav-small-cap"><i className="mdi mdi-drag-horizontal mr-5"></i>CHARTS</li> */}

      </ul>
    )
  }

  render() {
    // const { redirect } = this.state;
    // if (redirect) {
    //   return <Redirect to='/step' />
    // }
    return (
    <aside className="main-sidebar">
      <section className="sidebar">
        {this.userSideBar()}      
      </section>
    </aside>  
    )
  }
}

export default Sidebar
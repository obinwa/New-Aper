import React, { Component } from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Login from './page/login';
import Dashboard from './page/dashboard';
import Biodata from './page/biodata';
import Qualification from './page/qualification';
import Experience from './page/experience';
import Activity from './page/activities';
import ResearchGrant from './page/researchgrant';
import Publication from './page/publication';
import ResearchCollaborators from './page/researchcollaborators'


// Hod Pages
import AllLecturer from './hodpage/all_lecturer';
import OneLecturer from './hodpage/one_lecturer';
import HodLecturer from './hodpage/hodlecturer';

//deans page
import DeanLecturer from './hodpage/dean_all_lecturer';



// This is admin pages
import Agrade from './adminpage/agrade';
import Astep from './adminpage/astep';
import AdminLecturerSetting from './adminpage/settings'
// import 


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route path='/' component={Login} />
        {/* <Route path='/login' component={Login} /> */}
        {/* <Route path='/steps' component={Astep} /> */}
        <Route path='/biodata' component={Biodata} />
        <Route path='/qualification' component={Qualification} />
        <Route path='/experience' component={Experience} />
        <Route path='/activity' component={Activity} />
        <Route path='/researchgrant' component={ResearchGrant} />
        <Route path='/publication' component={Publication} />
        <Route path='/onelecturer' component={OneLecturer} />
        <Route path='/hoddepartmentlecturers' component={AllLecturer} />
        <Route path='/hodLecturer/:userId' component={HodLecturer} />
        <Route path='/deanLecturer' component={DeanLecturer} />
        <Route path='/collaborators' component={ResearchCollaborators} />
        <Route path='/adminlecturersetting' component={AdminLecturerSetting} />

        
        {/* AllLecturer */}
        
         {/* <Login /> */}
      </div>



    </Router>
      // <div>
      //   {/* <Login /> */}
      //   {/* <Dashboard /> */}
      //   {/* <Biodata /> */}
      //   {/* <Qualification/> */}
      //   {/* <Experience/> */}
      // </div>
    );
  }
}

export default App;

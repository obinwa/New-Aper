import React, { Component } from 'react';
import axios from 'axios';
import URL from '../Url';
import {
    Link,
    Redirect,
   
  } from "react-router-dom";
const pStyle = {
    position: 'absolute', width:'100%',height:'100%', backgroundImage: `url(../images/gallery/full/6.jpg)`
    };
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        email: 'user1@gmail.com',
        password: 'secret',
        redirect: false,
        toUrl:''
        }
        // this.check();
    }

    componentDidMount=() =>{
        // this.getUser()
    }

    getUser = () =>{
        let token = localStorage.getItem('token');
        if(token){
            // lecturer/me
            axios.get(`${URL}/lecturer/me`)
            .then(function (response) {
                if(response.data.user){
                    console.log(response.data.user)
                    // this.setState({ redirect: true });
                    // this.setState({ toUrl:'biodata'})
                }
              console.log(response);
            })
            .catch(function (error) {
                if(error.response.data){
                    localStorage.clear()
                }
              console.log(error);
            });
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { redirect, ...formData } = this.state;
        console.log(formData);
        console.log(URL);

        const options={headers: { 'Content-Type': 'application/json'}};     
        axios.post(`${URL}/lecturer/login`, formData, options)
          .then((response) => {
            if (response.status == 200) {
                console.log(response.data)
              localStorage.setItem('token', response.data.token);
              if(response.data.type == 'lecturer'){
                this.setState({ redirect: true });
                this.setState({ toUrl:'biodata' });
                return;
              }
              if(response.data.type == 'hod'){
                this.setState({ redirect: true });
                this.setState({ toUrl:'biodata' });
                return;
              }
              this.setState({ redirect: true });
              this.setState({ toUrl:'biodata' });
              
            }
          })
          .catch(function (error) {
              if(error.response){
                console.log(error.response);                
              }
          });
    }
      
  render() {
    const { redirect, toUrl } = this.state;
    if (redirect && toUrl) {
      return <Redirect to={toUrl} />
    }
    return (
     <div className="hold-transition bg-img" style={pStyle} data-overlay="4">
        <div className="container h-p100">
            <div className="row align-items-center justify-content-md-center h-p100">           
                <div className="col-12">
                    <div className="row no-gutters justify-content-md-center">
                        <div className="col-lg-4 col-md-5 col-12">
                            <div className="content-top-agile h-p100">
                                <h2>Get started <br/> with Us</h2>
                                <p className="text-white">Sign in to start your session</p>

                                <div className="text-center text-white">
                                <p className="mt-20">- Sign With -</p>
                                <p className="gap-items-2 mb-20">
                                    <a className="btn btn-social-icon btn-outline btn-white" href="#"><i className="fa fa-facebook"></i></a>
                                    <a className="btn btn-social-icon btn-outline btn-white" href="#"><i className="fa fa-twitter"></i></a>
                                    <a className="btn btn-social-icon btn-outline btn-white" href="#"><i className="fa fa-google-plus"></i></a>
                                    <a className="btn btn-social-icon btn-outline btn-white" href="#"><i className="fa fa-instagram"></i></a>
                                    </p>    
                                </div>
                                
                            </div>              
                        </div>
                        <div className="col-lg-5 col-md-5 col-12">
                            <div className="p-40 bg-white content-bottom h-p100">
                                <form onSubmit={this.onSubmit} className="form-element">
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-info border-info"><i className="ti-user"></i></span>
                                            </div>
                                            <input type="text" value={this.state.email}
                                            onChange={event =>this.setState({email: event.target.value,})}
                                             className="form-control pl-15" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-info border-info"><i className="ti-lock"></i></span>
                                            </div>
                                            <input type="password" value={this.state.password}
                                            onChange={event =>this.setState({password: event.target.value,})}
                                            className="form-control pl-15" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                        <div className="checkbox">
                                            <input type="checkbox" id="basic_checkbox_1" />
                                            <label for="basic_checkbox_1">Remember Me</label>
                                        </div>
                                        </div>
                                        
                                        <div className="col-6">
                                        <div className="fog-pwd text-right">
                                            <a href="javascript:void(0)"><i className="ion ion-locked"></i> Forgot pwd?</a><br/>
                                        </div>
                                        </div>
                                    
                                        <div className="col-12 text-center">
                                        <input type="submit" className="btn btn-info btn-block margin-top-10" value="SIGN IN" />
                                        </div>
                                    
                                    </div>
                                </form>     

                                <div className="text-center">
                                    <p className="mt-15 mb-0">Don't have an account? <a href="auth_register.html" className="text-info ml-5">Sign Up</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    );
  }
}

export default Login;

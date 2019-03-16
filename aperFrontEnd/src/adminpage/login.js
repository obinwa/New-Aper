import React, { Component } from 'react';
// import logo from './logo.svg';
// import Header from './components/header';
// import Sidebar from './components/sidebar';
// import Footer from './components/footer';
// import RightSidebar from './components/right-sidebar';
// import './App.css';

const pStyle = {
    position: 'absolute', width:'100%',height:'100%', backgroundImage: `url(../images/gallery/full/6.jpg)`
    };
class Login extends Component {
  render() {
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
                                <form action="../index.html" method="post" className="form-element">
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-info border-info"><i className="ti-user"></i></span>
                                            </div>
                                            <input type="text" className="form-control pl-15" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-info border-info"><i className="ti-lock"></i></span>
                                            </div>
                                            <input type="password" className="form-control pl-15" placeholder="Password" />
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
                                        <button type="submit" className="btn btn-info btn-block margin-top-10">SIGN IN</button>
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

import React from 'react'
import { Routes, useNavigate, Route, Link } from 'react-router-dom';


function Login() {
    const navigate= useNavigate();
  const handleLogin = () =>{
    navigate('/#/profile') 
  }
  return (
    <div>
    <div class="page-ath-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div class="page-ath-content">
            <div class="page-ath-header">
                <a href="/#/" class="page-ath-logo"><img src="assets/images/avatar8.png" srcset="assets/images/avatar9.png 2x" alt="logo" style={{ width: '250px', height: 'auto' }}  /></a>
            </div>
            <div class="page-ath-form">
                <h2 class="page-ath-heading style=">Sign in <small>with your MUDA Account</small></h2>
                <form action="/#/profile">
                    <div class="input-item">
                        <input type="text" placeholder="Your Email" class="input-bordered" />
                    </div>
                    <div class="input-item">
                        <input type="password" placeholder="Password" class="input-bordered" />
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="input-item text-left">
                            <input class="input-checkbox input-checkbox-md" id="remember-me" type="checkbox" />
                            <label for="remember-me">Remember Me</label>
                        </div>
                        <div>
                            <a href="/#/forgotpassword">Forgot password?</a>
                            <div class="gaps-2x"></div>
                        </div>
                    </div>
                    <button class="btn btn-primary btn-block" onClick={handleLogin}>Sign In</button>
                </form>
                {/* <div class="sap-text"><span>Or Sign In With</span></div> */}
                    <div>
                        
                    </div>
                <ul class="row guttar-20px guttar-vr-20px">
                   
                </ul>
                <div class="gaps-2x"></div>
                <div class="gaps-2x"></div>
                <div class="form-note">
                    Don’t have an account? <Link to="/register"> <strong>Sign up here</strong></Link>
                </div>
            </div>
            <div class="page-ath-footer">
                <ul class="footer-links">
                   
                </ul>
            </div>
        </div>
       
    </div>
    </div>
  )
}

export default Login
import React from 'react'
import { Routes, useNavigate, Route, Link } from 'react-router-dom';


function Register() {
    const navigate= useNavigate();
  const handleRegister = () =>{
    navigate('/signupsuccess') 
  }
  return (
    <div>
   <div class="page-ath-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div class="page-ath-content">
            <div class="page-ath-header">
                <a href="/#/register" class="page-ath-logo"><img src="assets/images/logo.png" srcset="assets/images/logo2x.png 2x" alt="logo" /></a>
            </div>
            <div class="page-ath-form">
                <h2 class="page-ath-heading">Sign up <small>Create New MUDA-KYC Account</small></h2>
                <form action="#">
                    <div class="input-item">
                        <input type="text" placeholder="Your Name" class="input-bordered" />
                    </div>
                    <div class="input-item">
                        <input type="text" placeholder="Your Email" class="input-bordered" />
                    </div>
                    <div class="input-item">
                        <input type="password" placeholder="Password" class="input-bordered" />
                    </div>
                    <div class="input-item">
                        <input type="password" placeholder="Repeat Password" class="input-bordered" />
                    </div>
                    <div class="input-item text-left">
                        <input class="input-checkbox input-checkbox-md" id="term-condition" type="checkbox" />
                        <label for="term-condition">I agree to MUDA KYC’s <a href="/#/policy">Privacy Policy</a> &amp;</label>
                    </div>
                    <button class="btn btn-primary btn-block" onClick={handleRegister}>Create Account</button>
                </form>
                <ul class="row guttar-20px guttar-vr-20px">  
                </ul>
                <div class="gaps-2x"></div>
                <div class="gaps-2x"></div>
                <div class="form-note">
                    Already have an account ? <Link to="/"> <strong>Sign in instead</strong></Link>
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

export default Register
import React from 'react'
import { Routes, useNavigate, Route } from 'react-router-dom';


function Login() {
    const navigate= useNavigate();
  const handleLogin = () =>{
    navigate('/profile') 
  }
  return (
    <div>
    <div class="page-ath-wrap">
        <div class="page-ath-content">
            <div class="page-ath-header">
                <a href="sign-in.html" class="page-ath-logo"><img src="assets/images/logo.png" srcset="images/logo2x.png 2x" alt="logo" /></a>
            </div>
            <div class="page-ath-form">
                <h2 class="page-ath-heading">Sign in <small>with your MUDA Account</small></h2>
                <form action="profile.html">
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
                            <a href="forgot.html">Forgot password?</a>
                            <div class="gaps-2x"></div>
                        </div>
                    </div>
                    <button class="btn btn-primary btn-block" onClick={handleLogin}>Sign In</button>
                </form>
                <div class="sap-text"><span>Or Sign In With</span></div>

                <ul class="row guttar-20px guttar-vr-20px">
                    <li class="col"><a href="#" class="btn btn-outline btn-dark btn-facebook btn-block"><em class="fab fa-facebook-f"></em><span>Facebook</span></a></li>
                    <li class="col"><a href="#" class="btn btn-outline btn-dark btn-google btn-block"><em class="fab fa-google"></em><span>Google</span></a></li>
                </ul>
                <div class="gaps-2x"></div>
                <div class="gaps-2x"></div>
                <div class="form-note">
                    Don’t have an account? <a href="sign-up.html"> <strong>Sign up here</strong></a>
                </div>
            </div>
            <div class="page-ath-footer">
                <ul class="footer-links">
                    <li><a href="regular-page.html">Privacy Policy</a></li>
                    <li><a href="regular-page.html">Terms</a></li>
                    <li>&copy; MUDA KYC Project.</li>
                </ul>
            </div>
        </div>
        <div class="page-ath-gfx">
           <div class="w-100 d-flex justify-content-center">
               <div class="col-md-8 col-xl-5">
                   <img src="images/ath-gfx.png" alt="image" />
               </div>
           </div>            
        </div>
    </div>
    </div>
  )
}

export default Login
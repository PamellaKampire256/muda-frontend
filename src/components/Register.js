import React from 'react'
import Navbar from "./Navbar";

function Register() {
  return (
    <div>
        <Navbar /> 
   <div class="page-ath-wrap">
        <div class="page-ath-content">
            <div class="page-ath-header">
                <a href="sign-up.html" class="page-ath-logo"><img src="images/logo.png" srcset="images/logo2x.png 2x" alt="logo" /></a>
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
                        <label for="term-condition">I agree to MUDA KYC’s <a href="regular-page.html">Privacy Policy</a> &amp; <a href="regular-page.html"> Terms.</a></label>
                    </div>
                    <button class="btn btn-primary btn-block">Create Account</button>
                </form>
                <div class="sap-text"><span>Or Sign Up With</span></div>

                <ul class="row guttar-20px guttar-vr-20px">
                    <li class="col"><a href="#" class="btn btn-outline btn-dark btn-facebook btn-block"><em class="fab fa-facebook-f"></em><span>Facebook</span></a></li>
                    <li class="col"><a href="#" class="btn btn-outline btn-dark btn-google btn-block"><em class="fab fa-google"></em><span>Google</span></a></li>
                </ul>
                <div class="gaps-2x"></div>
                <div class="gaps-2x"></div>
                <div class="form-note">
                    Already have an account ? <a href="sign-in.html"> <strong>Sign in instead</strong></a>
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

export default Register
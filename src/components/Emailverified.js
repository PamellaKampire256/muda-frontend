import React from 'react'
import Navbar from "./Navbar";

function Emailverified() {
  return (
    <div>
    <Navbar />   
 <div class="page-ath-wrap">
        <div class="page-ath-content">
            <div class="page-ath-header">
                <a href="email-verified.html" class="page-ath-logo"><img src="assests/images/logo.png" srcset="assests/images/logo2x.png 2x" alt="logo" /></a>
            </div>
            <div class="page-ath-text">
                <div class="alert alert-success">Your email is successfully verified.</div>
                <div class="gaps-0-5x"></div>
                <a href="sign-in.html" class="btn btn-primary">Sign in</a>
            </div>
            <div class="page-ath-footer">
                <ul class="footer-links">
                    <li><a href="regular-page.html">Privacy Policy</a></li>
                    <li><a href="regular-page.html">Terms</a></li>
                    <li>&copy; 2019 Project Jaguar.</li>
                </ul>
            </div>
        </div>
        <div class="page-ath-gfx">
           <div class="w-100 d-flex justify-content-center">
               <div class="col-md-8 col-xl-5">
                   <img src="assests/images/ath-gfx.png" alt="image" />
               </div>
           </div>            
        </div>
    </div>
    </div>
  )
}

export default Emailverified
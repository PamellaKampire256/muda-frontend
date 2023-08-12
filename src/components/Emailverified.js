import React from 'react'
import Navbar from "./Navbar";

function Emailverified() {
  return (
    <div>
    <Navbar />   
 <div class="page-ath-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <div class="page-ath-content">
            <div class="page-ath-header">
                <a href="/#/emailverified" class="page-ath-logo"><img src="assets/images/logo.png" srcset="assets/images/logo2x.png 2x" alt="logo" /></a>
            </div>
            <div class="page-ath-text">
                <div class="alert alert-success">Your email is successfully verified.</div>
                <div class="gaps-0-5x"></div>
                <a href="/" class="btn btn-primary">Sign in</a>
            </div>
            <div class="page-ath-footer">
                <ul class="footer-links">
                    <li><a href="/#/policy">Privacy Policy</a></li> 
                    <li>&copy; 2019 Project Jaguar.</li>
                </ul>
            </div>
        </div>
        {/* <div class="page-ath-gfx">
           <div class="w-100 d-flex justify-content-center">
               <div class="col-md-8 col-xl-5">
                   <img src="assets/images/ath-gfx.png" alt="image" />
               </div>
           </div>            
        </div> */}
    </div>
    </div>
  )
}

export default Emailverified
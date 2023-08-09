import React from 'react'
import Navbar from "./Navbar";

function Forgotpassword() {
  return (
    <div>
     <Navbar />    
 <div class="page-ath-wrap">
        <div class="page-ath-content">
            <div class="page-ath-header">
                <a href="forgot.html" class="page-ath-logo"><img src="assets/images/logo.png" srcset="images/logo2x.png 2x" alt="logo" /></a>
            </div>
            <div class="page-ath-form">
                <h2 class="page-ath-heading">Reset password <span>If you forgot your password, well, then we’ll email you instructions to reset your password.</span></h2>
                <form action="#">
                    <div class="input-item">
                        <input type="text" placeholder="Your Email" class="input-bordered" />
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <button class="btn btn-primary btn-block">Send Reset Link</button>
                        </div>
                        <div>
                            <a href="sign-in.html">Return to login</a>
                        </div>
                    </div>
                    <div class="gaps-2x"></div>
                </form>
            </div>
            <div class="page-ath-footer">
                <ul class="footer-links">
                    <li><a href="regular-page.html">Privacy Policy</a></li>
                    <li><a href="regular-page.html">Terms</a></li>
                    <li>&copy; MUDA Project.</li>
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

export default Forgotpassword
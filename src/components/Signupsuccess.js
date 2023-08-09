import React from 'react'
import Navbar from "./Navbar";

function Signupsuccess() {
  return (
    <div>
      <Navbar />   
<div class="page-ath-wrap">
        <div class="page-ath-content">
            <div class="page-ath-header">
                <a href="signup-success.html" class="page-ath-logo"><img src="images/logo.png" srcset="images/logo2x.png 2x" alt="logo" /></a>
            </div>
            <div class="page-ath-text">
                <h2 class="page-ath-heading">Thank you! <small>Your singup process is alomost done.</small> <span class="text-success">Please check your mail and verify.</span></h2>
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

export default Signupsuccess
import React from 'react'
import Navbar from './Navbar'
import { Routes, useNavigate, Route, Link } from 'react-router-dom';


function Signupsuccess() {
  return (
    <div>
        <Navbar />
<div class="page-ath-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div class="page-ath-content">
            <div class="page-ath-header">
                <a href="/#/signupsuccess" class="page-ath-logo"><img src="assets/images/logo.png" srcset="assets/images/logo2x.png 2x" alt="logo" /></a>
            </div>
            <div class="page-ath-text">
                <h2 class="page-ath-heading">Thank you! <small>Your singup process is alomost done.</small> <span class="text-success">Please go to our next step and fill your personal details.</span></h2><Link to="/profile"><strong style={{ textDecoration: 'underline', fontSize: '1.4em' }}>Here</strong></Link>
            </div>
            <div class="page-ath-footer">
               
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

export default Signupsuccess
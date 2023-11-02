import React from 'react'
import Navbar from './Navbar'
import { Routes, useNavigate, Route, Link } from 'react-router-dom';


function Signupsuccess() {
  return (
    <div>
        <Navbar />
<div class="page-ath-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
        <div class="page-ath-content">
            <div class="page-ath-header">
                <a href="/#/signupsuccess" class="page-ath-logo"><img src="assets/images/avatar8.png" srcset="assets/images/avatar9.png 2x" alt="logo" style={{ width: '250px', height: 'auto' }} /></a>
            </div>
            <div class="page-ath-text">
                <h2 class="page-ath-heading">Thank you! <small>Your singup process is alomost done.</small> <span class="text-success">Please go to the next step and fill in your personal details.</span></h2><Link to="/profile"><strong style={{ textDecoration: 'underline', fontSize: '1.4em' }}>Here</strong></Link>
            </div>
            <div class="page-ath-footer">
               
            </div>
        </div>  
    </div>
    </div>
  )
}

export default Signupsuccess
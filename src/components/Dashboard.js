import React from 'react'
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <div>
     <Navbar /> 
    <div class="topbar-wrap">
    <div class="topbar is-sticky">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <ul class="topbar-nav d-lg-none">
                    <li class="topbar-nav-item relative">
                        <a class="toggle-nav" href="#">
                            <div class="toggle-icon">
                                <span class="toggle-line"></span>
                                <span class="toggle-line"></span>
                                <span class="toggle-line"></span>
                                <span class="toggle-line"></span>
                            </div>
                        </a>
                    </li>
                </ul>
                <a class="topbar-logo" href="index.html">
                   <img src="assets/images/logo-light2x.png" srcset="assets/images/logo-light2x.png 2x" alt="logo" />
                </a>
                <ul class="topbar-nav">
                    <li class="topbar-nav-item relative">
                        <span class="user-welcome d-none d-lg-inline-block">Welcome New User!</span>
                        <a class="toggle-tigger user-thumb" href="#"><em class="ti ti-user"></em></a>
                        <div class="toggle-class dropdown-content dropdown-content-right dropdown-arrow-right user-dropdown">
                            <ul class="user-links">
                                <li><a href="profile.html"><i class="ti ti-id-badge"></i>My Profile</a></li>
                                <li><a href="#"><i class="ti ti-infinite"></i>Referral</a></li>
                                <li><a href="#"><i class="ti ti-eye"></i>Activity</a></li>
                            </ul>
                            <ul class="user-links bg-light">
                                <li><a href="sign-in.html"><i class="ti ti-power-off"></i>Logout</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="navbar">
        <div class="container">
            <div class="navbar-innr">
                <ul class="navbar-menu">
                    <li><a href="profile.html"><em class="ikon ikon-user"></em> Profile</a></li>
                    <li class="has-dropdown page-links-all"><a class="drop-toggle" href="#"><em class="ikon ikon-exchange"></em> Pages</a>
                        <ul class="navbar-dropdown">
                            <li class="has-dropdown"><a class="drop-toggle" href="#">Misc Pages</a>
                                <ul class="navbar-dropdown">
                                    <li><a href="404-error.html">404 Error</a></li>
                                    <li><a href="sign-in.html">Sign In / Login</a></li>
                                    <li><a href="sign-up.html">Sign Up / Registration</a></li>
                                    <li><a href="signup-success.html">Signup Success</a></li>
                                    <li><a href="email-verified.html">Email Verified</a></li>
                                    <li><a href="forgot.html">Forgot Password</a></li>
                                    <li><a href="faq-page.html">Faq Page</a></li>
                                    <li><a href="regular-page.html">Regular Page - v1</a></li>
                                    <li><a href="regular-page-v2.html">Regular Page - v2</a></li>
                                    <li><a href="thank-you.html">Thank You <span class="badge badge-warning">New</span></a></li>
                                    <li><a href="_blank.html">Blank Page</a></li>
                                </ul>
                            </li>
                            <li class="has-dropdown"><a class="drop-toggle" href="#">KYC / AML</a>
                                <ul class="navbar-dropdown">
                                    <li><a href="kyc-application.html">KYC Default</a></li>
                                    <li><a href="kyc-form.html">KYC Form</a></li>
                                    <li><a href="kyc-thank-you.html">KYC Thank You</a></li>
                                    <li><a href="kyc-list.html">KYC Lists - Admin</a></li>
                                    <li><a href="kyc-details.html">KYC Details - Admin</a></li>
                                </ul>
                            </li>
                            <li class="has-dropdown"><a class="drop-toggle" href="#">User Pages</a>
                                <ul class="navbar-dropdown">
                                    <li><a href="profile.html">Profile Page</a></li>
                                    <li><a href="user-list.html">User List - Admin</a></li>
                                    <li><a href="user-details.html">User Details - Admin</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="navbar-btns">
                    <li><a href="kyc-application.html" class="btn btn-sm btn-outline btn-light"><em class="text-primary ti ti-files"></em><span>KYC Application</span></a></li>
                    <li class="d-none"><span class="badge badge-outline badge-success badge-lg"><em class="text-success ti ti-files mgr-1x"></em><span class="text-success">KYC Approved</span></span></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="page-content">
    <div class="container">
        <div class="row">
           
            
            <div class="col-xl-8 col-lg-7">
                <div class="token-transaction card card-full-height">
                    <div class="card-innr">
                        <div class="card-head has-aside">
                            <h4 class="card-title"></h4>
                            <div class="card-opt">
                                <a href="transactions.html" class="link ucap"><em class="fas fa-angle-right ml-2"></em></a>
                            </div>
                        </div>
                        <table class="table tnx-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th class="d-none d-sm-table-cell tnx-date"></th>
                                    <th class="tnx-type"><div class="tnx-type-text"></div></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        
                                    </td>
                                    <td>
                                      
                                    </td>
                                   
                                    <td class="tnx-type">
                                       
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            
                                            
                                        </div>
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td class="d-none d-sm-table-cell tnx-date">
                                        
                                    </td>
                                    <td class="tnx-type">
                                       
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td class="d-none d-sm-table-cell tnx-date">
                                       
                                    </td>
                                    <td class="tnx-type">
                                       
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-5">
                <div class="token-calculator card card-full-height">
                    <div class="card-innr">
                        <div class="card-head">
                           
                        </div>
                        <div class="token-calc">
                            <div class="token-pay-amount">
                                <input id="token-base-amount" class="input-bordered input-with-hint" type="text" value="1" />
                               
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-8 col-lg-7">
                <div class="token-sale-graph card card-full-height">
                   
                </div>
            </div>
            <div class="col-xl-4 col-lg-5">
                <div class="token-sales card card-full-height">
                    <div class="card-innr">
                       
                       
                        <div class="progress-bar">
                            
                            
                           
                        </div>
                        
                        
                        <div class="countdown-clock" data-date="2019/02/05"><div><span class="countdown-time countdown-time-first"></span><span class="countdown-text"></span></div><div><span class="countdown-time"></span><span class="countdown-text"></span></div><div><span class="countdown-time"></span><span class="countdown-text"></span></div><div><span class="countdown-time countdown-time-last"></span><span class="countdown-text"></span></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="footer-bar">
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-md-8">
                <ul class="footer-links">
                    <li><a href="faq-page.html">FAQs</a></li>
                    <li><a href="regular-page.html">Privacy Policy</a></li>
                    <li><a href="regular-page.html">Terms of Condition</a></li>
                </ul>
            </div>
            <div class="col-md-4 mt-2 mt-sm-0">
                <div class="d-flex justify-content-between justify-content-md-end align-items-center guttar-25px pdt-0-5x pdb-0-5x">
                    <div class="copyright-text">&copy; 2018 EduToken.</div>
                    <div class="lang-switch relative">
                        <a href="#" class="lang-switch-btn toggle-tigger">En <em class="ti ti-angle-up"></em></a>
                        <div class="toggle-class dropdown-content dropdown-content-up">
                            <ul class="lang-list">
                                <li><a href="#">Fr</a></li>
                                <li><a href="#">Bn</a></li>
                                <li><a href="#">Lt</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Dashboard
import React from 'react'
import { Routes, useNavigate, Route, Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
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
                    <ul class="topbar-nav">
                        <li class="topbar-nav-item relative">
                            <span class="user-welcome d-none d-lg-inline-block">Welcome! New User</span>
                            <a class="toggle-tigger user-thumb" href="#"><em class="ti ti-user"></em></a>
                            <div class="toggle-class dropdown-content dropdown-content-right dropdown-arrow-right user-dropdown">
                                <div>

                                 <div>
                                    
                                    </div>   

                                </div>
                                <ul class="user-links">
                                    <li><a href="/#/profile"><i class="ti ti-id-badge"></i>My Profile</a></li>
                                </ul>
                                <ul class="user-links bg-light">
                                    <li><a href="/"><i class="ti ti-power-off"></i>Logout</a></li>
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
                        <li><a href="/#/profile"><em class="ikon ikon-user"></em> Profile</a></li>
                        <li class="has-dropdown page-links-all"><Link class="drop-toggle" href="#"><em class="ikon ikon-exchange"></em> Pages</Link>
                            <ul class="navbar-dropdown">
                               
                                <li class="has-dropdown"><Link class="drop-toggle" href="#">KYC Panel</Link>
                                    <ul class="navbar-dropdown">
                                        {/* <li><a href="/#/kycapplication">KYC Default</a></li>
                                        <li><a href="/#/kycform">KYC Form</a></li>
                                        <li><a href="/#/thankyou">KYC Thank You</a></li> */}
                                        <li><a href="/#/kyclist">KYC Lists - Admin</a></li>
                                        <li><a href="/#/kycdetails">KYC Details - Admin</a></li>
                                    </ul>
                                </li>
                                <li class="has-dropdown"><Link class="drop-toggle" href="#">User Pages</Link>
                                    <ul class="navbar-dropdown">
                                        {/* <li><a href="/#/profile">Profile Page</a></li> */}
                                        <li><a href="/#/userlist">User List - Admin</a></li>
                                        <li><a href="/#/userdetails">User Details - Admin</a></li>
                                    </ul>
                                </li>
                                <li class="has-dropdown"><Link className="drop-toggle" to="#">Misc Page</Link>
                                    <ul class="navbar-dropdown">
                                        {/* <li><a href="/#/error">404 Error</a></li>
                                        <li><a href="/#">Sign In / Login</a></li>
                                        <li><a href="/#/register">Sign Up / Registration</a></li>
                                        <li><a href="/#/signupsuccess">Signup Success</a></li>
                                        <li><a href="/#/emailverified">Email Verified</a></li>
                                        <li><a href="/#/forgotpassword">Forgot Password</a></li>
                                        <li><a href="/#/faqpage">Faq Page</a></li>
                                        <li><a href="/#/privacy">Privacy Policy</a></li>
                                        <li><a href="regular-page-v2.html">Regular Page - v2</a></li>
                                        <li><a href="/#/thank-you">Thank You <span class="badge badge-warning">New</span></a></li> */}
                                        <li><a href="/"><i class="ti ti-power-off"></i>Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-btns">
                        <li><a href="/#/kycapplication" class="btn btn-sm btn-outline btn-light"><em class="text-primary ti ti-files"></em><span>KYC Application</span></a></li>
                        <li class="d-none"><span class="badge badge-outline badge-success badge-lg"><em class="text-success ti ti-files mgr-1x"></em><span class="text-success">KYC Approved</span></span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar


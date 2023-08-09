import React from 'react'

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
                    <a class="topbar-logo" href="profile.html">
                       <img src="images/logo-light2x.png" srcset="images/logo-light2x.png 2x" alt="logo" />
                    </a>
                    <ul class="topbar-nav">
                        <li class="topbar-nav-item relative">
                            <span class="user-welcome d-none d-lg-inline-block">Welcome New User!</span>
                            <a class="toggle-tigger user-thumb" href="#"><em class="ti ti-user"></em></a>
                            <div class="toggle-class dropdown-content dropdown-content-right dropdown-arrow-right user-dropdown">
                                <ul class="user-links">
                                    <li><a href="profile.html"><i class="ti ti-id-badge"></i>My Profile</a></li>
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
    </div>
  )
}

export default Navbar


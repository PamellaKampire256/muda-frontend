import React from 'react'
import Navbar from './Navbar'

function Faqpage() {
  return (
    <div>
        <Navbar />
    {/* <div class="topbar-wrap">
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
                    <a class="topbar-logo" href="faq-page.html">
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
    </div> */}
    
    <div class="page-content">
        <div class="container">
            <div class="row">
                <div class="main-content col-lg-8">
                    <div class="content-area card">
                        <div class="card-innr">
                            <div class="card-head">
                                <h4 class="card-title card-title-lg">Frequently Question Answers</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercie etation. </p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                            </div>
                            <div class="content">
                                <h4 class="text-secondary">General</h4>
                                <div class="accordion-simple" id="faqList-1">
                                    <div class="accordion-item">
                                        <h6 class="accordion-heading collapsed" data-toggle="collapse" data-target="#collapse-1-1"> What is TokenWiz?  </h6>
                                        <div id="collapse-1-1" class="collapse" data-parent="#faqList-1">
                                            <div class="accordion-content">
                                                <p>TokenWiz - is unique platform; that is secure, smart and easy-to-use platform, and completely disrupting the way businesses raise capital.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h6 class="accordion-heading collapsed" data-toggle="collapse" data-target="#collapse-1-2">What cryptocurrencies can I use to purchase?</h6>
                                        <div id="collapse-1-2" class="collapse" data-parent="#faqList-1">
                                            <div class="accordion-content">
                                                <p>TokenWiz - is unique platform; that is secure, smart and easy-to-use platform, and completely disrupting the way businesses raise capital.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h6 class="accordion-heading collapsed" data-toggle="collapse" data-target="#collapse-1-3">How can I participate in the ICO Token sale?</h6>
                                        <div id="collapse-1-3" class="collapse" data-parent="#faqList-1">
                                            <div class="accordion-content">
                                                <p>TokenWiz - is unique platform; that is secure, smart and easy-to-use platform, and completely disrupting the way businesses raise capital.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h6 class="accordion-heading collapsed" data-toggle="collapse" data-target="#collapse-1-4">How do I benefit from the ICO Token?</h6>
                                        <div id="collapse-1-4" class="collapse" data-parent="#faqList-1">
                                            <div class="accordion-content">
                                                <p>TokenWiz - is unique platform; that is secure, smart and easy-to-use platform, and completely disrupting the way businesses raise capital.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="gaps-2x"></div>
                                <h4 class="text-secondary">KYC Application</h4>
                                <div class="accordion-simple" id="faqList-2">
                                    <div class="accordion-item">
                                        <h6 class="accordion-heading collapsed" data-toggle="collapse" data-target="#collapse-2-1"> Which of us ever undertakes laborious?  </h6>
                                        <div id="collapse-2-1" class="collapse" data-parent="#faqList-2">
                                            <div class="accordion-content">
                                                <p>TokenWiz - is unique platform; that is secure, smart and easy-to-use platform, and completely disrupting the way businesses raise capital.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h6 class="accordion-heading collapsed" data-toggle="collapse" data-target="#collapse-2-2">Who do not know how to pursue rationally?</h6>
                                        <div id="collapse-2-2" class="collapse" data-parent="#faqList-2">
                                            <div class="accordion-content">
                                                <p>TokenWiz - is unique platform; that is secure, smart and easy-to-use platform, and completely disrupting the way businesses raise capital.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h6 class="accordion-heading collapsed" data-toggle="collapse" data-target="#collapse-2-3">Their separate existence is a myth?</h6>
                                        <div id="collapse-2-3" class="collapse" data-parent="#faqList-2">
                                            <div class="accordion-content">
                                                <p>TokenWiz - is unique platform; that is secure, smart and easy-to-use platform, and completely disrupting the way businesses raise capital.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h6 class="accordion-heading collapsed" data-toggle="collapse" data-target="#collapse-2-4">Pityful a rethoric question ran over her cheek?</h6>
                                        <div id="collapse-2-4" class="collapse" data-parent="#faqList-2">
                                            <div class="accordion-content">
                                                <p>TokenWiz - is unique platform; that is secure, smart and easy-to-use platform, and completely disrupting the way businesses raise capital.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="gaps-2x"></div>
                                <h4 class="text-secondary">Contribution</h4>
                                <div class="accordion-simple" id="faqList-3">
                                    <div class="accordion-item">
                                        <h6 class="accordion-heading collapsed" data-toggle="collapse" data-target="#collapse-3-1">When she reached the first hills?</h6>
                                        <div id="collapse-3-1" class="collapse" data-parent="#faqList-3">
                                            <div class="accordion-content">
                                                <p>TokenWiz - is unique platform; that is secure, smart and easy-to-use platform, and completely disrupting the way businesses raise capital.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h6 class="accordion-heading collapsed" data-toggle="collapse" data-target="#collapse-3-2">Which roasted parts of sentences fly into your mouth?</h6>
                                        <div id="collapse-3-2" class="collapse" data-parent="#faqList-3">
                                            <div class="accordion-content">
                                                <p>TokenWiz - is unique platform; that is secure, smart and easy-to-use platform, and completely disrupting the way businesses raise capital.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h6 class="accordion-heading collapsed" data-toggle="collapse" data-target="#collapse-3-3">Vokalia and Consonantia, there live?</h6>
                                        <div id="collapse-3-3" class="collapse" data-parent="#faqList-3">
                                            <div class="accordion-content">
                                                <p>TokenWiz - is unique platform; that is secure, smart and easy-to-use platform, and completely disrupting the way businesses raise capital.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h6 class="accordion-heading collapsed" data-toggle="collapse" data-target="#collapse-3-4">How do I benefit from the ICO Token?</h6>
                                        <div id="collapse-3-4" class="collapse" data-parent="#faqList-3">
                                            <div class="accordion-content">
                                                <p>TokenWiz - is unique platform; that is secure, smart and easy-to-use platform, and completely disrupting the way businesses raise capital.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                        <li><a href="/#/faqpage">FAQs</a></li>
                        <li><a href="/#/policy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="col-md-4 mt-2 mt-sm-0">
                    <div class="d-flex justify-content-between justify-content-md-end align-items-center guttar-25px pdt-0-5x pdb-0-5x">
                        <div class="copyright-text">&copy; 2019 Project Jaguar.</div>
                        <div class="lang-switch relative">
                            {/* <a href="#" class="lang-switch-btn toggle-tigger">En <em class="ti ti-angle-up"></em></a>
                            <div class="toggle-class dropdown-content dropdown-content-up">
                                <ul class="lang-list">
                                    <li><a href="#">Fr</a></li>
                                    <li><a href="#">Bn</a></li>
                                    <li><a href="#">Lt</a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Faqpage
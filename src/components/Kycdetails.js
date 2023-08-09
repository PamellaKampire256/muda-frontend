import React from 'react'

function Kycdetails() {
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
                    <a class="topbar-logo" href="kyc-details.html">
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
    
    <div class="page-content">
        <div class="container">
            <div class="card content-area">
                <div class="card-innr">
                    <div class="card-head d-flex justify-content-between align-items-center">
                        <h4 class="card-title mb-0">KYC Details</h4>
                        <div class="d-flex align-items-center guttar-20px">
                            <div class="flex-col d-sm-block d-none">
                                <a href="kyc-list.html" class="btn btn-sm btn-auto btn-primary"><em class="fas fa-arrow-left mr-3"></em>Back</a>
                            </div>
                            <div class="flex-col d-sm-none">
                                <a href="kyc-list.html" class="btn btn-icon btn-sm btn-primary"><em class="fas fa-arrow-left"></em></a>
                            </div>
                            <div class="relative d-inline-block">
                                <a href="#" class="btn btn-dark btn-sm btn-icon toggle-tigger"><em class="ti ti-more-alt"></em></a>
                                <div class="toggle-class dropdown-content dropdown-content-top-left">
                                    <ul class="dropdown-list">
                                        <li><a href="#"><em class="ti ti-check"></em> Approve</a></li>
                                        <li><a href="#"><em class="ti ti-na"></em> Cancel</a></li>
                                        <li><a href="#"><em class="ti ti-trash"></em> Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="gaps-1-5x"></div>
                    <div class="data-details d-md-flex flex-wrap align-items-center justify-content-between">
                        <div class="fake-class">
                            <span class="data-details-title">Submited By</span>
                            <span class="data-details-info">UD102001</span>
                        </div>
                        <div class="fake-class">
                            <span class="data-details-title">Submited On</span>
                            <span class="data-details-info">2018-08-24 10:12PM</span>
                        </div>
                        <div class="fake-class">
                            <span class="data-details-title">Checked By</span>
                            <span class="data-details-info">Admin</span>
                        </div>
                        <div class="fake-class">
                            <span class="data-details-title">Checked On</span>
                            <span class="data-details-info">2018-08-24 10:12PM</span>
                        </div>
                        <div class="fake-class">
                            <span class="badge badge-md badge-block badge-success ucap">Approved</span>
                        </div>
                        <div class="gaps-2x w-100 d-none d-md-block"></div>
                        <div class="w-100">
                            <span class="data-details-title">Admin Note</span>
                            <span class="data-details-info">Verified by phone call</span>
                        </div>
                    </div>
                    <div class="gaps-3x"></div>
                    <h6 class="card-sub-title">Personal Information</h6>
                    <ul class="data-details-list">
                        <li>
                            <div class="data-details-head">First Name</div>
                            <div class="data-details-des"></div>
                        </li>
                        <li>
                            <div class="data-details-head">Last Name</div>
                            <div class="data-details-des"></div>
                        </li>
                        <li>
                            <div class="data-details-head">Email Address</div>
                            <div class="data-details-des"></div>
                        </li>
                        <li>
                            <div class="data-details-head">Phone Number</div>
                            <div class="data-details-des"></div>
                        </li>
                        <li>
                            <div class="data-details-head">Date of Birth</div>
                            <div class="data-details-des"></div>
                        </li>
                        <li>
                            <div class="data-details-head">Full Address</div>
                            <div class="data-details-des"></div>
                        </li>
                        <li>
                            <div class="data-details-head">Country of Residence</div>
                            <div class="data-details-des"></div>
                        </li>
                        <li>
                            <div class="data-details-head">Telegram Username</div>
                            <div class="data-details-des"><span><em class="far fa-paper-plane"></em></span></div>
                        </li>
                    </ul>
                    <div class="gaps-3x"></div>
                    <h6 class="card-sub-title">Uploaded Documnets</h6>
                    <ul class="data-details-list">
                        <li>
                            <div class="data-details-head">National ID Card</div>
                            <ul class="data-details-docs">
                                <li>
                                    <span class="data-details-docs-title">Front Side</span>
                                    <div class="data-doc-item data-doc-item-lg">
                                        <div class="data-doc-image">
                                            <img src="images/passport-a-fornt.jpg" alt="passport" />
                                        </div>
                                        <ul class="data-doc-actions">
                                            <li><a href="#"><em class="ti ti-import"></em></a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <span class="data-details-docs-title">Back Side</span>
                                    <div class="data-doc-item data-doc-item-lg">
                                        <div class="data-doc-image">
                                            <img src="images/passport-a-back.jpg" alt="passport" />
                                        </div>
                                        <ul class="data-doc-actions">
                                            <li><a href="#"><em class="ti ti-import"></em></a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
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
                        <div class="copyright-text">&copy; MUDA KYC Project</div>
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

export default Kycdetails
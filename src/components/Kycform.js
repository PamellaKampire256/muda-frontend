    import React from 'react'

    function Kycform() {
    return (
            <>
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
                    <a class="topbar-logo" href="kyc-form.html">
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
                                </ul>
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
    
    <div class="page-header page-header-kyc">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-xl-7 text-center">
                    <h2 class="page-title">Begin your ID-Verification</h2>
                    <p class="large">Verify your identity to participate in MUDA KYC sale.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="page-content">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10 col-xl-9">
                    <div class="kyc-form-steps card mx-lg-4">
                        <div class="form-step form-step1">
                            <div class="form-step-head card-innr">
                                <div class="step-head">
                                    <div class="step-number">01</div>
                                    <div class="step-head-text">
                                        <h4>Personal Details</h4>
                                        <p>Your simple personal information required for identification</p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-step-fields card-innr">
                                <div class="note note-plane note-light-alt note-md pdb-1x">
                                    <em class="fas fa-info-circle"></em>
                                    <p>Please type carefully and fill out the form with your personal details. Your can’t edit these details once you submitted the form.</p>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="input-item input-with-label">
                                            <label class="input-item-label">First Name <span class="text-danger">*</span></label>
                                            <input class="input-bordered" type="text" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-item input-with-label">
                                            <label class="input-item-label">Last Name <span class="text-danger">*</span></label>
                                            <input class="input-bordered" type="text" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-item input-with-label">
                                            <label class="input-item-label">Email Address <span class="text-danger">*</span></label>
                                            <input class="input-bordered" type="text" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-item input-with-label">
                                            <label class="input-item-label">Phone Number <span class="text-danger">*</span></label>
                                            <input class="input-bordered" type="text" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-item input-with-label">
                                            <label class="input-item-label">Date of Birth <span class="text-danger">*</span></label>
                                            <input class="input-bordered date-picker" type="text" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-item input-with-label">
                                            <label class="input-item-label">Telegram Username</label>
                                            <input class="input-bordered" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <h4 class="text-secondary mgt-0-5x">Your Address</h4>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="input-item input-with-label">
                                            <label class="input-item-label">Address Line 1 <span class="text-danger">*</span></label>
                                            <input class="input-bordered" type="text" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-item input-with-label">
                                            <label class="input-item-label">Address Line 2</label>
                                            <input class="input-bordered" type="text" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-item input-with-label">
                                            <label class="input-item-label">City <span class="text-danger">*</span></label>
                                            <input class="input-bordered" type="text" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-item input-with-label">
                                            <label class="input-item-label">State <span class="text-danger">*</span></label>
                                            <input class="input-bordered" type="text" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-item input-with-label">
                                            <label for="nationality" class="input-item-label">Nationality <span class="text-danger">*</span></label>
                                            <select class="select-bordered select-block" name="nationality" id="nationality">
                                                <option value="us">United State</option>
                                                <option value="uk">United KingDom</option>
                                                <option value="fr">France</option>
                                                <option value="ch">China</option>
                                                <option value="cr">Czech Republic</option>
                                                <option value="cb">Colombia</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-item input-with-label">
                                            <label class="input-item-label">Zip Code <span class="text-danger">*</span></label>
                                            <input class="input-bordered" type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-step form-step2">
                            <div class="form-step-head card-innr">
                                <div class="step-head">
                                    <div class="step-number">02</div>
                                    <div class="step-head-text">
                                        <h4>Document Upload</h4>
                                        <p>To verify your identity, please upload any of your document</p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-step-fields card-innr">
                                <div class="note note-plane note-light-alt note-md pdb-0-5x">
                                    <em class="fas fa-info-circle"></em>
                                    <p>In order to complete, please upload any of the following personal document.</p>
                                </div>
                                <div class="gaps-2x"></div>
                                <ul class="nav nav-tabs nav-tabs-bordered row flex-wrap guttar-20px" role="tablist">
                                    <li class="nav-item flex-grow-0">
                                        <a class="nav-link d-flex align-items-center active" data-toggle="tab" href="#passport">
                                            <div class="nav-tabs-icon">
                                                <img src="images/icon-passport.png" alt="icon" />
                                                <img src="images/icon-passport-color.png" alt="icon" />
                                            </div>
                                            <span>Passport</span>
                                        </a>
                                    </li>
                                    </ul>
                                    <li class="nav-item flex-grow-0">
                                        <a class="nav-link d-flex align-items-center" data-toggle="tab" href="#national-card">
                                            <div class="nav-tabs-icon">
                                                <img src="images/icon-national-id.png" alt="icon" />
                                                <img src="images/icon-national-id-color.png" alt="icon" />
                                            </div>
                                            <span>National Card</span>
                                        </a>
                                    </li>
                                    <li class="nav-item flex-grow-0">
                                        <a class="nav-link d-flex align-items-center" data-toggle="tab" href="#driver-licence">
                                            <div class="nav-tabs-icon">
                                                <img src="images/icon-licence.png" alt="icon" />
                                                <img src="images/icon-licence-color.png" alt="icon" />
                                            </div>
                                            <span>Driver’s License</span>
                                        </a>
                                    </li>
                                </div>
                                
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="passport">
                                        <h5 class="text-secondary font-bold">To avoid delays when verifying account, Please make sure bellow:</h5>
                                        <ul class="list-check">
                                            <li>Chosen credential must not be expaired.</li>
                                            <li>Document should be good condition and clearly visible.</li>
                                            <li>Make sure that there is no light glare on the card.</li>
                                        </ul>
                                        <div class="gaps-2x"></div>
                                        <h5 class="font-mid">Upload Here Your Passport Copy</h5>
                                        <div class="row align-items-center">
                                            <div class="col-sm-8">
                                                <div class="upload-box">
                                                    <div class="upload-zone">
                                                        <div class="dz-message" data-dz-message="">
                                                            <span class="dz-message-text">Drag and drop file</span>
                                                            <span class="dz-message-or">or</span>
                                                            <button class="btn btn-primary">SELECT</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 d-none d-sm-block">
                                                <div class="mx-md-4">
                                                    <img src="images/vector-passport.png" alt="vector" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="national-card">
                                        <h5 class="text-secondary font-bold">To avoid delays when verifying account, Please make sure bellow:</h5>
                                        <ul class="list-check">
                                            <li>Chosen credential must not be expaired.</li>
                                            <li>Document should be good condition and clearly visible.</li>
                                            <li>Make sure that there is no light glare on the card.</li>
                                        </ul>
                                        <div class="gaps-2x"></div>
                                        <h5 class="font-mid">Upload Here Your National id Front Side</h5>
                                        <div class="row align-items-center">
                                            <div class="col-sm-8">
                                                <div class="upload-box">
                                                    <div class="upload-zone">
                                                        <div class="dz-message" data-dz-message="">
                                                            <span class="dz-message-text">Drag and drop file</span>
                                                            <span class="dz-message-or">or</span>
                                                            <button class="btn btn-primary">SELECT</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 d-none d-sm-block">
                                                <div class="mx-md-4">
                                                    <img src="images/vector-id-front.png" alt="vector" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gaps-3x"></div>
                                        <h5 class="font-mid">Upload Here Your National id Back Side</h5>
                                        <div class="row align-items-center">
                                            <div class="col-sm-8">
                                                <div class="upload-box">
                                                    <div class="upload-zone">
                                                        <div class="dz-message" data-dz-message="">
                                                            <span class="dz-message-text">Drag and drop file</span>
                                                            <span class="dz-message-or">or</span>
                                                            <button class="btn btn-primary">SELECT</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 d-none d-sm-block">
                                                <div class="mx-md-4">
                                                    <img src="images/vector-id-back.png" alt="vector" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="driver-licence">
                                        <h5 class="text-secondary font-bold">To avoid delays when verifying account, Please make sure bellow:</h5>
                                        <ul class="list-check">
                                            <li>Chosen credential must not be expaired.</li>
                                            <li>Document should be good condition and clearly visible.</li>
                                            <li>Make sure that there is no light glare on the card.</li>
                                        </ul>
                                        <div class="gaps-2x"></div>
                                        <h5 class="font-mid">Upload Here Your Driving Licence Copy</h5>
                                        <div class="row align-items-center">
                                            <div class="col-sm-8">
                                                <div class="upload-box">
                                                    <div class="upload-zone">
                                                        <div class="dz-message" data-dz-message="">
                                                            <span class="dz-message-text">Drag and drop file</span>
                                                            <span class="dz-message-or">or</span>
                                                            <button class="btn btn-primary">SELECT</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 d-none d-sm-block">
                                                <div class="mx-md-4">
                                                    <img src="images/vector-licence.png" alt="vector" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-step form-step3">
                            <div class="form-step-head card-innr">
                                <div class="step-head">
                                    <div class="step-number">03</div>
                                    <div class="step-head-text">
                                        <h4>Your Paying Wallet</h4>
                                        <p>Submit your wallet address that you are going to send funds</p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-step-fields card-innr">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="input-item input-with-label">
                                            <label for="swalllet" class="input-item-label">Select Wallet </label>
                                            <select class="select-bordered select-block" name="swalllet" id="swalllet">
                                                <option value="eth">Ethereum</option>
                                                <option value="dac">DashCoin</option>
                                                <option value="bic">BitCoin</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-item input-with-label">
                                    <label for="token-address" class="input-item-label">Your Address for tokens:</label>
                                    <input class="input-bordered" type="text" id="token-address" name="token-address" value="0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae" />
                                    <span class="input-note">Note: Address should be ERC20-compliant.</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-step form-step-final">
                            <div class="form-step-fields card-innr">
                                <div class="input-item">
                                    <input class="input-checkbox input-checkbox-md" id="term-condition" type="checkbox" />
                                    <label for="term-condition">I have read the <a href="#">Terms of Condition</a> and <a href="#">Privary Policy.</a></label>
                                </div>
                                <div class="input-item">
                                    <input class="input-checkbox input-checkbox-md" id="info-currect" type="checkbox" />
                                    <label for="info-currect">All the personal information I have entered is correct.</label>
                                </div>
                                <div class="gaps-1x"></div>
                                <a href="kyc-thank-you.html" class="btn btn-primary">Process for Verify</a>
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
                        <li><a href="http://businessplan.pjaguar.com">Whitepaper</a></li>
                        <li><a href="faq-page.html">FAQs</a></li>
                        <li><a href="regular-page.html">Privacy Policy</a></li>
                        <li><a href="regular-page.html">Terms of Condition</a></li>
                    </ul>
                </div>
                <div class="col-md-4 mt-2 mt-sm-0">
                    <div class="d-flex justify-content-between justify-content-md-end align-items-center guttar-25px pdt-0-5x pdb-0-5x">
                        <div class="copyright-text">&copy; 2019 Project Jaguar.</div>
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
 </>
      
    )
    }


export default Kycform
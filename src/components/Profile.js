import React from 'react'
import { Routes, useNavigate, Route } from 'react-router-dom';
import Navbar from './Navbar';

function Profile() {
       const navigate =useNavigate();
       const handleProfile = () =>{
        navigate('/kycform')
       }
  return (
    <div>
        <Navbar />
    <div class="page-content">
        <div class="container">
            <div class="row">
                <div class="main-content col-lg-8">
                    <div class="content-area card">
                        <div class="card-innr">
                            <div class="card-head">
                                <h4 class="card-title">Profile Details</h4>
                            </div>
                            <ul class="nav nav-tabs nav-tabs-line" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#personal-data">Personal Data</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#settings">Settings</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#password">Password</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="profile-details">
                                <div class="tab-pane fade show active" id="personal-data">
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="full-name" class="input-item-label">Full Name</label>
                                                    <input class="input-bordered" type="text" id="full-name" name="full-name" value="Stefan Harary" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="email-address" class="input-item-label">Email Address</label>
                                                    <input class="input-bordered" type="text" id="email-address" name="email-address" value="info@softnio.com" disabled="" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="mobile-number" class="input-item-label">Mobile Number</label>
                                                    <input class="input-bordered" type="text" id="mobile-number" name="mobile-number" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="date-of-birth" class="input-item-label">Date of Birth</label>
                                                    <input class="input-bordered date-picker-dob" type="text" id="date-of-birth" name="date-of-birth" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="nationality" class="input-item-label">Nationality</label>
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
                                        </div>
                                        <div class="gaps-1x"></div>
                                        <div class="d-sm-flex justify-content-between align-items-center">
                                            <button class="btn btn-primary" onClick={handleProfile}>Update Profile</button>
                                            <div class="gaps-2x d-sm-none"></div>
                                            <span class="text-success"><em class="ti ti-check-box"></em> All Changes are saved</span>
                                        </div>
                                    </form>
                                </div>
                                <div class="tab-pane fade" id="settings">
                                    <div class="pdb-1-5x">
                                        <h5 class="card-title card-title-sm text-dark">Security Settings</h5>    
                                    </div>
                                    <div class="input-item">
                                        <input type="checkbox" class="input-switch input-switch-sm" id="save-log" checked="" />
                                        <label for="save-log">Save my Activities Log</label>
                                    </div>
                                    <div class="input-item">
                                        <input type="checkbox" class="input-switch input-switch-sm" id="pass-change-confirm" />
                                        <label for="pass-change-confirm">Confirm me through email before password change</label>
                                    </div>
                                    <div class="pdb-1-5x">
                                        <h5 class="card-title card-title-sm text-dark">Manage Notification</h5>    
                                    </div>
                                    <div class="input-item">
                                        <input type="checkbox" class="input-switch input-switch-sm" id="latest-news" checked="" />
                                        <label for="latest-news">Notify me by email about sales and latest news</label>
                                    </div>
                                    <div class="input-item">
                                        <input type="checkbox" class="input-switch input-switch-sm" id="activity-alert" checked="" />
                                        <label for="activity-alert">Alert me by email for unusual activity.</label>
                                    </div>
                                    <div class="gaps-1x"></div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span></span>
                                        <span class="text-success"><em class="ti ti-check-box"></em> Setting has been updated</span>
                                    </div>
                                </div>

                                <div class="tab-pane fade" id="password">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-item input-with-label">
                                                <label for="old-pass" class="input-item-label">Old Password</label>
                                                <input class="input-bordered" type="password" id="old-pass" name="old-pass" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-item input-with-label">
                                                <label for="new-pass" class="input-item-label">New Password</label>
                                                <input class="input-bordered" type="password" id="new-pass" name="new-pass" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-item input-with-label">
                                                <label for="confirm-pass" class="input-item-label">Confirm New Password</label>
                                                <input class="input-bordered" type="password" id="confirm-pass" name="confirm-pass" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="note note-plane note-info pdb-1x">
                                        <em class="fas fa-info-circle"></em>
                                        <p>Password should be minmum 8 letter and include lower and uppercase letter.</p>
                                    </div>
                                    <div class="gaps-1x"></div>
                                    <div class="d-sm-flex justify-content-between align-items-center">
                                        <button class="btn btn-primary">Update</button>
                                        <div class="gaps-2x d-sm-none"></div>
                                        <span class="text-success"><em class="ti ti-check-box"></em>  Changed Password</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-area card">
                        <div class="card-innr">
                            <div class="card-head">
                                <h4 class="card-title">Two-Factor Verification</h4>
                            </div>
                            <p>Two-factor authentication is a method for protection your web account. When it is activated you need to enter not only your password, but also a special code. You can receive this code by in mobile app. Even if third person will find your password, then can't access with that code.</p>
                            <div class="d-sm-flex justify-content-between align-items-center pdt-1-5x">
                                <span class="text-light ucap d-inline-flex align-items-center">
                                    <span class="mb-0"><small>Current Status:</small></span> 
                                    <span class="badge badge-disabled ml-2">Disabled</span>
                                </span>
                                <div class="gaps-2x d-sm-none"></div>
                                <button class="order-sm-first btn btn-primary">Enable 2FA</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aside sidebar-right col-lg-4">
                    {/* <div class="account-info card">
                        <div class="card-innr">
                            <h6 class="card-title card-title-sm">Your Account Status</h6>
                            <ul class="btn-grp">
                                <li><a href="#" class="btn btn-auto btn-xs btn-success">Email Verified</a></li>
                                <li><a href="#" class="btn btn-auto btn-xs btn-warning">KYC Pending</a></li>
                            </ul>
                            <div class="gaps-2-5x"></div>
                            <h6 class="card-title card-title-sm"></h6>
                        </div>
                    </div> */}
                    {/* <div class="referral-info card">
                        <div class="card-innr">
                            <h6 class="card-title card-title-sm">Company Registration</h6>
                            <p class=" pdb-0-5x">Invite other Businesses &amp; companies <strong><span class="text-primary"></span> to Register with MUDa KYC Application.</strong></p>
                            <div class="copy-wrap mgb-0-5x">
                                <span class="copy-feedback"></span>
                                <em class="fas fa-link"></em>
                                <input type="text" class="copy-address" value="https://demo.themenio.com/ico?ref=7d264f90653733592" disabled="" />
                                <button class="copy-trigger copy-clipboard" data-clipboard-text="https://demo.themenio.com/ico?ref=7d264f90653733592"><em class="ti ti-files"></em></button>
                            </div>
                        </div>
                    </div> */}
                    <div class="kyc-info card">
                        <div class="card-innr">
                            <h6 class="card-title card-title-sm">Identity Verification - KYC</h6>
                            <p>To comply with regulation, participant will have to go through indentity verification.</p>
                            <p class="lead text-light pdb-0-5x">You have not submitted your KYC application to verify your indentity.</p>
                            <button class="btn btn-primary" onClick={handleProfile}>Click to Proceed</button>
                            <h6 class="kyc-alert text-danger"></h6>
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
                        <li><a href="regular-page.html">Terms of Condition</a></li>
                    </ul>
                </div>
                <div class="col-md-4 mt-2 mt-sm-0">
                    <div class="d-flex justify-content-between justify-content-md-end align-items-center guttar-25px pdt-0-5x pdb-0-5x">
                        <div class="copyright-text">&copy; MUDA KYC Project.</div>
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

export default Profile
import React from 'react'
import Navbar from './Navbar'

function Kycdetails() {
  return (
    <div>
       <Navbar />
    <div class="page-content">
        <div class="container">
            <div class="card content-area">
                <div class="card-innr">
                    <div class="card-head d-flex justify-content-between align-items-center">
                        <h4 class="card-title mb-0">KYC Details</h4>
                        <div class="d-flex align-items-center guttar-20px">
                            <div class="flex-col d-sm-block d-none">
                                <a href="/#/kyclist" class="btn btn-sm btn-auto btn-primary"><em class="fas fa-arrow-left mr-3"></em>Back</a>
                            </div>
                            <div class="flex-col d-sm-none">
                                <a href="/#/kyclist" class="btn btn-icon btn-sm btn-primary"><em class="fas fa-arrow-left"></em></a>
                            </div>
                            {/* <div class="relative d-inline-block">
                                <a href="#" class="btn btn-dark btn-sm btn-icon toggle-tigger"><em class="ti ti-more-alt"></em></a>
                                <div class="toggle-class dropdown-content dropdown-content-top-left">
                                    <ul class="dropdown-list">
                                        <li><a href="#"><em class="ti ti-check"></em> Approve</a></li>
                                        <li><a href="#"><em class="ti ti-na"></em> Cancel</a></li>
                                        <li><a href="#"><em class="ti ti-trash"></em> Delete</a></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* <div class="gaps-1-5x"></div>
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
                                            <img src="assets/images/passport-a-fornt.jpg" alt="passport" />
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
                                            <img src="assets/images/passport-a-back.jpg" alt="passport" />
                                        </div>
                                        <ul class="data-doc-actions">
                                            <li><a href="#"><em class="ti ti-import"></em></a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul> */}
                </div>
            </div>
        </div>
    </div>
    
    {/* <div class="footer-bar">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-8">
                    <ul class="footer-links">
                        
                        <li><a href="/#/faqpage">FAQs</a></li>
                        <li><a href="/#/policy">Privacy Policy</a></li>               </ul>
                </div>
                <div class="col-md-4 mt-2 mt-sm-0">
                    <div class="d-flex justify-content-between justify-content-md-end align-items-center guttar-25px pdt-0-5x pdb-0-5x">
                        <div class="copyright-text">&copy; MUDA KYC Project</div>
                        <div class="lang-switch relative">
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    </div>
  )
}

export default Kycdetails
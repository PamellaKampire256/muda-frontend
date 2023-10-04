import React from 'react'
import Navbar from './Navbar'

function Userdetails() {
  return (
    <div>
        <Navbar />
    <div class="page-content">
        <div class="container">
            <div class="card content-area">
                <div class="card-innr card-innr-fix">
                    <div class="card-head d-flex justify-content-between align-items-center">
                        <h4 class="card-title mb-0">User Details</h4>
                        <div class="d-flex align-items-center guttar-20px">
                            <div class="flex-col d-sm-block d-none">
                                <a href="/#/userlist" class="btn btn-sm btn-auto btn-primary"><em class="fas fa-arrow-left mr-3"></em>Back</a>
                            </div>
                            <div class="flex-col d-sm-none">
                                <a href="/#/userlist" class="btn btn-icon btn-sm btn-primary"><em class="fas fa-arrow-left"></em></a>
                            </div>
                        </div>
                    </div>
                    <div class="gaps-1-5x"></div>
                    <div class="data-details d-md-flex">
                        <ul class="data-vr-list">
                            <li><div class="data-state data-state-sm data-state-approved"></div> Email</li>
                            <li><div class="data-state data-state-sm data-state-pending"></div> KYC</li>
                            <li><div class="data-state data-state-sm data-state-approved"></div> WL</li>
                        </ul>
                    </div>
                    <div class="gaps-3x"></div>
                    <h6 class="card-sub-title">User Information</h6>
                    <ul class="data-details-list">
                        <li>
                            <div class="data-details-head">Full Name</div>
                            <div class="data-details-des"></div>
                        </li>
                        <li>
                            <div class="data-details-head">Surname</div>
                            <div class="data-details-des"></div>
                        </li>
                        <li>
                            <div class="data-details-head">Email Address</div>
                            <div class="data-details-des"></div>
                        </li>
                        <li>
                            <div class="data-details-head">Mobile Number</div>
                            <div class="data-details-des"></div>
                        </li>
                        <li>
                            <div class="data-details-head">Date of Birth</div>
                            <div class="data-details-des"></div>
                        </li>
                    </ul>
                    <div class="gaps-3x"></div>
                    <h6 class="card-sub-title">More Information</h6>
                    <ul class="data-details-list">
                        <li>
                            <div class="data-details-head">Joining Date</div>
                            <div class="data-details-des"></div>
                        </li>
                        <li>
                            <div class="data-details-head">Reg Method</div>
                            <div class="data-details-des"></div>
                        </li>
                        <li>
                            <div class="data-details-head">Last Login</div>
                            <div class="data-details-des"></div>
                        </li>
                        <li>
                            <div class="data-details-head">Newsleter Subscription</div>
                            <div class="data-details-des"></div>
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
                        <li><a href="/#/faqpage">FAQs</a></li>
                        <li><a href="/#/policy">Privacy Policy</a></li>
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

export default Userdetails
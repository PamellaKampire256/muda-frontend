import React from 'react'
import Navbar from './Navbar'
function Kycapplication() {
  return (
    <div>
        <Navbar /> 
    <div class="page-header page-header-kyc">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-xl-7 text-center">
                    <h2 class="page-title">KYC Verification</h2>
                    <p class="large">To comply with regulation each participant will have to go through indentity verification (KYC/AML) to prevent fraud causes.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="page-content">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10 col-xl-9">
                    <div class="kyc-status card mx-lg-4">
                        <div class="card-innr">
                            <div class="status status-empty">
                                <div class="status-icon">
                                    <em class="ti ti-files"></em>
                                </div>
                                <span class="status-text text-dark">Have you submitted your necessary documents to verify your identity. If you havent, please fill in your company details.</span>
                                <a href="/#/kycform" class="btn btn-primary">Click here to complete your KYC</a>
                            </div>
                        </div>
                    </div>
                    <p class="text-light text-center">If you have any question, please contact our support team <a href="https://muda.tech">muda.tech</a>.</p>
                    <div class="gaps-1x"></div>
                    <div class="gaps-3x d-none d-sm-block"></div>
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
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Kycapplication
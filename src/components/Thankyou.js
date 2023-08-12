import React from 'react'
import Navbar from "./Navbar";

function Thankyou() {
  return (
    <div>
     <Navbar />     
 {/* <div class="topbar-wrap">
        <div class="topbar is-sticky">
            <div class="container">
                <div class="d-flex justify-content-center">
                    <a class="topbar-logo" href="/#/thankyou">
                       <img src="assets/images/logo-light2x.png" srcset="assets/images/logo-light2x.png 2x" alt="logo" />
                    </a>
                </div>
            </div>
        </div>
    </div> */}

    <div class="page-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }} >
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10 col-xl-8">
                    <div class="card content-area">
                        <div class="card-innr">
                            <div class="status status-thank px-md-5">
                                <div class="status-icon">
                                    <em class="ti ti-check"></em>
                                </div>
                                <span class="status-text large text-dark">Thank you for submitting form</span>
                                <p class="px-md-5">We received your data, our team will check and get back you via email.</p>
                            </div>
                        </div>
                    </div>
                    <div class="gaps-1x"></div>
                    <div class="gaps-3x d-none d-sm-block"></div>
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
                        <li><a href="/#/policy">Privacy Policy</a></li>
                        <li><a href="regular-page.html">Terms of Condition</a></li>
                    </ul>
                </div>
                <div class="col-md-4 mt-2 mt-sm-0">
                    <div class="d-flex justify-content-between justify-content-md-end align-items-center guttar-25px pdt-0-5x pdb-0-5x">
                        <div class="copyright-text">&copy; MUDA KYC Project.</div>
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
    </div> */}
    </div>
  )
}

export default Thankyou
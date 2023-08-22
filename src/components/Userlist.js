import React from 'react'
import Navbar from './Navbar'

function Userlist() {
  return (
    <div>
        <Navbar />
    <div class="page-content">
        <div class="container">
            <div class="card content-area">
                <div class="card-innr">
                    <div class="card-head">
                        <h4 class="card-title">User List</h4>
                    </div>
                    <table class="data-table dt-init user-list">
                        <thead>
                            <tr class="data-item data-head">
                                <th class="data-col dt-user">User</th>
                                <th class="data-col dt-email">Email</th>
                                <th class="data-col dt-verify">Verified Status</th>
                                <th class="data-col dt-login">Last Login</th>
                                <th class="data-col dt-status"><div class="dt-status-text">Status</div></th>
                                <th class="data-col"></th>
                            </tr>
                        </thead>
                       
                    </table>
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

export default Userlist
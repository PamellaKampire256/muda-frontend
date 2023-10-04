import React from 'react'
import Navbar from './Navbar'

function Kyclist() {
  return (
    <div>
        <Navbar />   
    <div class="page-content">
        <div class="container">
            <div class="content-area card">
                <div class="card-innr">
                    <div class="card-head">
                        <h4 class="card-title">KYC List</h4>
                    </div>
                    <table class="data-table dt-init kyc-list">
                        <thead>
                            <tr class="data-item data-head">
                                <th class="data-col dt-user">User</th>
                                <th class="data-col dt-doc-type">Doc Type</th>
                                <th class="data-col dt-doc-front">Documents</th>
                                <th class="data-col dt-doc-back">&nbsp;</th>
                                <th class="data-col dt-status">Status</th>
                                <th class="data-col"></th>
                            </tr>
                        </thead>
                        </table> 
                        </div>
                        </div>
                        </div>
                        </div>
                        <tbody>
                          
    </tbody>
    </div>
  )
}

export default Kyclist
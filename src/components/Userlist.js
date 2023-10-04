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
    </div>
  )
}

export default Userlist
import React from 'react'
import { Routes, useNavigate, Route, Link } from 'react-router-dom';


function Navbar() {
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
                    <a class="topbar-logo" href="/kycform" style={{ pointerEvents: 'none' }}>
                       <img src="assets/images/logo-white.png" srcset="images/logo-white2.png 2x" alt="logo" />
                    </a>
                    <ul class="topbar-nav">
                        <li class="topbar-nav-item relative">
                            <span class="user-welcome d-none d-lg-inline-block">Welcome! Kampire Pamella</span>
                            <a class="toggle-tigger user-thumb" href="#" style={{ pointerEvents: 'none' }} ><em class="ti ti-user">  </em></a>
                            <div class="toggle-class dropdown-content dropdown-content-right dropdown-arrow-right user-dropdown">
                                <ul class="user-links">
                                    <li><a href="/profile"><i class="ti ti-id-badge"></i>My Profile</a></li> </ul>
                                <ul class="user-links bg-light">
                                    <li><a href="/"><i class="ti ti-power-off"></i>Logout</a></li> </ul>
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
                        <li><a href="/profile/"><em class="ikon ikon-user"></em> Personal Informaion</a></li>
                        <li class="has-dropdown page-links-all"><Link class="drop-toggle" href="#"><em class="ikon ikon-exchange"></em>Company Information</Link>
                            <ul class="navbar-dropdown">
                               
                                <li class="has-dropdown"><Link class="drop-toggle" href="#">KYC Panel</Link>
                                    <ul class="navbar-dropdown">                                  
                                        <li><a href="/kyclist/">KYC Lists - Admin</a></li>
                                        <li><a href="/kycdetails/">KYC Details - Admin</a></li>
                                    </ul>
                                </li>
                                <li class="has-dropdown"><Link class="drop-toggle" href="#">User Pages</Link>
                                    <ul class="navbar-dropdown">
                                        <li><a href="/userlist/">User List - Admin</a></li>
                                    </ul>
                                </li>
                                <li class="has-dropdown"><Link className="drop-toggle" to="#">Misc Page</Link>
                                    <ul class="navbar-dropdown">
                                        <li><a href="/"><i class="ti ti-power-off"></i>Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-btns">
                        <li><a href="/kycapplication" class="btn btn-sm btn-outline btn-light"><em class="text-primary ti ti-files"></em><span>KYC Application</span></a></li>
                        <li class="d-none"><span class="badge badge-outline badge-success badge-lg"><em class="text-success ti ti-files mgr-1x"></em><span class="text-success">KYC Approved</span></span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar

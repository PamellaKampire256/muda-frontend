import React, { useState, useRef, useCallback } from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { countries } from 'countries-list'; 
import 'react-phone-number-input/style.css';
import Companyinformation from  './Companyinformation';
import Uploaddocuments from './Uploaddocuments';
import Personalinformation from  './Personalinformation';
import Submitting from './Submitting';


function Profile() {
const navigate =useNavigate();
const webcamRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = useCallback(() => {
    setShowCamera(true);
  }, []);

  const handleCaptureClick = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setShowCamera(false); 
  }, []);

  return (
    <div>
        <Navbar />
    <div class="page-content">
        <div class="container">
        <div class="row">
            <div class="main-content col-lg-11">
                <div class="content-area card">
                <div class="card-innr">
                    <div class="card-head">
                        <h4 class="card-title">Profile Details</h4>
                    </div>
                    <ul class="nav nav-tabs nav-tabs-line" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#personal-data">Personal Information</a>
                            
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#company-details">Company Informaion</a>    
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#upload-documents">Documents</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#comfirm-details-and-submit">Comfirm Details and Submit</a>
                        </li>
                    </ul>
            <div class="tab-content" id="profile-details">
            <div class="tab-pane fade show active" id="personal-data">
        <Personalinformation />
                                        </div>
                                        <div class="tab-pane fade" id="company-details">
                                        <Companyinformation />
                                        </div>
                                        <div class="tab-pane fade" id="upload-documents">
                                        <Uploaddocuments />
                                        </div>
                                        <div class="tab-pane fade" id="comfirm-details-and-submit">
                                        <Submitting />
                                        </div>
                                        </div>
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
                    </ul>
                </div>
                <div class="col-md-4 mt-2 mt-sm-0">
                    <div class="d-flex justify-content-between justify-content-md-end align-items-center guttar-25px pdt-0-5x pdb-0-5x">
                        <div class="copyright-text">&copy; MUDA KYC Project.</div>
                        <div class="lang-switch relative">
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
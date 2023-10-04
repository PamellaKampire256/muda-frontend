import React, { useState } from 'react'
import Navbar from './Navbar'
import { Routes, useNavigate, Route, Link } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';
import { countries } from 'countries-list'; 
import 'react-phone-number-input/style.css';
import Select from 'react-select';


    function Kycform() {
        const navigate= useNavigate();
        const handleKycform = () =>{
          navigate('/thankyou') 
        }
        const [phoneNumber, setPhoneNumber] = useState('');
        const [dateOfBirth, setDateOfBirth] = useState(null);

        const countryOptions = Object.keys(countries).map((countryCode) => ({
            value: countryCode,
            label: countries[countryCode].name,
        }));

    return (
            <div>
            <Navbar />
            
    <div class="page-content">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-xl-10">
                    <div class="kyc-form-steps card mx-lg-4">
                        <div class="form-step form-step1">
                            <div class="form-step-fields card-innr">
                            <div class="card-head">
                                <h4 class="card-title">Company Informaion</h4>
                            </div>
                                <div class="column"> 
                                             <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="business-name" class="input-item-label" style={{ fontSize: '17px' }}>Business lisence</label>
                                                    <input class="input-bordered" type="text" id="business-lisence" name="business-lisence" placeholder="Your Business Lisence" />
                                                </div>
                                            </div>

                                            {/* <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label class="input-item-label">Trade Licenses (for specific industries or activities)</label>
                                                    <input class="input-bordered" type="file" placeholder="Upload Trade Licenses" />
                                                </div>
                                            </div> */}

                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="business-registration-number" class="input-item-label" style={{ fontSize: '17px' }}>Company registration certificate</label>
                                                    <input class="input-bordered" type="text" id="company-registration-certificate" name="company-registration-certicate" placeholder="Your Company registration certificate" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-sm-flex justify-content-between align-items-center">
                                            <button class="btn btn-primary" onClick={handleKycform}>Update Companyinformation</button>
                                            <div class="gaps-2x d-sm-none"></div>
                                            <span class="text-success"><em class="ti ti-check-box"></em> All Changes are saved</span>
                                        </div>
                                    </div>
                                </div>
                             <div class="form-step form-step-final">
                            <div class="form-step-fields card-innr">
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
                        <div class="copyright-text">&copy; 2023 Project MUDA KYC Application.</div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
      
    )
    }


export default Kycform
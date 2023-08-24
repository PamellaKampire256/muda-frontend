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
{/* <div class="page-header page-header-kyc">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-xl-7 text-center">
                    <h2 class="page-title">Begin your Company ID-Verification</h2>
                    <p class="large">Ensure to give accurate Informaion</p>
                </div>
            </div>
        </div>
    </div> */}
    <div class="page-content">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-xl-10">
                    <div class="kyc-form-steps card mx-lg-4">
                        <div class="form-step form-step1">
                            <div class="form-step-fields card-innr">
                                <div class="row"> 
                                             <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="business-name" class="input-item-label" style={{ fontSize: '17px' }}>Business Name</label>
                                                    <input class="input-bordered" type="text" id="business-name" name="business-name" placeholder="Your Business Name" />
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="business-registration-number" class="input-item-label" style={{ fontSize: '17px' }}>Business Registration Number</label>
                                                    <input class="input-bordered" type="text" id="business-registration-number" name="business-registration-number" placeholder="Your Business Registration Number" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="country-of-incoporation" class="input-item-label" style={{ fontSize: '17px' }}>Country of Incoporation</label>
                                                    <Select options={countryOptions} placeholder="Select your country" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label for="registered-business-address" class="input-item-label" style={{ fontSize: '17px' }}>Registered Business Address</label>
                                    <input class="input-bordered" type="text" id="registered-business-address" name="registered-business-address" placeholder="Your Registered Business Address" />
                                </div>
                            </div>

                              <div class="col-md-6">
                                <div class="input-item input-with-label">
                                  <label for="phone-number" class="input-item-label">Phone Number</label>
                                     <PhoneInput
                                        placeholder="Enter your phone number"
                                        value={phoneNumber}
                                        onChange={setPhoneNumber}
                                    />
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label for="contact-email" class="input-item-label" style={{ fontSize: '17px' }}>Contact Email</label>
                                    <input class="input-bordered" type="email" id="contact-email" name="contact-email" placeholder="Your contact email" />
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label for="tax-identification-number-business" class="input-item-label" style={{ fontSize: '17px' }}>Tax Identification Number (TIN) or equivalent</label>
                                    <input class="input-bordered" type="text" id="tax-identification-number-business" name="tax-identification-number-business" placeholder="Your TIN or equivalent" />
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label for="source-of-funds-business" class="input-item-label" style={{ fontSize: '17px' }}>Source of Funds or Business Capital</label>
                                    <input class="input-bordered" type="text" id="source-of-funds-business" name="source-of-funds-business" placeholder="Your source of funds or business capital" />
                                </div>
                            </div>


                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label for="nature-of-business-activities" class="input-item-label" style={{ fontSize: '17px' }}>Nature of Business Activities</label>
                                    <textarea class="input-bordered" id="nature-of-business-activities" name="nature-of-business-activities" placeholder="Describe the nature of business activities"></textarea>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label for="business-website" class="input-item-label" style={{ fontSize: '17px' }}>Business Website (If applicable)</label>
                                    <input class="input-bordered" type="text" id="business-website" name="business-website" placeholder="https://example.com" />
                                    <div class="input-note">
                                        <input type="checkbox" id="skip-business-website" />
                                        <label for="skip-business-website" style={{ fontSize: '17px' }}>I don't have a business website</label>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label for="expected-transactions" class="input-item-label" style={{ fontSize: '17px' }}>Expected Volume and Nature of Transactions</label>
                                    <textarea class="input-bordered" id="expected-transactions" name="expected-transactions" placeholder="Describe the expected volume and nature of transactions"></textarea>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label for="trade-references" class="input-item-label" style={{ fontSize: '17px' }}>Trade References or Business References</label>
                                    <textarea class="input-bordered" id="trade-references" name="trade-references" placeholder="Provide trade references or business references"></textarea>
                                </div>
                            </div>                         
                                </div>
                            </div>
                        </div>
                        {/* <div class="form-step form-step2">
                            <div class="form-step-fields card-innr">
                                <div class="gaps-2x"></div>
                                <ul class="nav nav-tabs nav-tabs-bordered row flex-wrap guttar-20px" role="tablist">
                                   
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="passport">
                                        <h5 class="text-secondary font-bold">To avoid delays when verifying your account, Please make sure that:</h5>
                                        <ul class="list-check">
                                            <li>Chosen credential must not be expired.</li>
                                            <li>Document should be good condition and clearly visible.</li>
                                            <li>Make sure that there is no light glare on the card.</li>
                                        </ul>
                                        <div class="gaps-2x"></div>
                                       
                                        <div class="row align-items-center">
                                           
                                            <div class="col-sm-4 d-none d-sm-block">
                                                <div class="mx-md-4">
                                                    <img src="assets/images/vector-passport.png" alt="vector" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                 
                                </div>
                            </div>
                        </div> */}
                       
                        <div class="form-step form-step-final">
                            <div class="form-step-fields card-innr">
                                {/* <div class="input-item">
                                    <input class="input-checkbox input-checkbox-md" id="term-condition" type="checkbox" />
                                    <label for="term-condition">I have read the <a href="#">Terms of Condition</a> and <a href="#">Privary Policy.</a></label>
                                </div>
                                <div class="input-item">
                                    <input class="input-checkbox input-checkbox-md" id="info-currect" type="checkbox" />
                                    <label for="info-currect">All the personal information I have entered is correct.</label>
                                </div> */}
                                {/* <div class="gaps-1x"></div>
                                <Link to="/thankyou" class="btn btn-primary">Verify</Link> */}
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
    </div>
 </div>
      
    )
    }


export default Kycform
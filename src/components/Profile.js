import React, { useState } from 'react'
import Select from 'react-select';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';
import { Routes, useNavigate, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import { countries } from 'countries-list'; 
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

function Profile() {
       const navigate =useNavigate();
       const handleProfile = () =>{
        navigate('/kycform')
       }
       const [dateOfBirth, setDateOfBirth] = useState(null);

       const [phoneNumber, setPhoneNumber] = useState('');
       const [selectedTab, setSelectedTab] = useState('personal-data');
       
       const countryOptions = Object.keys(countries).map((countryCode) => ({
        value: countryCode,
        label: countries[countryCode].name,
    }));

    const PersonalInfoTabContent = ({ details }) => (
        <div id="personal-data" className="tab-pane active">
          {/* Personal Information tab content */}
          <p>First Name: {details.firstName}</p>
          <p>Last Name: {details.lastName}</p>
          <p>Email: {details.email}</p>
        </div>
      );
    
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
                                    <a class="nav-link" data-toggle="tab" href="#upload-documents">Upload Documents</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#comfirm-details-and-submit">Comfirm Details and Submit</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="profile-details">
                                <div class="tab-pane fade show active" id="personal-data">
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="full-name" class="input-item-label" style={{ fontSize: '17px' }}>Full Name</label>
                                                    <input class="input-bordered" type="text" id="full-name" name="full-name" placeholder=" " />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="input-item input-with-label">
                                        <label for="date-of-birth" class="input-item-label"style= {{ fontSize: '17px' }}>Date of Birth</label>
                                                                <DatePicker
                                                        className="input-bordered date-picker-dob"
                                                        selected={dateOfBirth}
                                                        onChange={(date) => setDateOfBirth(date)}
                                                        dateFormat="yyyy-MM-dd"
                                                        placeholderText="(Select a date)"
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="nationality" class="input-item-label" style={{ fontSize: '17px' }}>Nationality</label>
                                                    <Select options={countryOptions} placeholder="Select your nationality" />
                                                </div>
                                            </div>
                                        <div class="col-md-6">
                                            <div class="input-item input-with-label">
                                                <label for="address" class="input-item-label" style={{ fontSize: '17px' }}>Address</label>
                                                <input class="input-bordered" type="text" id="address" name="address" placeholder="Your Address" />
                                            </div>
                                        </div>
                                    <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="proof-of-address" class="input-item-label"style= {{ fontSize: '17px' }}>Proof of Address (e.g. utility bill, bank statement for the business)</label>
                                                    <input class="input-bordered" type="file" id="proof-of-address" name="proof-of-address" placeholder="(e.g. utility bill, bank statement)" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                        <div class="input-item input-with-label">
                                            <label for="identification-number" class="input-item-label" style={{ fontSize: '17px' }}>Identification Number</label>
                                            <input class="input-bordered" type="text" id="identification-number" name="identification-number" placeholder="(e.g. SSN, National Insurance Number,Aadhaar Number)" />
                                        </div>
                                    </div>            
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="phone-number" class="input-item-label" style={{ fontSize: '17px' }}>Phone Number</label>
                                                    <PhoneInput
                                                    placeholder="Enter your phone number"
                                                    value={phoneNumber}
                                                    onChange={setPhoneNumber}
                                                />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                    <div class="input-item input-with-label">
                                        <label for="email-address" class="input-item-label"style={{ fontSize: '17px' }} >Email Address</label>
                                        <input class="input-bordered" type="text" id="email-address" name="email-address" placeholder="info@softnio.com" disabled="" />
                                    </div>
                                </div>
                                
                                <div class="col-md-6">
                                    <div class="input-item input-with-label">
                                        <label for="tax-identification-number" class="input-item-label" style={{ fontSize: '17px' }}>Tax Identification Number (TIN)</label>
                                        <input class="input-bordered" type="text" id="tax-identification-number" name="tax-identification-number" placeholder="Your TIN" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-item input-with-label">
                                        <label for="source-of-funds" class="input-item-label" style={{ fontSize: '17px' }}>Source of Funds</label>
                                        <input class="input-bordered" type="text" id="source-of-funds" name="source-of-funds" placeholder="Your Source of Funds" />
                                    </div>
                                </div>
                                           
                                        </div>
                                        <div class="gaps-1x"></div>
                                        <div class="d-sm-flex justify-content-between align-items-center">
                                            <button class="btn btn-primary" onClick={handleProfile}>Update Profile</button>
                                            <div class="gaps-2x d-sm-none"></div>
                                            <span class="text-success"><em class="ti ti-check-box"></em> All Changes are saved</span>
                                        </div>
                                    </form>
                                </div>

                                 {/* <div class="pdb-1-5x">
                                        <h5 class="card-title card-title-sm text-dark">Company Details</h5>    
                                    </div> */}
                                <div class="tab-pane fade" id="company-details">
                                


                                    <div class="row">
                                    <ul class="nav nav-tabs nav-tabs-line" role="tablist">
                                    <li className="nav-item dropdown">
                                            <a className={`nav-link dropdown-toggle ${selectedTab === 'company-details' ? 'active' : ''}`} data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" style={{ fontSize: '20px', color: 'blue'}}>
                                           <b>Documents</b>
                                            </a>
                                            <div className="dropdown-menu">
                                                <Link className={`dropdown-item ${selectedTab === 'company-details' ? 'active' : ''}`} to="/kycform" onClick={() => setSelectedTab('company-details')}>Company Form</Link>
                                                <Link className={`dropdown-item ${selectedTab === 'option2' ? 'active' : ''}`} to="/individualsform" onClick={() => setSelectedTab('option2')}>Individual's Form</Link>
                                            </div>
                                        </li>
                                        </ul>

                                        <div class="col-md-6 mb-4">
   
                                        </div>


                                        <div class="col-md-6 mb-4">
                                            
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            
                                        </div>
                                      
                                        <div class="form-step-head card-innr">
                                <div class="step-head">
                                    <div class="step-number">01</div>
                                    <div class="step-head-text">
                                    <Link to={'/kycform'}><h4><u>For Companies</u></h4></Link>
                                    
                                        <p>Please provide accurate and complete information for the company form.</p>
                                         <p>The information you provide will be used for verification purposes.</p>
                                    </div>
                                </div>
                            </div>
                                   
                            <div class="form-step-head card-innr">
                                <div class="step-head">
                                    <div class="step-number">02</div>
                                    <div class="step-head-text">
                                    <Link to={'/individualsform'}><h4><u>For Individuals</u></h4></Link>
                                        <p>Fill in the individual form with accurate and up-to-date information.</p> 
                                        <p> The details you provide will be used for verification purposes.n</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                                        <div class="gaps-1x"></div>
                                        <div class="d-sm-flex justify-content-between align-items-center">
                                            {/* <button class="btn btn-primary" onClick={handleProfile}>Update Company Information</button> */}
                                           
                                        </div>

                                    <div class="gaps-1x">  
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center"> 
                                    <span class="text-success"><em class="ti ti-check-box"></em> </span>
                                            
                                        <span class="text-success"><em class="ti ti-check-box"></em></span>
                                    </div>
                                
                                </div>
                                <div class="tab-pane fade" id="upload-documents">

                        <div class="row justify-content-center">
                    <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label for="submit-application-business" class="input-item-label">Upload Documents</label>
                                    <div class="input-note">
                                <input type="checkbox" id="skip-business-website" />
                                <label for="skip-business-website" style={{ fontSize: '17px' }}>I am ready to submit</label>
                            </div>             
                            <p>Please review the confirmed details above and ensure that all information is accurate.</p>
                                    <p>If everything is correct, click the "Submit Application" button to complete the process.</p>
                                    <button class="btn btn-primary">Submit</button>
                                </div>
                            </div>       
                            </div>
                                </div>


                                <div class="tab-pane fade" id="comfirm-details-and-submit">

                        <div class="row justify-content-center">
                        <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label for="submit-application-business" class="input-item-label">Confirm Details and Submit</label>
                                    <div class="input-note">
                                <input type="checkbox" id="skip-business-website" />
                                <label for="skip-business-website" style={{ fontSize: '17px' }}>I am ready to submit</label>
                            </div>             
                            <p>Please review the confirmed details above and ensure that all information is accurate.</p>
                                    <p>If everything is correct, click the "Submit Application" button to complete the process.</p>
                                    <button class="btn btn-primary">Submit</button>
                                </div>
                            </div>       
                            </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="aside sidebar-right col-lg-4">
                    
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
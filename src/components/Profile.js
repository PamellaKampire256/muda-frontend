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
                                <div class="tab-pane fade" id="company-details">
                                
                                    <div class="row">
                                        <div class="form-step-head card-innr">
                                <div class="step-head">
                                    <div class="step-number">01</div>
                                    <div class="step-head-text">
                                   <h4><u>For Companies</u></h4>
                                    
                                        <p>Please provide accurate and complete information for the company form.</p>
                                         <p>The information you provide will be used for verification purposes.</p>
                                         <p>Your personal information is required for identification</p>
                                    </div>
                                </div>
                            </div>     
                            </div>
                            
    <div class="page-content">
        <div class="container">
            <div class="row">
                <div class="col-lg-16 col-xl-12">
                    <div class="kyc-form-steps card mx-lg-4">
                        <div class="form-step form-step1">
                            <div class="form-step-fields card-innr">
                                <div class="note note-plane note-light-alt note-md pdb-1x">
                                    <em class="fas fa-info-circle"></em>
                                    <p>Please type carefully and fill out the form with valid Informaion. You can’t edit these details once you submitted the form.</p>
                                </div>
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
                                    <label for="business-mailing-address" class="input-item-label" style={{ fontSize: '17px' }}>Business Mailing Address (if different from registered address)</label>
                                    <input class="input-bordered" type="text" id="business-mailing-address" name="business-mailing-address" placeholder="Your Business Mailing Address" />
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label for="date-of-incorporation" class="input-item-label" style={{ fontSize: '17px' }}>Date of Incorporation</label>
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
                                    <label for="business-type" class="input-item-label" style={{ fontSize: '17px' }}>Business Type (e.g., Corporation, Partnership, Sole Proprietorship)</label>
                                    <input class="input-bordered" type="text" id="business-type" name="business-type" placeholder="Your Business Type" />
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="input-item input-with-label">
                                    <label for="board-of-directors" class="input-item-label" style={{ fontSize: '17px' }}>Board of Directors and Key Management Personnel Details</label>
                                    <textarea class="input-bordered" id="board-of-directors" name="board-of-directors" placeholder="Provide details about board of 
                                    directors and key management personnel"></textarea>
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
                                    <label for="financial-statements" class="input-item-label" style={{ fontSize: '17px' }}>Financial Statements (e.g., balance sheet, income statement)</label>
                                    <input class="input-bordered" type="file" id="financial-statements" name="financial-statements" placeholder="Upload financial statements" />
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
                                    <label for="proof-of-address-business" class="input-item-label" style={{ fontSize: '17px' }}>Proof of Address (e.g. utility bill, bank statement for the business)</label>
                                    <input class="input-bordered" type="file" id="proof-of-address-business" name="proof-of-address-business" placeholder="(e.g. utility bill, bank statement)" />
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
                        <div class="form-step form-step2"> 
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
                        </div>
                       
                        <div class="form-step form-step-final">
                            <div class="form-step-fields card-innr">
                                <div class="input-item">
                                    <input class="input-checkbox input-checkbox-md" id="term-condition" type="checkbox" />
                                    <label for="term-condition">I have read the <a href="#">Terms of Condition</a> and <a href="#">Privary Policy.</a></label>
                                </div>
                                <div class="input-item">
                                    <input class="input-checkbox input-checkbox-md" id="info-currect" type="checkbox" />
                                    <label for="info-currect">All the personal information I have entered is correct.</label>
                                </div>
                                <div class="gaps-1x"></div>
                                <Link to="/thankyou" class="btn btn-primary">Process for Verify</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

                                    <div class="d-flex justify-content-between align-items-center"> 
                                    <span class="text-success"><em class="ti ti-check-box"></em> </span>
                                            
                                        <span class="text-success"><em class="ti ti-check-box"></em></span>
                                    </div>
                                
                                </div>
                                <div class="tab-pane fade" id="upload-documents">

                                <div class="col-md-6 mb-4">
                                            
                                            </div>

                                <div class="form-step-head card-innr">
                                <div class="step-head">
                                    <div class="step-number">02</div>
                                    <div class="step-head-text">
                                    <h4><u>For Individuals</u></h4>
                                        <p>Upload with accurate and up-to-date information in this individual form.</p> 
                                        <p> The details you provide will be used for verification purposes.</p>
                                        <p>Your personal information is required for identification.</p>
                                    </div>
                                </div>
                            </div>
                           
        <div class="page-content">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-16 col-xl-12">
                        <div class="kyc-form-steps card mx-lg-4">
                            <div class="form-step form-step1"> 
                                <div class="form-step-fields card-innr">
                                    <div class="note note-plane note-light-alt note-md pdb-1x">
                                        <em class="fas fa-info-circle"></em>
                                        <p>Please type carefully and fill out the form with valid Informaion. You can’t edit these details once you submitted the form.</p>
                                    </div>
                                <div class="row"> 
                       
                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label class="input-item-label">Passport (photo page)</label>
                                    <input class="input-bordered" type="file" placeholder="Upload Passport" />
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label class="input-item-label">National ID card (both sides) OR Driver's license (both sides)</label>
                                    <input class="input-bordered" type="file" placeholder="Upload ID Card or Driver's License" />
                                    <input class="input-bordered" type="file" placeholder="Upload ID Card or Driver's License" />
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label class="input-item-label">Utility bill or bank statement showing the address</label>
                                    <input class="input-bordered" type="file" placeholder="Upload Utility Bill or Bank Statement" />
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label class="input-item-label">A recent photograph</label>
                                    <input class="input-bordered" type="file" placeholder="Upload Photograph" />
                                </div>
                            </div>


                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label class="input-item-label">Business License</label>
                                    <input class="input-bordered" type="file" placeholder="Upload Business License" />
                                </div>
                            </div>


                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label class="input-item-label">Shareholder register or equivalent showing ownership details</label>
                                    <input class="input-bordered" type="file" placeholder="Upload Shareholder Register" />
                                </div>
                            </div>


                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label class="input-item-label">List of Board of Directors or equivalent document</label>
                                    <input class="input-bordered" type="file" placeholder="Upload Board of Directors Document" />
                                </div>
                            </div>


                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label class="input-item-label">Utility bill or bank statement showing the business address</label>
                                    <input class="input-bordered" type="file" placeholder="Upload Business Address Document" />
                                </div>
                            </div>


                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label class="input-item-label">Tax Identification Number (TIN) certificate or equivalent</label>
                                    <input class="input-bordered" type="file" placeholder="Upload TIN Certificate" />
                                </div>
                            </div>


                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label class="input-item-label">Financial Statements (if required)</label>
                                    <input class="input-bordered" type="file" placeholder="Upload Financial Statements" />
                                    <div class="input-note">
                                    <input type="checkbox" id="skip-financial-statements" />
                                    <label for="skip-financial-statements" style={{ fontSize: '17px' }}>Skip this</label>
                                </div>
                                </div>
                            </div>


                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label class="input-item-label">Beneficial Ownership Document (if applicable)</label>
                                    <input class="input-bordered" type="file" placeholder="Upload Beneficial Ownership Document" />
                                    <div class="input-note">
                                    <input type="checkbox" id="skip-beneficial-ownership-document" />
                                    <label for="skip-beneficial-ownership-document" style={{ fontSize: '17px' }}>Skip this</label>
                                </div>
                                </div>
                            </div>


                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label class="input-item-label">Trade Licenses (for specific industries or activities)</label>
                                    <input class="input-bordered" type="file" placeholder="Upload Trade Licenses" />
                                </div>
                            </div>


                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label class="input-item-label">Passport or National ID of authorized signatories, major shareholders, and key management personnel</label>
                                    <input class="input-bordered" type="file" placeholder="Upload Passport or National ID" />
                                    <input class="input-bordered" type="file" placeholder="Upload Passport or National ID" />
                                    <input class="input-bordered" type="file" placeholder="Upload Passport or National ID" />
                                    <input class="input-bordered" type="file" placeholder="Upload Passport or National ID" />
                                </div>
                            </div>


                            <div class="col-md-6">
                                <div class="input-item input-with-label">
                                    <label class="input-item-label">Photograph of business premises or storefront (in some cases)</label>
                                    <input class="input-bordered" type="file" placeholder="Upload Photograph of Business Premises" />
                                </div>
                            </div>

                           
                                </div>
                            </div>
                        </div>
                        <div class="form-step form-step2">
                            <div class="form-step-fields card-innr">
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
                        </div>
                        
                        <div class="form-step form-step-final">
                            <div class="form-step-fields card-innr">
                                <div class="input-item">
                                    <input class="input-checkbox input-checkbox-md" id="term-condition" type="checkbox" />
                                    <label for="term-condition">I have read the <a href="#">Terms of Condition</a> and <a href="#">Privary Policy.</a></label>
                                </div>
                                <div class="input-item">
                                    <input class="input-checkbox input-checkbox-md" id="info-currect" type="checkbox" />
                                    <label for="info-currect">All the personal information I have entered is correct.</label>
                                </div>
                                <div class="gaps-1x"></div>
                                <Link to="/thankyou" class="btn btn-primary">Process for Verify</Link>
                            </div>
                        </div>
                    </div>
                </div>
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
                            <p>Please review the confirmed details and ensure that all information is accurate.</p>
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
import React, { useState } from 'react'
import Select from 'react-select';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';
import { Routes, useNavigate, Route } from 'react-router-dom';
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
                <div class="main-content col-lg-8">
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
                                    <a class="nav-link" data-toggle="tab" href="#settings">Company Informaion</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#password">Confirmation</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="profile-details">
                                <div class="tab-pane fade show active" id="personal-data">
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="full-name" class="input-item-label" style={{ fontSize: '17px' }}>Full NAME</label>
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
                                <div class="tab-pane fade" id="settings">
                                    <div class="pdb-1-5x">
                                        <h5 class="card-title card-title-sm text-dark">Company Details</h5>    
                                    </div>
                                    {/* <div class="input-item">
                                        <input type="checkbox" class="input-switch input-switch-sm" id="save-log" checked="" />
                                        <label for="save-log">Save my Activities Log</label>
                                    </div>
                                    <div class="input-item">
                                        <input type="checkbox" class="input-switch input-switch-sm" id="pass-change-confirm" />
                                        <label for="pass-change-confirm">Confirm me through email before password change</label>
                                    </div>
                                    <div class="pdb-1-5x">
                                        <h5 class="card-title card-title-sm text-dark">Manage Notification</h5>    
                                    </div>
                                    <div class="input-item">
                                        <input type="checkbox" class="input-switch input-switch-sm" id="latest-news" checked="" />
                                        <label for="latest-news">Notify me by email about sales and latest news</label>
                                    </div>
                                    <div class="input-item">
                                        <input type="checkbox" class="input-switch input-switch-sm" id="activity-alert" checked="" />
                                        <label for="activity-alert">Alert me by email for unusual activity.</label>
                                    </div> */}

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

{/* <div class="col-md-6">
    <div class="input-item input-with-label">
        <label for="country-of-incorporation" class="input-item-label">Country of Incorporation/Registration</label>
        <Select options={countryOptions} placeholder="Select country of incorporation/registration" value={selectedCountry} onChange={handleCountryChange} />
    </div>
</div> */}

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

<div class="col-12">
    <div class="input-item input-with-label">
        <label for="board-of-directors" class="input-item-label" style={{ fontSize: '17px' }}>Board of Directors and Key Management Personnel Details</label>
        <textarea class="input-bordered" id="board-of-directors" name="board-of-directors" placeholder="Provide details about board of directors and key management personnel"></textarea>
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

{/* <div class="col-md-6">
    <div class="input-item input-with-label">
        <label for="business-website" class="input-item-label">Business Website (if applicable)</label>
        <input class="input-bordered" type="text" id="business-website" name="business-website" placeholder="Your Business Website" />
    </div>
</div> */}
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
                                        <div class="gaps-1x"></div>
                                        <div class="d-sm-flex justify-content-between align-items-center">
                                            <button class="btn btn-primary" onClick={handleProfile}>Update Company Information</button>
                                            <div class="gaps-2x d-sm-none"></div>
                                            <span class="text-success"><em class="ti ti-check-box"></em> All Changes are saved</span>
                                        </div>

                                    <div class="gaps-1x"></div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span></span>
                                        <span class="text-success"><em class="ti ti-check-box"></em> Company Informaion been updated</span>
                                    </div>
                                </div>

                                <div class="tab-pane fade" id="password">
                                    {/* <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-item input-with-label">
                                                <label for="old-pass" class="input-item-label">Old Password</label>
                                                <input class="input-bordered" type="password" id="old-pass" name="old-pass" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-item input-with-label">
                                                <label for="new-pass" class="input-item-label">New Password</label>
                                                <input class="input-bordered" type="password" id="new-pass" name="new-pass" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-item input-with-label">
                                                <label for="confirm-pass" class="input-item-label">Confirm New Password</label>
                                                <input class="input-bordered" type="password" id="confirm-pass" name="confirm-pass" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="note note-plane note-info pdb-1x">
                                        <em class="fas fa-info-circle"></em>
                                        <p>Password should be minmum 8 letter and include lower and uppercase letter.</p>
                                    </div> */}


    {/* <div class="row">
        <div class="col-md-6">
            <div class="input-item input-with-label">
                <label for="board-of-directors" class="input-item-label">Board of Directors and Key Management Personnel Details (Optional)</label>
                <textarea class="input-bordered" id="board-of-directors" name="board-of-directors" placeholder="Provide details about board of directors and key management personnel"></textarea>
            </div>
        </div>
        <div class="col-md-6">
            <div class="input-item input-with-label">
                <label for="contact-phone" class="input-item-label">Contact Phone (Optional)</label>
                <PhoneInput
                                                    placeholder="Enter your phone number"
                                                    value={phoneNumber}
                                                    onChange={setPhoneNumber}
                                                />
            </div>
        </div>
        <div class="col-md-6">
            <div class="input-item input-with-label">
                <label for="contact-email" class="input-item-label">Contact Email (Optional)</label>
                <input class="input-bordered" type="email" id="contact-email" name="contact-email" placeholder="Your contact email (optional)" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="input-item input-with-label">
                <label for="tax-identification-number-business" class="input-item-label">Tax Identification Number (TIN) or equivalent (Optional)</label>
                <input class="input-bordered" type="text" id="tax-identification-number-business" name="tax-identification-number-business" placeholder="Your TIN or equivalent (optional)" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="input-item input-with-label">
                <label for="financial-statements" class="input-item-label">Financial Statements (e.g., balance sheet, income statement) (Optional)</label>
                <input class="input-bordered" type="file" id="financial-statements" name="financial-statements" placeholder="Upload financial statements (optional)" />
            </div>
        </div>
        <div class="col-md-6">
            <div class="input-item input-with-label">
                <label for="source-of-funds-business" class="input-item-label">Source of Funds or Business Capital (Optional)</label>
                <input class="input-bordered" type="text" id="source-of-funds-business" name="source-of-funds-business" placeholder="Your source of funds or business capital (optional)" />
            </div>
        </div>
    </div>
    <div class="gaps-3x"></div>
    <div class="row">
        <div class="col-md-6">
            <div class="input-item input-with-label">
                <input type="checkbox" id="optional-docs" />
                <label class="input-item-label">I choose not to provide optional documents</label>
            </div>
        </div>
        <div class="col-md-6">
            <button class="btn btn-primary">Confirm Details and Submit</button>
        </div>
    </div> */}
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
                    <div class="content-area card">
                        <div class="card-innr">
                            <div class="card-head">
                                <h4 class="card-title">Two-Factor Verification</h4>
                            </div>
                            <p>Two-factor authentication is a method for protection your web account. When it is activated you need to enter not only your password, but also a special code. You can receive this code by in mobile app. Even if third person will find your password, then can't access with that code.</p>
                            <div class="d-sm-flex justify-content-between align-items-center pdt-1-5x">
                                <span class="text-light ucap d-inline-flex align-items-center">
                                    <span class="mb-0"><small>Current Status:</small></span> 
                                    <span class="badge badge-disabled ml-2">Disabled</span>
                                </span>
                                <div class="gaps-2x d-sm-none"></div>
                                <button class="order-sm-first btn btn-primary">Enable 2FA</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aside sidebar-right col-lg-4">
                    {/* <div class="account-info card">
                        <div class="card-innr">
                            <h6 class="card-title card-title-sm">Your Account Status</h6>
                            <ul class="btn-grp">
                                <li><a href="#" class="btn btn-auto btn-xs btn-success">Email Verified</a></li>
                                <li><a href="#" class="btn btn-auto btn-xs btn-warning">KYC Pending</a></li>
                            </ul>
                            <div class="gaps-2-5x"></div>
                            <h6 class="card-title card-title-sm"></h6>
                        </div>
                    </div> */}
                    {/* <div class="referral-info card">
                        <div class="card-innr">
                            <h6 class="card-title card-title-sm">Company Registration</h6>
                            <p class=" pdb-0-5x">Invite other Businesses &amp; companies <strong><span class="text-primary"></span> to Register with MUDa KYC Application.</strong></p>
                            <div class="copy-wrap mgb-0-5x">
                                <span class="copy-feedback"></span>
                                <em class="fas fa-link"></em>
                                <input type="text" class="copy-address" value="https://demo.themenio.com/ico?ref=7d264f90653733592" disabled="" />
                                <button class="copy-trigger copy-clipboard" data-clipboard-text="https://demo.themenio.com/ico?ref=7d264f90653733592"><em class="ti ti-files"></em></button>
                            </div>
                        </div>
                    </div> */}
                    <div class="kyc-info card">
                        <div class="card-innr">
                            <h6 class="card-title card-title-sm">Identity Verification - KYC</h6>
                            <p>To comply with regulation, participant will have to go through indentity verification.</p>
                            <p class="lead text-light pdb-0-5x">You have not submitted your KYC application to verify your indentity.</p>
                            <button class="btn btn-primary" onClick={handleProfile}>Click to Proceed</button>
                            <h6 class="kyc-alert text-danger"></h6>
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
                            {/* <a href="#" class="lang-switch-btn toggle-tigger">En <em class="ti ti-angle-up"></em></a>
                            <div class="toggle-class dropdown-content dropdown-content-up">
                                <ul class="lang-list">
                                    <li><a href="#">Fr</a></li>
                                    <li><a href="#">Bn</a></li>
                                    <li><a href="#">Lt</a></li>
                                </ul>
                            </div> */}
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
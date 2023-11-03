// import React, { useState } from 'react'
// import Navbar from './Navbar'
// import { Routes, useNavigate, Route, Link } from 'react-router-dom';
// import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';
// import DatePicker from 'react-datepicker'; 
// import 'react-datepicker/dist/react-datepicker.css';
// import { countries } from 'countries-list'; 
// import 'react-phone-number-input/style.css';
// import Select from 'react-select';
// import { useDropzone } from 'react-dropzone';


//     function Individualsform() {
//         const navigate= useNavigate();
//         const handleKycform = () =>{
//           navigate('/thankyou') 
//         }
//         const [phoneNumber, setPhoneNumber] = useState('');
//         const [dateOfBirth, setDateOfBirth] = useState(null);

//         const countryOptions = Object.keys(countries).map((countryCode) => ({
//             value: countryCode,
//             label: countries[countryCode].name,
//         }));

//         const onDrop = (acceptedFiles) => {
//         };
    
//         const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
//     return (
//             <div>
//             <Navbar />
// <div class="page-header page-header-kyc">
//         <div class="container">
//             <div class="row justify-content-center">
//                 <div class="col-lg-8 col-xl-7 text-center">
//                     <h2 class="page-title">Individual ID Verification</h2>
//                     <p class="large">Begin your Individual ID verification and Upload the correct Documents.</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div class="page-content">
//         <div class="container">
//             <div class="row justify-content-center">
//                 <div class="col-lg-12 col-xl-10">
//                     <div class="kyc-form-steps card mx-lg-4">
//                         <div class="form-step form-step1">
//                             <div class="form-step-head card-innr">
//                                 <div class="step-head">
//                                     <div class="step-number">🔘</div>
//                                     <div class="step-head-text">
//                                         <h4>Personal Informaion</h4>
//                                         <p>Your personal information is required for identification</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="form-step-fields card-innr">
//                                 <div class="note note-plane note-light-alt note-md pdb-1x">
//                                     <em class="fas fa-info-circle"></em>
//                                     <p>Please type carefully and fill out the form with valid Informaion. Your can’t edit these details once you submitted the form.</p>
//                                 </div>
//                                 <div class="row"> 
                       
//                                                     <div class="col-md-6">
//                             <div class="input-item input-with-label">
//                                 <label class="input-item-label">Passport (photo page)</label>
//                                 <input class="input-bordered" type="file" placeholder="Upload Passport" />
//                             </div>
//                         </div>

//                         <div class="col-md-6">
//                             <div class="input-item input-with-label">
//                                 <label class="input-item-label">National ID card (both sides) OR Driver's license (both sides)</label>
//                                 <input class="input-bordered" type="file" placeholder="Upload ID Card or Driver's License" />
//                             </div>
//                         </div>

//                         <div class="col-md-6">
//                             <div class="input-item input-with-label">
//                                 <label class="input-item-label">Utility bill or bank statement showing the address</label>
//                                 <input class="input-bordered" type="file" placeholder="Upload Utility Bill or Bank Statement" />
//                             </div>
//                         </div>

//                         <div class="col-md-6">
//                             <div class="input-item input-with-label">
//                                 <label class="input-item-label">A recent photograph</label>
//                                 <input class="input-bordered" type="file" placeholder="Upload Photograph" />
//                             </div>
//                         </div>


//                         <div class="col-md-6">
//                             <div class="input-item input-with-label">
//                                 <label class="input-item-label">Business License</label>
//                                 <input class="input-bordered" type="file" placeholder="Upload Business License" />
//                             </div>
//                         </div>


//                         <div class="col-md-6">
//                             <div class="input-item input-with-label">
//                                 <label class="input-item-label">Shareholder register or equivalent showing ownership details</label>
//                                 <input class="input-bordered" type="file" placeholder="Upload Shareholder Register" />
//                             </div>
//                         </div>


//                         <div class="col-md-6">
//                             <div class="input-item input-with-label">
//                                 <label class="input-item-label">List of Board of Directors or equivalent document</label>
//                                 <input class="input-bordered" type="file" placeholder="Upload Board of Directors Document" />
//                             </div>
//                         </div>


//                         <div class="col-md-6">
//                             <div class="input-item input-with-label">
//                                 <label class="input-item-label">Utility bill or bank statement showing the business address</label>
//                                 <input class="input-bordered" type="file" placeholder="Upload Business Address Document" />
//                             </div>
//                         </div>


//                         <div class="col-md-6">
//                             <div class="input-item input-with-label">
//                                 <label class="input-item-label">Tax Identification Number (TIN) certificate or equivalent</label>
//                                 <input class="input-bordered" type="file" placeholder="Upload TIN Certificate" />
//                             </div>
//                         </div>


//                         <div class="col-md-6">
//                             <div class="input-item input-with-label">
//                                 <label class="input-item-label">Financial Statements (if required)</label>
//                                 <input class="input-bordered" type="file" placeholder="Upload Financial Statements" />
//                                 <div class="input-note">
//                                 <input type="checkbox" id="skip-financial-statements" />
//                                 <label for="skip-financial-statements" style={{ fontSize: '17px' }}>Skip this</label>
//                             </div>
//                             </div>
//                         </div>


//                         <div class="col-md-6">
//                             <div class="input-item input-with-label">
//                                 <label class="input-item-label">Beneficial Ownership Document (if applicable)</label>
//                                 <input class="input-bordered" type="file" placeholder="Upload Beneficial Ownership Document" />
//                                 <div class="input-note">
//                                 <input type="checkbox" id="skip-beneficial-ownership-document" />
//                                 <label for="skip-beneficial-ownership-document" style={{ fontSize: '17px' }}>Skip this</label>
//                             </div>
//                             </div>
//                         </div>


//                         <div class="col-md-6">
//                             <div class="input-item input-with-label">
//                                 <label class="input-item-label">Trade Licenses (for specific industries or activities)</label>
//                                 <input class="input-bordered" type="file" placeholder="Upload Trade Licenses" />
//                             </div>
//                         </div>


//                         <div class="col-md-6">
//                             <div class="input-item input-with-label">
//                                 <label class="input-item-label">Passport or National ID of authorized signatories, major shareholders, and key management personnel</label>
//                                 <input class="input-bordered" type="file" placeholder="Upload Passport or National ID" />
//                             </div>
//                         </div>


//                         <div class="col-md-6">
//                             <div class="input-item input-with-label">
//                                 <label class="input-item-label">Photograph of business premises or storefront (in some cases)</label>
//                                 <input class="input-bordered" type="file" placeholder="Upload Photograph of Business Premises" />
//                             </div>
//                         </div>

                           
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="form-step form-step2">
//                             <div class="form-step-fields card-innr">
//                                 <div class="gaps-2x"></div>
//                                 <ul class="nav nav-tabs nav-tabs-bordered row flex-wrap guttar-20px" role="tablist">
                                   
//                                 </ul>
//                                 <div class="tab-content" id="myTabContent">
//                                     <div class="tab-pane fade show active" id="passport">
//                                         <h5 class="text-secondary font-bold">To avoid delays when verifying your account, Please make sure that:</h5>
//                                         <ul class="list-check">
//                                             <li>Chosen credential must not be expired.</li>
//                                             <li>Document should be good condition and clearly visible.</li>
//                                             <li>Make sure that there is no light glare on the card.</li>
//                                         </ul>
//                                         <div class="gaps-2x"></div>
                                       
//                                         <div class="row align-items-center">
                                           
//                                             <div class="col-sm-4 d-none d-sm-block">
//                                                 <div class="mx-md-4">
//                                                     <img src="assets/images/vector-passport.png" alt="vector" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
                        
//                         <div class="form-step form-step-final">
//                             <div class="form-step-fields card-innr">
//                                 <div class="input-item">
//                                     <input class="input-checkbox input-checkbox-md" id="term-condition" type="checkbox" />
//                                     <label for="term-condition">I have read the <a href="#">Terms of Condition</a> and <a href="#">Privary Policy.</a></label>
//                                 </div>
//                                 <div class="input-item">
//                                     <input class="input-checkbox input-checkbox-md" id="info-currect" type="checkbox" />
//                                     <label for="info-currect">All the personal information I have entered is correct.</label>
//                                 </div>
//                                 <div class="gaps-1x"></div>
//                                 <Link to="/thankyou" class="btn btn-primary">Process for Verify</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
    
//     <div class="footer-bar">
//         <div class="container">
//             <div class="row align-items-center justify-content-center">
//                 <div class="col-md-8">
//                     <ul class="footer-links">
//                         <li><a href="/#/faqpage">FAQs</a></li>
//                         <li><a href="/#/policy">Privacy Policy</a></li>
//                     </ul>
//                 </div>
//                 <div class="col-md-4 mt-2 mt-sm-0">
//                     <div class="d-flex justify-content-between justify-content-md-end align-items-center guttar-25px pdt-0-5x pdb-0-5x">
//                         <div class="copyright-text">&copy; 2023 Project MUDA KYC Application.</div>
//                         <div class="lang-switch relative">
//                             <a href="#" class="lang-switch-btn toggle-tigger">En <em class="ti ti-angle-up"></em></a>
//                             <div class="toggle-class dropdown-content dropdown-content-up">
//                                 <ul class="lang-list">
//                                     <li><a href="#">Fr</a></li>
//                                     <li><a href="#">Bn</a></li>
//                                     <li><a href="#">Lt</a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
   
//  </div>
      
//     )
//     }


// export default Individualsform
import React, { useState, useRef, useCallback } from 'react'
import Select from 'react-select';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { countries } from 'countries-list'; 
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Webcam from 'react-webcam';
import Companyinformation from  './Companyinformation';
import Uploaddocuments from './Uploaddocuments';
import Submitting from './Submitting';


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

    const [uploadedDocument1, setUploadedDocument1] = useState([]);
const [uploadedDocument2, setUploadedDocument2] = useState([]);

const handleDocument1Upload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
        setUploadedDocument1([...uploadedDocument1, ...files]);
    }
};

const handleDocument2Upload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
        setUploadedDocument2([...uploadedDocument2, ...files]);
    }
};

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

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const formData = new FormData(event.target);

    const formDataJSON = {};
    formData.forEach((value, key) => {
      formDataJSON[key] = value;
    });

    fetch('http://localhost:3002/profile/create-personalkyc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataJSON),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('API Response:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

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
                                     <form action="#" onSubmit={handleSubmit}>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="full-name" class="input-item-label" style={{ fontSize: '17px' }}>Full Name</label>
                                                    <input class="input-bordered" type="text" id="full-name" name="full-name" placeholder=" " />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="input-item input-with-label">
                                        <label for="date-of-birth" class="input-item-label"style= {{ fontSize: '17px', display: 'block' }}>Date of Birth</label>
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
import React, { useState, useRef, useCallback } from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { countries } from 'countries-list'; 
import 'react-phone-number-input/style.css';



function Submitting() {
       const navigate =useNavigate();
       const handleSubmitting = () =>{
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

  
  return (
    <div>
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
    
          )
          }

export default Submitting
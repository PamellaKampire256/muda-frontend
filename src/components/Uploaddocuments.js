import React, { useState, useRef, useCallback } from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { countries } from 'countries-list'; 
import 'react-phone-number-input/style.css';
import Webcam from 'react-webcam';



function Uploaddocuments() {
       const navigate =useNavigate();
       const handleUploaddocuments = () =>{
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
                        <div class="page-content">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-16 col-xl-16">
                                        <div class="kyc-form-steps card mx-lg-4">
                                            <div class="form-step form-step1"> 
                                                <div class="form-step-fields card-innr">
                                                <div class="row"> 
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label class="input-item-label">National ID card OR PASSPORT (both sides)</label>
                                                    <input
                                                    class="input-bordered"
                                                    type="file"
                                                    accept=".pdf, .jpg, .jpeg, .png"
                                                    onChange={handleDocument1Upload}
                                                    multiple
                                                />
                                                    <div>
                                                    {uploadedDocument1.map((document, index) => (
                                        <div key={index}>
                                            <p>Document {index + 1}:</p>
                                            <p>Filename: {document.name}</p>
                                            <p>Size: {document.size} bytes</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="input-item input-with-label">
                                            <label className="input-item-label">Selfie</label>
                                            {showCamera ? (
                                            <div>
                                                <Webcam
                                                audio={false}
                                                ref={webcamRef}
                                                screenshotFormat="image/jpeg"
                                                />
                                                {capturedImage ? (
                                                <div>
                                                    <img src={capturedImage} alt="Captured Selfie" />
                                                    <button onClick={() => setCapturedImage(null)}>Retake Selfie</button>
                                                </div>
                                                ) : (
                                                <div className="input-bordered">
                                                    <button onClick={handleCaptureClick}>Capture Selfie</button>
                                                </div>
                                                )}
                                            </div>
                                            ) : (
                                            <div>
                                                {capturedImage ? (
                                                <div>
                                                    <img src={capturedImage} alt="Captured Selfie" />
                                                    <button onClick={() => setCapturedImage(null)}>Retake Selfie</button>
                                                </div>
                                                ) : (
                                                <div className="input-bordered">
                                                    <button onClick={capture}>Take Selfie</button>
                                                </div>
                                                )}
                                            </div>
                                            )}
                                        </div>
                                        </div>

                                               <div class="col-md-6">
                                                        <div class="input-item input-with-label">
                                                            <label for="proof-of-address" class="input-item-label"style= {{ fontSize: '13px' }}>Proof of Address (e.g. utility bill, bank statement for the business)</label>
                                                            <input class="input-bordered" type="file" id="proof-of-address" name="proof-of-address" placeholder="(e.g. utility bill, bank statement)" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label class="input-item-label">Trade Licenses (for specific industries or activities)</label>
                                                    <input class="input-bordered" type="file" placeholder="Upload Trade Licenses" />
                                                </div>
                                            </div>
                                                </div>
                                                <div class="gaps-1x"></div>
                                        <div class="d-sm-flex justify-content-between align-items-center">
                                            <button class="btn btn-primary" onClick={handleUploaddocuments}>Update documents</button>
                                            <div class="gaps-2x d-sm-none"></div>
                                            <span class="text-success"><em class="ti ti-check-box"></em> All Changes are saved</span>
                                        </div>
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

export default Uploaddocuments
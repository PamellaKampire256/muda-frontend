import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';


function Companyinformation() {
       const navigate = useNavigate();
       const handleCompanyinformation = () =>{
        navigate('/kycform')
       }
      
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

  return (
    <div>
                <div class="page-content">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-16 col-xl-16">
                                <div class="kyc-form-steps card mx-lg-4">
                                    <div class="form-step form-step1">
                                        <div class="form-step-fields card-innr">
                                              <div class="row"> 
                                             <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="business-name" class="input-item-label" style={{ fontSize: '17px' }}>Business License</label>
                                                    <input class="input-bordered" type="text" id="business-licence" name="business-licence" placeholder="Your Business licence" />
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="business-registration-number" class="input-item-label" style={{ fontSize: '17px' }}>Company registration certificate</label>
                                                    <input class="input-bordered" type="text" id="company-registration-certificate" name="company-registration-certicate" placeholder="Your Company registration certificate" />
                                                </div>
                                            </div>
                                            </div>
                                            <div class="d-sm-flex justify-content-between align-items-center">
                                            <button class="btn btn-primary" onClick={handleCompanyinformation}>Update Companyinformation</button>
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

export default Companyinformation
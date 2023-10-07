import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Companyinformation() {
  const [businessLicense, setBusinessLicense] = useState('');
  const [companyRegistrationCertificate, setCompanyRegistrationCertificate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const user_id = localStorage.getItem('user_id');

  const handleCompanyInformation = () => {
    setIsLoading(true);

    const formData = {
      user_id : user_id,
      business_license : businessLicense,
      company_registration_certificate: companyRegistrationCertificate,
    };

    fetch('http://localhost:3002/profile/create-company-details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        setIsLoading(false);
        console.log(response.status)

        if (response.status === 200) {
          toast.success('Company information submitted successfully');
        } else {
          toast.error('Error submitting company information');
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Error submitting company information', error);
        toast.error('Error submitting company information');
      });
  };

  return (
    <div>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-16 col-xl-16">
              <div className="kyc-form-steps card mx-lg-4">
                <div className="form-step form-step1">
                  <div className="form-step-fields card-innr">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-item input-with-label">
                          <label htmlFor="business-name" className="input-item-label" style={{ fontSize: '17px' }}>Business License</label>
                          <input
                            className="input-bordered"
                            type="text"
                            id="business-licence"
                            name="business-licence"
                            placeholder="Your Business licence"
                            value={businessLicense}
                            onChange={(e) => setBusinessLicense(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="input-item input-with-label">
                          <label htmlFor="business-registration-number" className="input-item-label" style={{ fontSize: '17px' }}>Company registration certificate</label>
                          <input
                            className="input-bordered"
                            type="text"
                            id="company-registration-certificate"
                            name="company-registration-certicate"
                            placeholder="Your Company registration certificate"
                            value={companyRegistrationCertificate}
                            onChange={(e) => setCompanyRegistrationCertificate(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <button className="btn btn-primary" onClick={handleCompanyInformation} disabled={isLoading}>
                        Update Company information
                      </button>
                      <div className="gaps-2x d-sm-none"></div>
                      <span className="text-success"><em className="ti ti-check-box"></em> All Changes are saved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Companyinformation;

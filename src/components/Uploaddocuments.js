import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function UploadDocuments() {
  const [isLoading, setIsLoading] = useState(false);
  const user_id = localStorage.getItem('user_id');

  const [formData, setFormData] = useState({
    user_id: user_id,
    national_id_card_or_passport: null,
    selfie: null,
    proof_of_address: null,
    trade_licences: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleUpload = async () => {
    setIsLoading(true)
    const apiUrl = 'http://localhost:3002/upload/upload-files';

    const data = new FormData();
    data.append('national_id_card_or_passport', formData.national_id_card_or_passport);
    data.append('selfie', formData.selfie);
    data.append('proof_of_address', formData.proof_of_address);
    data.append('trade_licences', formData.trade_licences);
    data.append('user_id', formData.user_id);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        toast.success('Files uploaded successfully!');
        setIsLoading(false)
        setFormData({
          ...formData,
          national_id_card_or_passport: null,
          selfie: null,
          proof_of_address: null,
          trade_licences: null,
          user_id: user_id,
        });
      } else {
        setIsLoading(false)
        toast.error('Failed! Upload new files and retry');
      }
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false)
      toast.error('An error occurred while uploading files.');
    }
  };

  return (
    <div>
        <div className="row">
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <label className="input-item-label">National ID card OR PASSPORT (both sides)</label>
              <input
                type="file"
                id="national_id_card_or_passport"
                name="national_id_card_or_passport"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <label className="input-item-label">Selfie (e.g upload the face picture of the person)</label>
              <input type="file" id="selfie" name="selfie" onChange={handleFileChange} />
            </div>
          </div>

          <div className="col-md-6">
            <div className="input-item input-with-label">
              <label htmlFor="proof-of-address" className="input-item-label" style={{ fontSize: '13px' }}>Proof of Address (e.g. utility bill, bank statement for the business)</label>
              <input type="file" id="proof_of_address" name="proof_of_address" onChange={handleFileChange} />
            </div>
          </div>

          <div className="col-md-6">
            <div className="input-item input-with-label">
              <label className="input-item-label">Trade Licenses (for specific industries or activities)</label>
              <input type="file" id="trade_licences" name="trade_licences" onChange={handleFileChange} />
            </div>
          </div>
        </div>

        <div className="gaps-1x"></div>
        <div className="d-sm-flex justify-content-between align-items-center">
            <button className="btn btn-primary" type='submit' onClick={handleUpload} disabled={isLoading}>
              Update documents
            </button>
          <div className="gaps-2x d-sm-none"></div>
          <span className="text-success"><em className="ti ti-check-box"></em> All Changes are saved</span>
        </div>
      <ToastContainer />
    </div>
  );
}

export default UploadDocuments;


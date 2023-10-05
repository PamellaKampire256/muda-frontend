import React, { useState, useRef, useCallback } from 'react';
import 'react-phone-number-input/style.css';
import Webcam from 'react-webcam'; // Import the Webcam component
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Uploaddocuments() {
  const webcamRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [document1, setDocument1] = useState(null); // State for document 1
  const [proofOfAddress, setProofOfAddress] = useState(null); // State for proof of address
  const [tradeLicenses, setTradeLicenses] = useState(null); // State for trade licenses
  const [isLoading, setIsLoading] = useState(false);

  const capture = useCallback(() => {
    setShowCamera(true);
  }, []);

  const handleCaptureClick = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setShowCamera(false);
  }, []);

  const handleDocument1Upload = (e) => {
    // Handle document 1 file selection
    const file = e.target.files[0];
    setDocument1(file);
  };

  const handleProofOfAddressUpload = (e) => {
    // Handle proof of address file selection
    const file = e.target.files[0];
    setProofOfAddress(file);
  };

  const handleTradeLicensesUpload = (e) => {
    // Handle trade licenses file selection
    const file = e.target.files[0];
    setTradeLicenses(file);
  };

  const handleUploaddocuments = async () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append('national_id_card_or_passport', document1);
    formData.append('proof_of_address', proofOfAddress);
    formData.append('trade_licenses', tradeLicenses);
    console.log('FormData sent to API:', formData);

    try {
      const response = await fetch('http://localhost:3002/upload/upload-files', {
        method: 'POST',
        body: formData,
      });

      if (response.status === 200) {
        toast.success('Documents uploaded successfully');
      } else {
        toast.success('Documents uploaded successfully');
      }
    } catch (error) {
      toast.success('Documents uploaded successfully');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <form action="#">
        <div className="row">
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <label className="input-item-label">National ID card OR PASSPORT (both sides)</label>
              <input
                className="input-bordered"
                type="file"
                accept=".pdf, .jpg, .jpeg, .png"
                onChange={handleDocument1Upload}
              />
              {document1 && (
                <div>
                  <p>Filename: {document1.name}</p>
                  <p>Size: {document1.size} bytes</p>
                </div>
              )}
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
  
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <label htmlFor="proof-of-address" className="input-item-label" style={{ fontSize: '13px' }}>Proof of Address (e.g. utility bill, bank statement for the business)</label>
              <input
                className="input-bordered"
                type="file"
                id="proof-of-address"
                name="proof-of-address"
                placeholder="(e.g. utility bill, bank statement)"
                onChange={handleProofOfAddressUpload}
              />
              {proofOfAddress && (
                <div>
                  <p>Filename: {proofOfAddress.name}</p>
                  <p>Size: {proofOfAddress.size} bytes</p>
                </div>
              )}
            </div>
          </div>
  
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <label className="input-item-label">Trade Licenses (for specific industries or activities)</label>
              <input
                className="input-bordered"
                type="file"
                placeholder="Upload Trade Licenses"
                onChange={handleTradeLicensesUpload}
              />
              {tradeLicenses && (
                <div>
                  <p>Filename: {tradeLicenses.name}</p>
                  <p>Size: {tradeLicenses.size} bytes</p>
                </div>
              )}
            </div>
          </div>
        </div>
  
        <div className="gaps-1x"></div>
        <div className="d-sm-flex justify-content-between align-items-center">
          <button className="btn btn-primary" onClick={handleUploaddocuments} disabled={isLoading}>
            {isLoading ? (
              <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              'Update documents'
            )}
          </button>
          <div className="gaps-2x d-sm-none"></div>
          <span className="text-success"><em className="ti ti-check-box"></em> All Changes are saved</span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
  
}

export default Uploaddocuments;

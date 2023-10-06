import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UploadDocuments() {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
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
    const apiUrl = 'http://localhost:3002/profile/create-personalkyc';

    const data = new FormData();
    data.append('national_id_card_or_passport', formData.national_id_card_or_passport);
    data.append('selfie', formData.selfie);
    data.append('proof_of_address', formData.proof_of_address);
    data.append('trade_licences', formData.trade_licences);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Files uploaded successfully!');
        setFormData({
          ...formData,
          national_id_card_or_passport: null,
          selfie: null,
          proof_of_address: null,
          trade_licences: null,
        });
      } else {
        alert('Failed to upload files.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while uploading files.');
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
                type="file"
                id="national_id_card_or_passport"
                name="national_id_card_or_passport"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <label className="input-item-label">Selfie</label>
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
          <button className="btn btn-primary" onClick={handleUpload} disabled={isLoading}>
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

export default UploadDocuments;





// vooggiigigigiiiiiiigg
// import React, { useState } from 'react';

// const FileUpload = () => {
//   const [formData, setFormData] = useState({
//     national_id_card_or_passport: null,
//     selfie: null,
//     proof_of_address: null,
//     trade_licences: null,
//   });

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files[0],
//     });
//   };

//   const handleUpload = async () => {
//     const apiUrl = 'http://localhost:3002/upload/upload-files';

//     const data = new FormData();
//     data.append('national_id_card_or_passport', formData.national_id_card_or_passport);
//     data.append('selfie', formData.selfie);
//     data.append('proof_of_address', formData.proof_of_address);
//     data.append('trade_licences', formData.trade_licences);

//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         body: data,
//       });

//       if (response.ok) {
//         alert('Files uploaded successfully!');
//         // Clear the form
//         setFormData({
//           national_id_card_or_passport: null,
//           selfie: null,
//           proof_of_address: null,
//           trade_licences: null,
//         });
//       } else {
//         alert('Failed to upload files.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while uploading files.');
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Documents</h2>
//       <div>
//         <label htmlFor="national_id_card_or_passport">National ID Card or Passport:</label>
//         <input
//           type="file"
//           id="national_id_card_or_passport"
//           name="national_id_card_or_passport"
//           onChange={handleFileChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="proof_of_address">selfie:</label>
//         <input type="file" id="selfie" name="selfie" onChange={handleFileChange} />
//       </div>
//       <div>
//         <label htmlFor="proof_of_address">Proof of Address:</label>
//         <input type="file" id="proof_of_address" name="proof_of_address" onChange={handleFileChange} />
//       </div>
//       <div>
//         <label htmlFor="trade_licences">Trade Licences:</label>
//         <input type="file" id="trade_licences" name="trade_licences" onChange={handleFileChange} />
//       </div>
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

// export default FileUpload;


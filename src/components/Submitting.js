import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Submitting() {
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    if (isChecked) {
      // Prevent multiple submissions
      if (isSubmitting) return;

      setIsSubmitting(true);

      const user_id = localStorage.getItem('user_id');

      if (user_id) {
        fetch('http://16.16.27.213:3002/profile/activate-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id }),
        })
          .then((response) => {
            if (response.ok) {
              toast.success('User information and documents submitted successfully successfully');
              console.log('User status updated successfully');
            } else {
              toast.error('Error updating user status');
              console.error('Error updating user status');
            }
          })
          .catch((error) => {
            toast.error('Network error');
            console.error('Network error:', error);
          })
          .finally(() => {
            setIsSubmitting(false);
          });
      } else {
        toast.error('User_id not found in localStorage');
        console.error('User_id not found in localStorage');
      }
    }
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-item input-with-label">
            <label htmlFor="submit-application-business" className="input-item-label">
              Confirm Details and Submit
            </label>
            <div className="input-note">
              <input
                type="checkbox"
                id="skip-business-website"
                checked={isChecked}
                onChange={handleCheckboxChange}
                disabled={isSubmitting} // Disable the checkbox while submitting
              />
              <label htmlFor="skip-business-website" style={{ fontSize: '17px' }}>
                I am ready to submit
              </label>
            </div>
            <p>Please review the confirmed details and ensure that all information is accurate.</p>
            <p>If everything is correct, click the "Submit Application" button to complete the process.</p>
            <button className="btn btn-primary" onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'} {/* Display "Submitting..." while submitting */}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default Submitting;

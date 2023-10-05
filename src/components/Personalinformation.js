import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { countries } from 'countries-list';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Personalinformation() {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [nationality, setNationality] = useState(null);
  const [address, setAddress] = useState('');
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [taxIdentificationNumber, setTaxIdentificationNumber] = useState('');
  const [sourceOfFunds, setSourceOfFunds] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      full_name: fullName,
      date_of_birth: dateOfBirth ? dateOfBirth.toISOString() : null,
      nationality: nationality ? nationality.value : null,
      address,
      id_number: identificationNumber,
      phone_number: phoneNumber,
      email_address: emailAddress,
      tax_id_number: taxIdentificationNumber,
      source_of_funds: sourceOfFunds,
    };

    try {
      const response = await fetch('http://16.16.27.213:3002/profile/create-personalkyc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        toast.success('Personal information submitted successfully');
      } else {
        toast.error('Error submitting personal information');
      }
    } catch (error) {
      console.error('Error submitting personal information', error);
      toast.error('Error submitting personal information');
    } finally {
      setIsLoading(false);
    }
  };

  const countryOptions = Object.keys(countries).map((countryCode) => ({
    value: countryCode,
    label: countries[countryCode].name,
  }));

  return (
    <div>
    <ToastContainer />
      <form action="#" onSubmit={handleSubmit}>
            <div class="row">
                <div class="col-md-6">
                    <div class="input-item input-with-label">
                        <label for="full-name" class="input-item-label" style={{ fontSize: '17px' }}>Full Name</label>
                        <input class="input-bordered" type="text" id="full-name" name="full-name" placeholder=" " onChange={(e) => setFullName(e.target.value)} />
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
                    <Select options={countryOptions} placeholder="Select your nationality" onChange={setNationality} />
                </div>
            </div>
            <div class="col-md-6">
                <div class="input-item input-with-label">
                    <label for="address" class="input-item-label" style={{ fontSize: '17px' }}>Address</label>
                    <input class="input-bordered" type="text" id="address" name="address" placeholder="Your Address" onChange={(e) => setAddress(e.target.value)} />
                </div>
            </div>
                
            <div class="col-md-6">
            <div class="input-item input-with-label">
                <label for="identification-number" class="input-item-label" style={{ fontSize: '17px' }}>Identification Number</label>
                <input class="input-bordered" type="text" id="identification-number" name="identification-number" placeholder="(e.g. SSN, National Insurance Number,Aadhaar Number)" onChange={(e) => setIdentificationNumber(e.target.value)} />
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
                <input class="input-bordered" type="text" id="email-address" name="email-address" placeholder="info@softnio.com" disabled="" onChange={(e) => setEmailAddress(e.target.value)} />
            </div>
            </div>
                
            <div class="col-md-6">
                <div class="input-item input-with-label">
                    <label for="tax-identification-number" class="input-item-label" style={{ fontSize: '17px' }}>Tax Identification Number (TIN)</label>
                    <input class="input-bordered" type="text" id="tax-identification-number" name="tax-identification-number" placeholder="Your TIN" onChange={(e) => setTaxIdentificationNumber(e.target.value)} />
                </div>
            </div>
            <div class="col-md-6">
                <div class="input-item input-with-label">
                    <label for="source-of-funds" class="input-item-label" style={{ fontSize: '17px' }}>Source of Funds</label>
                    <input class="input-bordered" type="text" id="source-of-funds" name="source-of-funds" placeholder="Your Source of Funds" onChange={(e) => setSourceOfFunds(e.target.value)} />
                </div>
            </div>                                        
            </div>
            <div class="gaps-1x"></div>
            <div class="d-sm-flex justify-content-between align-items-center">
            <button className="btn btn-primary" disabled={isLoading}>
              {isLoading ? (
                <div className="spinner-border text-light" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                'Update Profile'
              )}
            </button>
                <div class="gaps-2x d-sm-none"></div>
                <span class="text-success"><em class="ti ti-check-box"></em> All Changes are saved</span>
            </div>
        </form>
    </div>
  );
}

export default Personalinformation;

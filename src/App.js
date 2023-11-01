import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Signupsuccess from './components/Signupsuccess';
import Thankyou from './components/Thankyou';
import Error from './components/Error';
import Emailverified from './components/Emailverified';
import Forgotpassword from './components/Forgotpassword';
import Faqpage from './components/Faqpage';
import Kycapplication from './components/Kycapplication';
import Kycdetails from './components/Kycdetails';
import Profile from './components/Profile';
import Kycform from './components/Kycform';
import Kyclist from './components/Kyclist';
import Policy from './components/Policy';
import Userdetails from './components/Userdetails';
import Userlist from './components/Userlist';
import Individualsform from './components/Individualsform';
import Companyinformation from './components/Companyinformation';
import Submitting from './components/Submitting';
import Uploaddocuments from './components/Uploaddocuments';
import { Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    
    <Routes>
    <Route path='/' element= {<Login />} />
    <Route path='/Profile' element= {<Profile />} />
    <Route path='/register' element= {<Register />} />
    <Route path='/signupsuccess' element= {<Signupsuccess />} />
    <Route path='/thankyou' element= {<Thankyou />} />
    <Route path='/error' element= {<Error />} />
    <Route path='/emailverified' element= {<Emailverified/>} />
    <Route path='/forgotpassword' element= {<Forgotpassword />} />
    <Route path='/faqpage' element= {<Faqpage />} />
    <Route path='/kycapplication' element= {<Kycapplication />} />
    <Route path='/kycdetails' element= {<Kycdetails />} />
    <Route path='/kycform' element= {<Kycform />} />
    <Route path='/kyclist' element={<Kyclist />} />
    <Route path='/policy' element={<Policy />} />
    <Route path='/userdetails/:userId' element={<Userdetails />} />
    <Route path='/userlist' element={<Userlist />} />
    <Route path='/individualsform' element={<Individualsform />} />
    <Route path='/companyinformation' element={<Companyinformation />} />
    <Route path='/submitting' element={<Submitting />} />
    <Route path='/uploaddocuments' element={<Uploaddocuments />} />
  </Routes>
  );
}

export default App;

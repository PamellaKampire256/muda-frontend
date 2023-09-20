import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Check if there are saved credentials in local storage
    const savedEmail = localStorage.getItem('rememberedEmail');
    const savedPassword = localStorage.getItem('rememberedPassword');

    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const form = event.target;

    const userCredentials = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (rememberMe) {
      // Save the email and password in local storage
      localStorage.setItem('rememberedEmail', userCredentials.email);
      localStorage.setItem('rememberedPassword', userCredentials.password);
    } else {
      // Clear the saved email and password from local storage
      localStorage.removeItem('rememberedEmail');
      localStorage.removeItem('rememberedPassword');
    }

    try {
      const response = await fetch('http://localhost:3002/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
      });

      if (response.ok) {
        console.log('User has been logged in');
        navigate('/profile');
      } else {
        const errorData = await response.json();
        console.error('Error logging in:', errorData.error);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <div className="page-ath-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div className="page-ath-content">
          <div className="page-ath-header">
            <a href="/#/" className="page-ath-logo">
              <img src="assets/images/avatar8.png" srcSet="assets/images/avatar9.png 2x" alt="logo" style={{ width: '250px', height: 'auto' }} />
            </a>
          </div>
          <div className="page-ath-form">
            <h2 className="page-ath-heading">Sign in <small>with your MUDA Account</small></h2>
            <form onSubmit={handleLogin}>
              <div className="input-item">
                <input type="text" name="email" placeholder="Your Email" className="input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="input-item">
                <input type="password" name="password" placeholder="Password" className="input-bordered" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="input-item text-left">
                <input className="input-checkbox input-checkbox-md" id="remember-me" type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
                <label htmlFor="remember-me">Remember Me</label>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Sign In</button>
            </form>
            <ul className="row guttar-20px guttar-vr-20px">
            </ul>
            <div className="gaps-2x"></div>
            <div className="gaps-2x"></div>
            <div className="form-note">
              Don’t have an account? <Link to="/register"> <strong>Sign up here</strong></Link>
            </div>
          </div>
          <div className="page-ath-footer">
            <ul className="footer-links">
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

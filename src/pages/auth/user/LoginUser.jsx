import React, { useState } from 'react';
import './Login.css';
import HeaderLogin from '../../../components/HeaderLogin';

const LoginUser = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = '/'; 
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/login';
  };

  return (
    <>
      <div className={`page-login container-main ${isRightPanelActive ? 'right-panel-active' : ''}`}>
        <div className="page-login container-signup" id="main">
          <div className="page-login sign-up">
            <form onSubmit={handleSignupSubmit}>
              <h1 className="page-login heder">Sign Up</h1>
              <input type="text" name="txt" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="pass" placeholder="Password" required />
              <input type="password" name="passConfirm" placeholder="Confirm Password" required />
              <p>or sign up with</p>
              <div className="page-login container-social">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
              </div>
              <button className="page-login fix" type="submit">Sign Up</button>
            </form>
          </div>
          <div className="page-login log-in">
            <form onSubmit={handleLoginSubmit}>
              <h1 className="page-login heder">Log In</h1>
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="pass" placeholder="Password" required />
              <p>or Log in with</p>
              <div className="page-login container-social">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
              </div>
              <a href="#">Forgot your Password?</a>
              <button className="page-login fix" type="submit">Log In</button>
            </form>
          </div>
          <div className="page-login container-overlay">
            <div className="page-login overlay">
              <div className="page-login overlay-left">
                <h1>Already Have an Account?</h1>
                <button onClick={() => setIsRightPanelActive(false)} id="login">Log in</button>
              </div>
              <div className="page-login overlay-right">
                <h1>Don't Have an Account?</h1>
                <button onClick={() => setIsRightPanelActive(true)} id="signup">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginUser;

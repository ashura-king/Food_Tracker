import React, { useState } from "react";
import '../../Design/Register.css';

function AuthForm({ defaultMode = "register", onClose }) {
  const [isRegister, setIsRegister] = useState(defaultMode === "register");

  return (
    <div className="form-container">
      {/* Close button */}
      <button className="close-btn" onClick={onClose}>✖</button>

      {/* Title */}
      <p className="title">{isRegister ? "Create account" : "Log in"}</p>

      {/* Form */}
      <form className="form">
        {isRegister && <input type="text" className="input" placeholder="Name" />}
        <input type="email" className="input" placeholder="Email" />
        <input type="password" className="input" placeholder="Password" />
        <button type="submit" className="form-btn">
          {isRegister ? "Create account" : "Log in"}
        </button>
      </form>

      {/* Toggle register/login */}
      <p className="sign-up-label">
        {isRegister ? "Already have an account?" : "Don't have an account?"}
        <span
          className="sign-up-link"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? " Log in" : " Sign up"}
        </span>
      </p>

      {/* Social login buttons */}
      <div className="buttons-container">
        <div className="apple-login-button">
          <span className="apple-icon"><img src="/Logo/facebook.png"  className="icon-image" /></span> Continue with Facebook
        </div>
        <div className="google-login-button">
          <span className="google-icon"><img src="/Logo/google.png" className="icon-image" /></span> Continue with Google
        </div>
      </div>
    </div>
  );
}

export default AuthForm;

import React, { useState } from "react";
import '../../Design/Register.css';

function AuthForm({ defaultMode = "register", onClose }) {
  const [isRegister, setIsRegister] = useState(defaultMode === "register");

  return (
    <div className="form-container">
      <p className="title">{isRegister ? "Create account" : "Log in"}</p>

      <form className="form">
        {isRegister && <input type="text" className="input" placeholder="Name" />}
        <input type="email" className="input" placeholder="Email" />
        <input type="password" className="input" placeholder="Password" />
        <button type="submit" className="form-btn">
          {isRegister ? "Create account" : "Log in"}
        </button>
      </form>

      <p className="sign-up-label">
        {isRegister ? "Already have an account?" : "Don't have an account?"}
        <span className="sign-up-link" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? " Log in" : " Sign up"}
        </span>
      </p>

      <button className="close-btn" onClick={onClose}>✖</button>
    </div>
  );
}

export default AuthForm;

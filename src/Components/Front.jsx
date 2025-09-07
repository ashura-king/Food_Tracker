import {  useEffect, useState } from 'react';
import Logo from "../assets/food.svg";
import Pattern from '../assets/back2.svg';
import { useNavigate } from 'react-router-dom';
import '../Design/Front.css';
import '../Design/Modal.css';


import AuthForm from './Auth/Register';

function Front() {
  const navigate = useNavigate();
  const [showauth, setShowAuth] = useState(false)
  const[authMode, setAuthMode] = useState("login");
const handleGetStarted=() =>{
  console.log("Get Started clicked");
  navigate("/dashboard");
}
  
  useEffect(() => {
    const handleDragStart = (e) =>  e.preventDefault();
    document.addEventListener('dragstart', handleDragStart);
    return () => {
      document.removeEventListener('dragstart', handleDragStart);
     
    };
  }, []);


  return (
    <>
      {/*this is pattern section */}
    <div className="pattern" style ={{backgroundImage: `url(${Pattern})`}}></div>
    <div className="header">
      
        {/*this is login and register section */}
      <div className="auth-buttons">
        <button onClick={() => {setAuthMode("login"); setShowAuth(true)}}>Login</button>
        <button onClick={()=> {setAuthMode("register"); setShowAuth(true)}}>Register</button>
      </div>
    </div>

      <div className="container">
          {/*this is logo and Title */}
        <img src={Logo} alt="Food Logo" className="logo" />
        <h1 className="title">Fresh Guard</h1>
        <p className="qoute">Stay fresh, stay safe track it with Fresh Guard.</p>
        <button className="get-started" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
     {showauth &&(
      <div className="modal-overlay">
        <AuthForm
        defaultMode={authMode}
        onClose ={() => setShowAuth(false)}
        />
      </div>
     )}
        {/*this is carousel ection  2*/}
     <div className="carousel-space">
            {/*this is logo section  2*/}
        <div className="logos">
          <div className="logos-slide">
          <img src="/Logo/Bounty.png" alt="Bounty" />
          <img src="/Logo/Jollibee.png" alt="Jollibee" />
         <img src="/Logo/Lemon.png" alt="Lemon" />
         <img src="/Logo/Nestle.png" alt="Nestle" />
         <img src="/Logo/Nissin.png" alt="Nissin" />
        <img src="/Logo/Luckyme.png" alt="LuckyMe" />
        <img src="/Logo/Nutri.png" alt="Nutri" />
        <img src="/Logo/CDO.png" alt="Nutri" />
        <img src="/Logo/Century.png" alt="Nutri" />
        <img src="/Logo/Sanmig.png" alt="Nutri" />

         {/*this is logo section  2*/}
          </div>
            <div className="logos-slide">
         <img src="/Logo/Bounty.png" alt="Bounty" />
          <img src="/Logo/Jollibee.png" alt="Jollibee" />
         <img src="/Logo/Lemon.png" alt="Lemon" />
         <img src="/Logo/Nestle.png" alt="Nestle" />
         <img src="/Logo/Nissin.png" alt="Nissin" />
        <img src="/Logo/Luckyme.png" alt="LuckyMe" />
        <img src="/Logo/Nutri.png" alt="Nutri" />
        <img src="/Logo/CDO.png" alt="Nutri" />
        <img src="/Logo/Century.png" alt="Nutri" />
        <img src="/Logo/Sanmig.png" alt="Nutri" />
          </div>
        </div>
      </div>
       {/*this is logo about-section*/}
    <div className="about">
  <h2 className="about-title">What Fresh Guard Offers</h2>
  <div className="about-grid">
  <div className="about-item">
    <div className="mascot">
      <img src="/Logo/happy.png" alt="Mascot" />
    </div>
    <h3>Track Food Expiry</h3>
    <p>Stay notified before your food goes bad.</p>
  </div>
   {/*this is about section-item */}
  <div className="about-item">
    <div className="mascot">
      <img src="/Logo/smile.png" alt="Mascot" />
    </div>
    <h3>Smart Reminders</h3>
    <p>Get alerts for items nearing expiration.</p>
  </div>

  <div className="about-item">
    <div className="mascot">
      <img src="/Logo/like.png" alt="Mascot" />
    </div>
    <h3>Save Money</h3>
    <p>Reduce waste and save on groceries.</p>
  </div>
</div>
</div>

<div className="how-works">
<h1 className="how-title">How it Works</h1>
  <div className="how-steps">
    <div className="step">
      <img src="/Logo/Enter.png" alt="" className="step-icon" />
      <h3>Enter Food Item</h3>
      <p>Input food name and its expiration date</p>
    </div>

    <div className="step">
      <img src="/Logo/Track.png" alt="" className="step-icon" />
      <h3>Track Expiry Date</h3>
      <p>Fresh Guard stores your item and keeps track of it.</p>
    </div>

    <div className="step">
      <img src="/Logo/Reminder.png" alt="" className="step-icon" />
      <h3>Get Reminder</h3>
      <p>Recieve alert before your food goes bad.</p>
    </div>
  </div>
</div>

{/* CTA with Statistics */}
<div className="cta-stats">
  <div className="cta-stats-grid">
    <div className="cta-stat">
      <div className="cta-stat-number">10K+</div>
      <div className="cta-stat-label">Active Users</div>
    </div>
    <div className="cta-stat">
      <div className="cta-stat-number">₱50K</div>
      <div className="cta-stat-label">Money Saved</div>
    </div>
    <div className="cta-stat">
      <div className="cta-stat-number">99%</div>
      <div className="cta-stat-label">Satisfaction Rate</div>
    </div>
  </div>
  <h2 className="cta-title">Join the Fresh Guard Community</h2>
  <button className="cta-primary" onClick={handleGetStarted}>
    Start Tracking Food
  </button>



</div>





    </>
  );
}

export default Front;
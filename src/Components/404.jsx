// src/pages/NotFound.jsx
import React from "react";
import "../Design/404.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oops! Page not found 🍩</p>
      <img
        src="/Logo/herogreen.png"
        alt="Bouncing donut"
        className="bouncing-food"
      />
      <a href="/" className="home-btn">Go Home</a>
    </div>
  );
}

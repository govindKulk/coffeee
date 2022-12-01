import React from "react";
import './header.css';
// import logo from '../../assets/images/logo.png';

export default function Header(){
    return(
        <>
  <div className="support">
    <div className="contacts">
      <span>
        <a href="mailto:info@navchetana.com" className="mail-link">sdcr20182019@gmail.com</a>
      </span>
      <span>
        <i className="fa-solid fa-phone" />
        <a href="callto:+9188767608383"> +917003604817</a>
      </span>
    </div>
    <div className="donate">
      <button className="donate-btn" onclick="location.href='donate.html'">Donate Now</button>
    </div>
  </div>
  <div className="header">
    <div className="nav-brand">
        
      <img src='/img/logo.png' alt="sdcr logo" className="logo" />
      <div className="tagline">
        <span>By the people</span>
        <br />
        <span>For the people</span>
      </div>
    </div>
    <div className="nav-text">
      <h2>Society For Disease Control And Research </h2>
    </div>
  </div>
</>
    )
}
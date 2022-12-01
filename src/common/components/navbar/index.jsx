import React from "react";
import './navbar.css';
import './script.js';

export default function Navbar(){
  
    return(
        <>
  <div className="navbar">
    <ul className="nav-list">
      <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
      <li className="nav-item"><a href="/about" className="nav-link">About Us</a></li>
      <li className="nav-item"><a href="/gallery" className="nav-link">Gallery</a></li>
      <li className="nav-item"><a href="/memo.html" className="nav-link">Report</a></li>
      <li className="nav-item"><a href="/members.html" className="nav-link">Executive Members</a></li>
      <li className="nav-item"><a href="/donate.html" className="nav-link">Donate</a></li>
      <li className="nav-item"><a href="/membership.html" className="nav-link">Membership</a></li>
    </ul>
  </div>
  <div className="mobile-navbar">
    <div className="ham">
      <div className="open-btn">
        <i className="fa-solid fa-bars fa-2x" onClick="toggle()" />
      </div>
      <div className="close-btn display-none">
        <i className="fa-solid fa-xmark display-none fa-2x" onClick="toggle()" />
      </div>
    </div>
    <ul className="mobile-nav-list display-none">
      <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
      <li className="nav-item"><a href="/about" className="nav-link">About Us</a></li>
      <li className="nav-item"><a href="/gallery" className="nav-link">Gallery</a></li>
      <li className="nav-item"><a href="/memo.html" className="nav-link">Report</a></li>
      <li className="nav-item"><a href="/members.html" className="nav-link">Executive Members</a></li>
      <li className="nav-item"><a href="/donate.html" className="nav-link">Donate</a></li>
    </ul>
  </div>
</>

    )
}
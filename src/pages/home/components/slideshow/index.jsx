import React from "react";

import "./slideshow.css";

export default function Slideshow() {
  // let num = [01,02,03,04,05,06,07];
  let slideIndex = 0;
  document.addEventListener('DOMContentLoaded', showSlides)
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }

  return (
    <>
      <ul id="slideshow-container">
        <div className="heading">
          <h1>Image Gallery</h1>
        </div>
        <div className="mySlides fade">
          <div className="numbertext">1 / 8</div>
          <img src="img/banner images/01.jpg" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <div className="numbertext">2 / 8</div>
          <img
            src="img/banner images/02.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="mySlides fade">
          <div className="numbertext">3 / 8</div>
          <img src="img/banner images/3.jpg" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <div className="numbertext">4 / 8</div>
          <img src="img/banner images/04.jpg" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <div className="numbertext">5 / 8</div>
          <img src="img/banner images/05.jpg" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <div className="numbertext">6 / 8</div>
          <img src="img/banner images/01.jpg" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <div className="numbertext">7 / 8</div>
          <img src="img/banner images/07.jpg" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <div className="numbertext">8 / 8</div>
          <img src="img/banner images/08.jpg" style={{ width: "100%" }} />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </ul>
    </>
  );
}

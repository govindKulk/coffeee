import React from "react";
import "./contact.css";
export default function Contact() {
  return (
    <div className="about-goals contact-section">
      <h1 align="center">Contact Us</h1>
      <div className="contact-parent">
        <div className="contact-child">
          <div className="content">
            <i className="fa-solid fa-location-dot fa-2x" />
            126/N,
            <br />
            West Kodalia,
            <br />
            New Barrackpore,
            <br />
            Kolkata, West Bengal <br />
            India.
          </div>
          <div className="address-img">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.260352259675!2d88.4323209!3d22.68135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89ee710000001%3A0x762cbd8b328414ee!2sSociety%20for%20Disease%20Control%20and%20Research!5e0!3m2!1sen!2sin!4v1668523808847!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              width={350}
              height={310}
            />
          </div>
        </div>
        <div className="contact-child contact-digital">
          <div className="phones">
            Phone:&nbsp; <a href="tel:+917003604817"> +91&nbsp;7003604817 </a>
            <br />
            <a href="tel:+9198048600637"> +91&nbsp;9804860063 </a>
            <br />
          </div>
          <div className="email">
            Email:
            <a href="mailto:info@sdcrn.com">&nbsp; sdcr20182019@gmail.com</a>
          </div>
        </div>
        <ul className="social">
          {/* <div class="dark-btn" id="darkBtn">
                  <i class="fa-sharp fa-solid fa-circle-half-stroke fa-3x"></i>
              </div> */}
          <li className="facebook">
            <a
              href="https://www.facebook.com/Navachetna/about/?ref=page_internal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-brands fa-facebook fa-3x scale"
                style={{ width: "100%" }}
              />
            </a>
          </li>
          <li className="linkedin">
            <a
              href="https://www.linkedin.com/company/society-for-disease-control-research/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in fa-3x" />
            </a>
          </li>
          <li className="twitter">
            <a
              href="http://https://www.twitter.com/Navachetna/about/?ref=page_internal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter fa-3x scale" />
            </a>
          </li>
          <li className="instagram">
            <a href="https://www.instagram.com/sdcrngo/?hl=en" target="_blank">
              <i className="fa-brands fa-instagram fa-3x scale" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

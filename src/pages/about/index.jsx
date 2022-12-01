import './about.css'
import React from "react";
import Contact from "../../common/components/contact";
import Header from "../../common/components/header";
import Navbar from "../../common/components/navbar";

export default function About() {
  return (
    <>
      
      
        <div className="about-container">
          <div className="about-head">
            <p className="head" align="center">
              Who We Are?
            </p>
            <div className="about-item-content">
              <div className="sub-head">
                {/* <p style="font-size: 3rem; font-weight: 1000; color: red; margin-top: 1rem;">
                      Who We <br>Are? <br>
                  </p> */}
                <p align="left">
                  Society for Disease Control and Research is a research based
                  charity in India directly benefitting over 10K+ people every
                  year,through more than 300 live welfare projects on
                  healthcare, livelihood, education and women empowerment in
                  over 60 remote villages and slums across 4 states of India.
                </p>
              </div>
              <div className="cover-img">
                <img src="/img/logo.png" alt="" />
              </div>
            </div>
          </div>
          <div className="about-head about-work">
            <p className="head" align="center">
              What We Do
            </p>
            <div className="about-item-content">
              <div className="sub-head">
                {/* <p style="font-size: 3rem; font-weight: 1000; color: red; margin-top: 1rem;">
                      What We <br>Do <br>
                  </p> */}
                <p align="left">
                  Society for Disease Control and Research arranges health camps
                  and awareness programmes in various places including rural
                  areas. It also organises lots of academic seminars and
                  workshops for medical students.
                </p>
              </div>
              <div className="cover-img">
                <img src="/img/logo.png" alt="" />
              </div>
              <div className="buttons">
                <button
                  className="know-more"
                  onclick="window.location.href='https://sdcr.netlify.app/gallery.html';"
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
          {/* causes  */}
          <div className="causes">
            <div className="cause">
              <div className="cause-img">
                <img src="/img/about-card-bg-1.png" alt="poor children photo" />
              </div>
              <div className="cause-head">
                <h2>Street Children Project </h2>
              </div>
              <div className="cause-content">
                <p>
                  Since our founding, we have committed ourselves to stand with
                  the children who are living on the streets full-time.The
                  Street Children Project aims at improving the health, welfare
                  and quality of life of street children. The focus of the
                  project is on preventing Malnutrition and developing healthy
                  lifestyle among street children
                </p>
              </div>
              <div className="meter">
                <meter value="0.5" />
              </div>
              <div className="cause-donate">
                <a href="/donate.html">
                  Donate <i className="fa-solid fa-heart fa-2x" />
                </a>
              </div>
            </div>
            <div className="cause">
              <div className="cause-img">
                <img src="/img/about-card-bg-2.png" alt="poor children photo" />
              </div>
              <div className="cause-head">
                <h2>Health Development Project </h2>
              </div>
              <div className="cause-content">
                <p>
                  Health examinations and tests at the early stages of the
                  illness can help to cure it faster and save a life before it
                  can cause any damage. We organise medical camps for free
                  medicins and treatment for well being.The main focus of these
                  medical camps are to carry out a limited health intervention
                  amongst the underprivileged community.
                </p>
              </div>
              <div className="meter">
                <meter value="0.7" />
              </div>
              <div className="cause-donate">
                <a href="/donate.html">
                  Donate <i className="fa-solid fa-heart fa-2x" />
                </a>
              </div>
            </div>
            <div className="cause">
              <div className="cause-img">
                <img src="/img/about-card-bg-3.png" alt="poor children photo" />
              </div>
              <div className="cause-head">
                <h2>Thalassemia prevention Project </h2>
              </div>
              <div className="cause-content">
                <p>
                  Thalassemia is an inherited blood disorder in which the body
                  is unable to make adequate hemoglobin. We conduct awareness
                  camps and programs so that we can get the blood from the Youth
                  and the society will come to know about thalassemia. We are
                  also creating importance of HBA2 Test.{" "}
                </p>
              </div>
              <div className="meter">
                <meter value="0.3" />
              </div>
              <div className="cause-donate">
                <a href="/donate.html">
                  Donate <i className="fa-solid fa-heart fa-2x" />
                </a>
              </div>
            </div>
          </div>
          {/* goals section */}
         
         
          
        </div>
      
   
    </>
  );
}

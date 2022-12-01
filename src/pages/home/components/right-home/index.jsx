import React from "react";
import "./right-home.css";

const RightHome = () => {
  return (
    <div className="news-events">
      <div className="heading">
        <h1>News &amp; Events</h1>
      </div>
      <marquee behavior="scroll" direction="up" scrollamount={4}>
        <p>
          <img src="/img/banner images/news.gif" alt="" />
          1. We are working on HIV&amp;TB
        </p>
        <p>
          <img src="/img/banner images/news.gif" alt="" />
          2. We are working on HIV&amp;TB
        </p>
        <p>
          <img src="/img/banner images/news.gif" alt="" />
          3. We are working on HIV&amp;TB
        </p>
        <p>
          <img src="/img/banner images/news.gif" alt="" />
          4. We are working on HIV&amp;TB
        </p>
      </marquee>
      <div className="upcoming">
        <div className="heading">
          <h1>Upcoming Events</h1>
        </div>
        <marquee behavior="scroll" direction="up" scrollamount={4}>
          <p>
            <a href="#">1. July 2018 at Galaghata. </a>
          </p>
          <p>
            <a href="#">2. July 2018 at Galaghata. </a>
          </p>
          <p>
            <a href="#">3. July 2018 at Galaghata. </a>
          </p>
          <p>
            <a href="#">4. July 2018 at Galaghata. </a>
          </p>
        </marquee>
      </div>
    </div>
  );
};

export default RightHome;

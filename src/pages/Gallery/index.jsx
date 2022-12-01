import React from "react";
import Video from "./components/video";
// import Video from "./components/video";
import './gallery.css'
export default function Gallery() {
  return (
    <>
      <div>
        <div className="gallery-head">
          <h2>Images</h2>
        </div>
        <div className="image-container">
          <div className="img big">
            <img src="/img/Gallery Images/01.jpeg" alt="" />
          </div>
          <div className="img">
            <img src="/img/Gallery Images/02.jpeg" alt="" />
          </div>
          <div className="img horizontal">
            <img src="/img/Gallery Images/04.jpeg" alt="" />
          </div>
          <div className="img vertical">
            <img src="/img/Gallery Images/05.jpeg" alt="" />
          </div>
          <div className="img">
            <img src="/img/Gallery Images/06.jpeg" alt="" />
          </div>
          <div className="img">
            <img src="/img/Gallery Images/03.jpeg" alt="" />
          </div>
          <div className="img big">
            <img src="/img/Gallery Images/07.jpeg" alt="" />
          </div>
          <div className="img">
            <img src="/img/Gallery Images/08.jpeg" alt="" />
          </div>
          <div className="img vertical">
            <img src="/img/Gallery Images/09.jpeg" alt="" />
          </div>
          <div className="img horizontal">
            <img src="/img/Gallery Images/13.jpeg" alt="" />
          </div>
          <div className="img">
            <img src="/img/Gallery Images/10.jpeg" alt="" />
          </div>
          <div className="img horizontal">
            <img src="/img/Gallery Images/11.jpeg" alt="" />
          </div>
          <div className="img">
            <img src="/img/Gallery Images/12.jpeg" alt="" />
          </div>
        </div>
        <div className="gallery-head">
          <h2>Videos</h2>
        </div>
      </div>
      <div className="video-container">
        <div className="videos">
           {/* <Video title="Sample video title" description="hello" url="https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2FSDCR20182019%2Fvideos%2F136460295207054%2F&show_text=false&width=560&t=0" /> */}
          <Video />
        </div>
      </div>
    </>
  );
}

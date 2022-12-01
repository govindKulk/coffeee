import "./video.css";
import React from "react";
export default function Video(props) {
  return (
    <div class="video">
      <h2 class="video-head">{props.title}</h2>
      <p class="video-des">{props.description}</p>
      <div class="video-frame">
        <iframe
          src={props.url}
          width="560"
          height="295"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
}

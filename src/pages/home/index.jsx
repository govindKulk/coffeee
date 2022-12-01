import React from "react";
import "./home.css";
import Contact from "../../common/components/contact";
import Header from "../../common/components/header";
import Navbar from "../../common/components/navbar";
import LeftHome from "./components/left-home";
import Slideshow from "./components/slideshow";
import RightHome from "./components/right-home";
export default function Home() {

  
  return (
    <div className="container">
      <LeftHome />
      <Slideshow />
      <RightHome />
    </div>
  );
}

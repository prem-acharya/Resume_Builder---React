import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import { Image } from "../components/Header/data";
import "../App.css";

function MainBody() {
  return (
    <div className="App">
      <Navbar />
      <div className="center">
        <div className="container">
          <Header images={Image} />
        </div>
      </div>
    </div>
  );
}

export default MainBody;

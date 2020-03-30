import React from "react";
import "./Learning.css";
import ImgAdobe from "../../assets/xd.svg";
const Learning = () => {
  return (
    <header className="bg-white">
      <div className="test flex w-full  items-center h-20">
        <div className="flex items-center left">
          <a href="#" className="flex items-center">
            <img src={ImgAdobe} alt="img" className="w-8 h-8" />
            <p className="px-4 whitespace-no-wrap">ADOBE XD</p>
          </a>
          <a href="#">Features</a>
          <a href="#">Extentions </a>
          <a href="#">Community</a>
          <a href="#">Bussnies</a>
          <a href="#">Learn </a>
          <a href="#">Support </a>
          <a href="#">Download</a>
        </div>
        <div className="flex ml-auto right">
          <p>test</p>
        </div>
      </div>
    </header>
  );
};

export default Learning;

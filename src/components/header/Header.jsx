import { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [width, setWidth] = useState(0);
  const handleClick = (direct) => {
    direct === "left"
      ? width > 0
        ? setWidth(width - 1)
        : setWidth(2)
      : width < 2
      ? setWidth(width + 1)
      : setWidth(0);
  };

  return (
    <div className="header">
      <div
        className="slider"
        style={{ transform: `translateX(-${width * 100}vw)` }}
      >
        {/* <video autoPlay muted loop>
          <source src="assets/header1.mp4" type="video/ogg" />
        </video> */}
        <div className="s slider2">
          <img className="slider-img" src="assets/header2.jpg" alt="" />
          <span>SUSTAINABLE SOLUTIONS FOR QUALITY MILK PROCESSING</span>
          <Link className="link" to="/small-scale-milk-processing-plant">
            <button className="readMore-btn">Read More</button>
          </Link>
        </div>
        <div className="s slider3">
          <img className="slider-img" src="assets/header3.jpg" alt="" />
          <span>GET THE BEST REFRIGERATION SYSTEM FOR YOUR PROJECT</span>
          <Link className="link" to="/ammonia-refrigeration-system">
            <button className="readMore-btn">Read More</button>
          </Link>
        </div>
        <div className="s slider4">
          <img className="slider-img" src="assets/header4.jpg" alt="" />
          <span>
            <Link
              className="link"
              to="/various-temperature-programs-and-industries-type-of-cold-storage"
            >
              COLD STORAGE PROGRAMS FOR DIFFERENT INDUSTRIES
            </Link>
          </span>
          <button className="readMore-btn">Read More</button>
        </div>
      </div>
      <i
        className="left fa-2x fas fa-arrow-left"
        onClick={() => {
          handleClick("left");
        }}
      ></i>
      <i
        className="right fa-2x fas fa-arrow-right"
        onClick={() => {
          handleClick("right");
        }}
      ></i>
    </div>
  );
};

export default Header;

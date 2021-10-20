import "./about.css";
import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
    });
  }, []);
  return (
    <div className="about">
      <div className="about-container" data-aos="fade-right">
        <span className="about-small-title">About Us</span>
        <span className="about-title">
          We are most trusted name in Refrigeration & Milk Processing
        </span>
        <span className="about-desc">
          We have been successfully delivering world class refrigeration
          solutions across various industries from the past 30 years through
          highly proficient veterans dedicated & committed to delivering value
          to our privileged customers.
        </span>
        <Link className="link" to="/our-story">
          <button className="about-btn btn">Read More</button>
        </Link>
      </div>
      <img src="assets/about.jpg" alt="" className="about-img" />
    </div>
  );
};

export default About;

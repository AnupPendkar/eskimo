import TestiItem from "../testiItem/TestiItem";
import { testiLogo } from "../../data";
import "./testimonials.css";
import { useState, useEffect } from "react";
import AOS from "aos";

const Testimonials = () => {
  const [width, setWidth] = useState(0);
  const handleClick = (dir) => {
    if (dir === "left") {
      if (width > 0) {
        setWidth(width - 1);
      } else {
        setWidth(testiLogo.length - 1);
      }
    } else {
      if (width < testiLogo.length - 1) {
        setWidth(width + 1);
      } else {
        setWidth(0);
      }
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((width) => {
        width < testiLogo.length - 1 ? setWidth(width + 1) : setWidth(0);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [width]);

  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="testimonials" data-aos="fade-left">
        <span className="testi-title">Testimonials</span>
        <div className="testi-wrapper">
          <div className="testi-left">
            <div className="testi-logo">
              {testiLogo.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={width === index ? "slide active" : "slide"}
                  >
                    {index === width && (
                      <img src={item.img} alt="" className="testi-logo-img" />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="testi-btn">
              <button className="left-btn" onClick={() => handleClick("left")}>
                <i className="fa-2x fas fa-chevron-left"></i>
              </button>
              <button
                className="right-btn"
                onClick={() => handleClick("right")}
              >
                <i className="fa-2x fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="testi-right">
            {testiLogo.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={width === index ? "slide active" : "slide"}
                >
                  {index === width && (
                    <TestiItem
                      key={item.id}
                      className="r"
                      desc={item.desc}
                      location={item.location}
                      company={item.company}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="quotes">
            <i className="fa-4x fas fa-quote-left"></i>
          </div>
        </div>
      </div>
      <div className="testi-img">
        <img src="assets/testimonial.jpg" alt="" />
      </div>
    </>
  );
};

export default Testimonials;

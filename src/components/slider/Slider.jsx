import "./slider.css";
import { useEffect, useRef, useState } from "react";

const Slider = () => {
  const [counter, setCounter] = useState(0);
  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    const sliderImg = document.querySelectorAll(".page-slider img");
    const s = sliderImg[0].clientWidth;
    setWidth(s);
    slider.current.style.transition = "all 0.18s ease";
    const slideId = setInterval(() => {
      handleClick("right");
      clearInterval(slideId);
    }, 3000);
  }, [counter]);

  const handleClick = (dir) => {
    if (dir === "left") {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        slider.current.style.transition = "none";
        setCounter(3);
      }
    } else {
      if (counter < 3) {
        setCounter(counter + 1);
      } else {
        slider.current.style.transition = "none";
        setCounter(0);
      }
    }
  };

  return (
    <div className="page-slider-container">
      <div
        className="page-slider"
        ref={slider}
        style={{
          transform: `translateX( ${-width * counter}px )`,
        }}
      >
        <img src="assets/1.jpg" alt="" />
        <img src="assets/2-1.jpg" alt="" />
        <img src="assets/3-1.jpg" alt="" />
        <img src="assets/4-1.jpg" alt="" />
        <img src="assets/1.jpg" alt="" />
        <img src="assets/2-1.jpg" alt="" />
        <img src="assets/3-1.jpg" alt="" />
        <img src="assets/4-1.jpg" alt="" />
      </div>

      <i
        className="fas fa-chevron-left left-i"
        onClick={() => handleClick("left")}
      ></i>
      <i
        className="fas fa-chevron-right right-i"
        onClick={() => handleClick("right")}
      ></i>
    </div>
  );
};

export default Slider;

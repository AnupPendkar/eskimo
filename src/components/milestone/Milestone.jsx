import CounterCard from "../counterCard/CounterCard";
import "./milestone.css";
import { data } from "../../data";
import { useState } from "react";

const Milestone = () => {
  const [scroll, setScroll] = useState(false);
  window.onscroll = () => {
    setScroll(window.pageYOffset < 500 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };

  return (
    <div className="milestone">
      <span className="milestone-small-title">Milestones</span>
      <span className="milestone-title">
        Providing solutions of every kind, from start to the end
      </span>
      <span className="milestone-desc">
        Our journey has taught us many aspects and our experience has crossed
        many hurdles to achieve what we are today.
      </span>
      <div className="milestone-cards">
        {data.map((item) => (
          <CounterCard
            key={item.id}
            img={item.img}
            no={item.no}
            desc={item.desc}
            scroll={scroll}
          />
        ))}
      </div>
    </div>
  );
};

export default Milestone;

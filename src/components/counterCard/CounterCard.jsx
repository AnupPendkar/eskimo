import "./counterCard.css";
import CountUp from "react-countup";
import { useState } from "react";

const CounterCard = ({ img, no, desc, scroll }) => {
  const [end, setEnd] = useState(true);
  const onEnd = () => {
    setEnd(false);
  };

  return (
    <div className="counter-card">
      <div className="counter-card-container">
        <img className="counter-img" src={img} alt="" />
        <div className="counter-card-details">
          {scroll && end ? (
            <CountUp
              className="card-no"
              start={0}
              end={no}
              duration={4}
              onEnd={onEnd}
              suffix="+"
            ></CountUp>
          ) : (
            <span className="card-no">{`${no}+`}</span>
          )}
          <span className="card-desc">{desc}</span>
        </div>
      </div>
    </div>
  );
};

export default CounterCard;

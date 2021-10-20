import "./goals.css";
import { goalsImg } from "../../data";

const Goals = () => {
  return (
    <>
      <div className="goals">
        <span className="goals-small-title">our goals</span>
        <span className="goals-title">
          We have executed more than 450+ turnkey projects across India & the
          world.
        </span>
        <span className="goals-desc">
          We are open to the thought that our clients want to visit and explore
          the past projects to understand our services & standards.
        </span>
      </div>
      <div className="goals-img-container">
        {goalsImg.map((item) => (
          <img src={item.img} alt="" />
        ))}
      </div>
    </>
  );
};

export default Goals;

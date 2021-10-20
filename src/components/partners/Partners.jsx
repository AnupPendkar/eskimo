import "./partners.css";
import { partnerImages } from "../../data";
import PartnerImg from "../partnerImg/PartnerImg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Partners = () => {
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="partners">
      <div className="partners-container">
        <span className="partners-small-title">Industrial</span>
        <span className="partners-title">
          Some of the partners & clients we’ve worked with
        </span>
      </div>
      <div className="partners-img">
        {partnerImages.map((data, index) =>
          showAll ? (
            <PartnerImg key={data.id} img={data.img} />
          ) : (
            index < 8 && <PartnerImg key={data.id} img={data.img} />
          )
        )}
      </div>
      <div className="partners-btn-container">
        <Link className="link partner-link" to="/our-clients">
          <button
            className={!showAll ? "partners-btn btn" : "none"}
            onClick={() => setShowAll(true)}
          >
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Partners;

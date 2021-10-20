import "./partnerImg.css";

const PartnerImg = ({ img }) => {
  return (
    <div className="partnerImg">
      <img className="partner-img" src={img} alt="" />
    </div>
  );
};

export default PartnerImg;

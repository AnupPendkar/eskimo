import "./values.css";

const Values = () => {
  return (
    <>
      <div className="valuesPage">
        <span className="values-title">Our Values</span>
        <div className="values-container">
          <span className="values-container-title">Our Vision</span>
          <span className="values-desc">
            To be a Globally Respected Leading Technology Company with a Global
            outlook delivering world-class products and Services to Customers.
          </span>
        </div>
        <div className="values-container">
          <span className="values-container-title">Our Mission</span>
          <span className="values-desc">
            Eskimo Refrigeration Industries has been recognized as a Supplier of
            high-quality manufactures of Industrial Refrigeration and Dairy
            Products. We aspire to become a Leading technology Company with a
            Global outlook Delivering World-Class Products and Services to
            Customers. Our Challenge is to Continually Expand and define New
            Market by expanding the frontiers of research and Engineering and
            Customer application in our chosen field of Business.
          </span>
        </div>
        <span className="values-container-title vct">
          Our Commitment is to create an Organisation, which nurtures the Talent
          and enterprise of our People, helping them to grow and find fulfilment
          in an Open Culture.
        </span>
        <span className="vt">Certificates & Recognitions</span>
      </div>
      <div className="certificate-container">
        <img src="assets/certificate1.jpg" alt="" />
        <img src="assets/certificate2.jpg" alt="" />
        <img src="assets/certificate3.jpg" alt="" />
        <img src="assets/certificate4.jpg" alt="" />
        <img src="assets/certificate5.jpg" alt="" />
        <img src="assets/certificate6.jpg" alt="" />
      </div>
    </>
  );
};

export default Values;

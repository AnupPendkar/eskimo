import "./testiItem.css";

const TestiItem = ({ desc, location, company }) => {
  return (
    <div className="testiItem">
      <span className="testi-desc">{desc}</span>
      <span className="location">{location}</span>
      <span className="comp-name">{company}</span>
    </div>
  );
};

export default TestiItem;

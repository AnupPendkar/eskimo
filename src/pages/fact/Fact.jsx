import Table from "../../components/table/Table";
import { factInfo, factInfra, factProfile } from "../../data";
import "./fact.css";

const Fact = () => {
  return (
    <div className="fact">
      <div className="fact-container">
        <span className="fact-title">Fact Sheet</span>
        <span className="fact-table-title">Basic Information</span>
        <Table pageData={factInfo} />
        <span className="fact-table-title">Infrastructure</span>
        <Table pageData={factInfra} />
        <span className="fact-table-title">Statutory Profile</span>
        <Table pageData={factProfile} />
        <div className="quality-container">
          <img src="assets/quality.png" alt="" />
          <span className="fact-table-title">Quality Policy</span>
          <span className="fact-table-small-title">
            We will always strive to delight our customers with the outstanding
            quality of our products & services.
          </span>
        </div>
        <div className="quality-container">
          <img src="assets/quality-2.png" alt="" />
          <span className="fact-table-title">Quality Compliance</span>
          <span className="fact-table-small-title">
            We always take good care of our operations & products to assure
            quality work & output
          </span>
        </div>
        <div className="quality-container">
          <img src="assets/iso.png" alt="" />
          <span className="fact-table-title">ISO Certification</span>
          <span className="fact-table-small-title">
            An ISO 9001:2015 Company
          </span>
        </div>
      </div>
    </div>
  );
};

export default Fact;

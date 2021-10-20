// import { smallSpecification } from "../../data";
import Table from "../table/Table";
import "./product.css";

const Product = ({ page, mainTitle, smallTitle, desc, productTitle, img }) => {
  return (
    <div className="product">
      <div className="product-container">
        <span className="product-main-title">{mainTitle}</span>
        <span className="product-small-title">{smallTitle}</span>
        <span className="product-title">{productTitle}</span>

        <div className="product-desc-container">
          <span className="desc-title">{mainTitle}</span>
          <span className="desc-small-title">{desc}</span>
        </div>

        <span className="product-title">Product Specification</span>
        <Table pageData={page} />
        {img && <span className="product-title pro-flow">Flowchart</span>}
        <img src={img} alt="" />

        <div className="add-info-container">
          <span className="product-small-title">Additional Information:</span>
          <div className="add-info">
            <i className="fa-solid fa-circle"></i>
            <span>Pay Mode Terms: Cheque/Cash/DD/Online Tranfer</span>
          </div>
          <div className="add-info">
            <i className="fa-solid fa-circle"></i>
            <span>Port of Dispatch: By Road,Air,Water</span>
          </div>
          <div className="add-info">
            <i className="fa-solid fa-circle"></i>
            <span>Production Capacity: 15 Per/year</span>
          </div>
          <div className="add-info">
            <i className="fa-solid fa-circle"></i>
            <span>Delivery Time: 4 to 5 Weeks</span>
          </div>
          <div className="add-info">
            <i className="fa-solid fa-circle"></i>
            <span>Packaging Details: wooden Packing</span>
          </div>
          <div className="add-info">
            <i className="fa-solid fa-circle"></i>
            <span>Warranty for 12 Months</span>
          </div>
        </div>

        <div className="add-info-container">
          <span className="product-small-title">Features:</span>
          <div className="add-info">
            <i className="fa-solid fa-circle"></i>
            <span>Maintenance Free</span>
          </div>
          <div className="add-info">
            <i className="fa-solid fa-circle"></i>
            <span>Minimum Space Require</span>
          </div>
          <div className="add-info">
            <i className="fa-solid fa-circle"></i>
            <span>Suitable processing Capacity</span>
          </div>
          <div className="add-info">
            <i className="fa-solid fa-circle"></i>
            <span>Fully Automated</span>
          </div>
          <div className="add-info">
            <i className="fa-solid fa-circle"></i>
            <span>Advance Techniques</span>
          </div>
          <div className="add-info">
            <i className="fa-solid fa-circle"></i>
            <span>Customized Design.</span>
          </div>
        </div>

        <span className="product-small-title product-project">PROJECTS</span>
        <span className="product-title">
          We are proud to showcase our Completed Projects
        </span>
      </div>
    </div>
  );
};

export default Product;

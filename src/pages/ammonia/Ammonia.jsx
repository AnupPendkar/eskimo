import { useEffect } from "react";
import Product from "../../components/product/Product";
import Slider from "../../components/slider/Slider";
import { AmmoniaSpecification } from "../../data";
import "./ammonia.css";

const Ammonia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ammonia">
      <Product
        page={AmmoniaSpecification}
        mainTitle={"Ammonia Refrigeration System"}
        smallTitle={"AMMONIA"}
        desc={
          "Eskimo expertise is majorly in Ammonia Refrigeration System Manufacturing. We make them in an energy-efficient manner, and also spatially efficient and also low cost and low manpower. They are available in various customizations. We extend our services into the design, engineering, assembling, fabrication, installation, testing- commissioning with best – quality after-sales services for Ammonia Refrigeration System for Dairy, Pharma and Beverage Industries, Glycol chillers for Dairies, Breweries and Pharma Industries, Brine Chilling Plants for Breweries, We Provide the most Accurate, Precise Designs and Premium Quality manufacturing of ammonia Refrigeration systems for various industries."
        }
        productTitle={"We provide the Best Ammonia Refrigeration System"}
      />

      <Slider />
    </div>
  );
};

export default Ammonia;

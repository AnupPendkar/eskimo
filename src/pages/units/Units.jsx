import Product from "../../components/product/Product";
import { UnitSpecification } from "../../data";
import "./units.css";
import { useEffect } from "react";
import Slider from "../../components/slider/Slider";

const Units = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="small-scale">
      <Product
        page={UnitSpecification}
        mainTitle={"Condensing & Evaporative Units"}
        smallTitle={"REFRIGERATION"}
        desc={
          "We are a renowned name known for manufacturing the best Evaporative Condensing Units to clients. Our products are tested by quality controllers on several parameters to ensure their long life. Our Evaporative Condensing Units are manufactured using quality grade raw material and up-to-date technology as per the standards placed down by the industry. Our units find the best application in various industries such as pharmaceutical, textile, food processing, chemical, etc. and manufactured units are sturdy in design, Robust with 100% Perfection in finishing."
        }
        productTitle={"We provide the Best Condensing & Evaporative Units"}
      />

      <Slider />
    </div>
  );
};

export default Units;

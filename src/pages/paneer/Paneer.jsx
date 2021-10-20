import { useEffect } from "react";
import Product from "../../components/product/Product";
import Slider from "../../components/slider/Slider";
import { PaneerSpecification } from "../../data";
import "./paneer.css";

const Paneer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="paneer">
      <Product
        page={PaneerSpecification}
        mainTitle={"Panner Processing Plant"}
        smallTitle={"PANEER PLANT"}
        desc={
          "We offer a Paneer Processing plant fully automatic and semi-automatic also, it's manufactured with the highest quality stainless steel to maintain the hygienic production of Paneer, We make them using energy-efficient materials that are low cost and also employ less manpower. We offer the plants at an industrially competitive price"
        }
        productTitle={"We provide the Best Paneer Processing Plant"}
        img={"assets/paneer-flowchart.png"}
      />

      <Slider />
    </div>
  );
};

export default Paneer;

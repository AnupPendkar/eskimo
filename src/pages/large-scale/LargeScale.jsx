import { useEffect } from "react";
import Product from "../../components/product/Product";
import Slider from "../../components/slider/Slider";
import { largeSpecification } from "../../data";
import "./largeScale.css";

const SmallScale = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="small-scale">
      <Product
        page={largeSpecification}
        mainTitle={"Large Scale Milk Processing Plant"}
        smallTitle={"LARGE SCALE"}
        desc={
          "We provide the most efficient solutions for large scale milk processing plants with a prime focus on use of the latest technological advancements in both design as well as manufacturing techniques. The plant capacity ranges from handling 10000 liters/Day to 500000 Liters/Day.This size of the plant is the best choice for a large production setup or expanding the current setup to a larger and bigger production on daily basis."
        }
        productTitle={"We provide the Best Large Scale Milk Processing Plant"}
        img={"assets/large-flowchart.png"}
      />

      <Slider />
    </div>
  );
};

export default SmallScale;

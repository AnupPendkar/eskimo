import Product from "../../components/product/Product";
import { mediumSpecification } from "../../data";
import "./mediumScale.css";
import { useEffect } from "react";
import Slider from "../../components/slider/Slider";

const SmallScale = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="medium-scale">
      <Product
        page={mediumSpecification}
        mainTitle={"Medium Scale Milk Processing Plant"}
        smallTitle={"MEDIUM SCALE"}
        desc={
          "We provide the most efficient solutions for medium scale milk processing plants with a prime focus on use of the latest technological advancements in both design as well as manufacturing techniques. The plant capacity ranges from handling 500 litres/hour to 10000 liters/day This size of the plant is the best choice for those who have a large enough big area or who want to expand their current setup to a higher capacity plant."
        }
        productTitle={"We provide the Best Milk Processing Medium Scale plants"}
        img={"assets/medium-flowchart.png"}
      />

      <Slider />
    </div>
  );
};

export default SmallScale;

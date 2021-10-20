import Product from "../../components/product/Product";
import { smallSpecification } from "../../data";
import "./smallScale.css";
import { useEffect } from "react";
import Slider from "../../components/slider/Slider";

const SmallScale = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="small-scale">
      <Product
        page={smallSpecification}
        mainTitle={"Small Scale Milk Processing Plant"}
        smallTitle={"SMALL SCALE"}
        desc={
          "We provide the most efficient solutions and the best small scale milk processing plants with a prime focus on use of the latest technological advancements in both design as well as manufacturing techniques. The plant capacity ranges from handling 200 litres/hour to 500000 liters/day. This size of the plant is the best choice for startups or those who have less area, less Capital or who want to start with lesser production of Milk."
        }
        productTitle={"We provide the Best Milk Processing Small Scale plants"}
        img={"assets/small-flowchart.png"}
      />

      <Slider />
    </div>
  );
};

export default SmallScale;

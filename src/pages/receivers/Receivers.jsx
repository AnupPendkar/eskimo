import Product from "../../components/product/Product";
import { ReceiversSpecification } from "../../data";
import "./receivers.css";
import { useEffect } from "react";
import Slider from "../../components/slider/Slider";

const Receivers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="small-scale">
      <Product
        page={ReceiversSpecification}
        mainTitle={"Ammonia Receivers/Condensers/ Ammonia Liquid Separator"}
        smallTitle={"AMMONIA"}
        desc={
          "With the aid of skilled and talented professionals, we are involved in offering a wide range of Ammonia Receiver Tank which is highly known for its high finish and superior quality. These products are manufactured using quality approved raw material and high tech tools in adherence with market quality standards. Moreover, these are provided to our customers within a stipulated time frame"
        }
        productTitle={
          "We provide the Best Ammonia Receivers/Condensers/ Ammonia Liquid Separator"
        }
      />

      <Slider />
    </div>
  );
};

export default Receivers;

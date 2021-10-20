import Product from "../../components/product/Product";
import { CondenserSpecification } from "../../data";
import "./condenser.css";
import { useEffect } from "react";
import Slider from "../../components/slider/Slider";

const Condenser = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="small-scale">
      <Product
        page={CondenserSpecification}
        mainTitle={"Evaporative Condenser"}
        smallTitle={"EVAPORATIVE"}
        desc={
          "We manufacture Evaporative Condensers with high quality fans and electric pumps to give hustle free performance. Evaporative condensers are modern technology and space saving equipment if compared to the Traditional Open type Atmospheric Condensers, Shell & Tube Condensers and PHE's. We design tailor made Evaporative Condensers taking into consideration your requirement, system load and working temperatures. ( we are the fastest growing manufactures of evaporative condenser .we have been hugely successful in delivering premium and optimum solutions through our wide range of products to our customer"
        }
        productTitle={"We provide the Best Evaporative Condenser"}
      />

      <Slider />
    </div>
  );
};

export default Condenser;

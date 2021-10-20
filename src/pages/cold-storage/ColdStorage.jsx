import Product from "../../components/product/Product";
import { ColdSpecification } from "../../data";
import "./coldStorage.css";
import { useEffect } from "react";
import Slider from "../../components/slider/Slider";

const ColdStorage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="small-scale">
      <Product
        page={ColdSpecification}
        mainTitle={
          "Various Temperature Programs and industries Type of Cold Storage"
        }
        smallTitle={"COLD STORAGE"}
        desc={
          "We build Cold Storage units for dairy and other products. Our complete setup can be customizable with basic restrictions. The cold rooms offered by us are composed of our experts' knowledge using ultra-modern facilities. With the support of our skilled professionals, we have been able to render these services as per the set industrial guidelines. The food items are stored in the most organized manner that ensures retainment of their freshness. Our"
        }
        productTitle={
          "We provide the Best Various Temperature Programs and industries Type of Cold Storage"
        }
      />

      <Slider />
    </div>
  );
};

export default ColdStorage;

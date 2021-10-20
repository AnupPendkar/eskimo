import Product from "../../components/product/Product";
import { GlycolSpecification } from "../../data";
import "./glycerol.css";
import { useEffect } from "react";
import Slider from "../../components/slider/Slider";

const Glycerol = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="small-scale">
      <Product
        page={GlycolSpecification}
        mainTitle={"Ice Bank / Glycol Tank"}
        smallTitle={"ICE BANK"}
        desc={
          "With thorough knowledge of this domain, our quality Ice Bank/Glycol Tank units are widely used in various industrial applications. Moreover, our products are made from the best quality grade raw material. Our ice bank is a package of Evaporator coils that are placed in a tank with water. We are engaged in offering a wide range of Ice Bank tanks. The products offered by us are ideal for use in different industrial sectors and are optimum in the performance. All our products are strictly monitored by our quality experts before final delivery."
        }
        productTitle={"We provide the Best Ice Bank / Glycol Tank"}
      />

      <Slider />
    </div>
  );
};

export default Glycerol;

import { useEffect } from "react";
import Product from "../../components/product/Product";
import Slider from "../../components/slider/Slider";
import { FreonSpecification } from "../../data";
import "./freon.css";

const Freon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="freon">
      <Product
        page={FreonSpecification}
        mainTitle={"Freon Refrigeration System"}
        smallTitle={"FREON"}
        desc={
          "We offer the most effective solution in Freon refrigeration systems for cooling water for numerous industries. Refrigeration Plants are operated on the “vapour compression” principle. This term simply means that the heat is removed and transported to another location is accomplished by the alternate evaporation and condensation of a refrigerant usually referred to as a Freon With a Shortened operational time and increase in productivity, offers the best compressors technique solutions for water chilling in all industrial sectors. With the all new concept we offers most advance solutions in water chilling thought Freon refrigeration system."
        }
        productTitle={"We provide the Best Freon Refrigeration System"}
      />

      <Slider />
    </div>
  );
};

export default Freon;

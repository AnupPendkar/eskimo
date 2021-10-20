import { useEffect } from "react";
import Product from "../../components/product/Product";
import Slider from "../../components/slider/Slider";
import { IceCreamSpecification } from "../../data";
import "./icecream.css";

const Icecream = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ice-cream">
      <Product
        page={IceCreamSpecification}
        mainTitle={"Ice Cream Plant"}
        smallTitle={"ICE CREAM"}
        desc={
          "Producing ice cream requires a high degree of flexibility and efficiency, with the need to handle a variety of dry and liquid ingredients, adapt to seasonal demand fluctuations and create an innovative and varied product portfolio. Successful mix preparation requires knowledge of many different aspects of production, including freezing, handling, homogenization and pasteurization as well as an understanding of how these processes affect your ingredients. To ensure the highest quality ice cream without compromising integrity, uniform mixing of dry and liquid ingredients requires optimal dispersion and operational efficiency. Temperatures and timing along with precise control and gentle handling is critical to safeguard product quality."
        }
        productTitle={"We provide the Best Ice Cream Plant"}
        img={"assets/icecream-flowchart.png"}
      />

      <Slider />
    </div>
  );
};

export default Icecream;

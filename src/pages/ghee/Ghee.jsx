import { useEffect } from "react";
import Product from "../../components/product/Product";
import Slider from "../../components/slider/Slider";
import { GheeSpecification } from "../../data";
import "./ghee.css";

const Ghee = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ghee">
      <Product
        page={GheeSpecification}
        mainTitle={"Ghee & Butter Processing Plant"}
        smallTitle={"GHEE & BUTTER"}
        desc={
          "We offer a high productivity Ghee & Butter Plant that is primarily used for the extraction of ghee from milk. This entire process includes melting of butter, separation, clarification, filtration, cooling and packaging.. We make them using energy-efficient materials that are low cost and also employ less manpower. We offer the plants at an industrially competitive price."
        }
        productTitle={"We provide the Best Ghee & Butter Processing Plant"}
        img={"assets/ghee-flowchart.png"}
      />

      <Slider />
    </div>
  );
};

export default Ghee;

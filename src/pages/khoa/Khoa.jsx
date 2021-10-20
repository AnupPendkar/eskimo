import { useEffect } from "react";
import Product from "../../components/product/Product";
import Slider from "../../components/slider/Slider";
import { KhoaSpecification } from "../../data";
import "./khoa.css";

const Khoa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="khoa">
      <Product
        page={KhoaSpecification}
        mainTitle={"Khoa Making Plant"}
        smallTitle={"KHOA MAKING"}
        desc={
          "With an experience of more than a decade, we are fulfilling the needs of our esteemed clients by offering Khoya Making Machine. The provided machine is used in making delectable khoya applicable for milk-based sweets preparation in varied food processing units. These machines are available in two models as a stationary and tilting type for fast production. The kettles are flat and concave pan type (Depend upon the type of the work) ensuring their high operational fluency, less power consumption, easy installation, user-friendly design, impeccable performance and longer service life."
        }
        productTitle={"We provide the Best Khoa Making Plant"}
        img={"assets/small-flowchart.png"}
      />

      <Slider />
    </div>
  );
};

export default Khoa;

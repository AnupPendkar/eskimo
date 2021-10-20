import { useEffect } from "react";
import Product from "../../components/product/Product";
import Slider from "../../components/slider/Slider";
import { CurdSpecification } from "../../data";
import "./curd.css";

const Curd = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="curd">
      <Product
        page={CurdSpecification}
        mainTitle={"Curd Processing Plant"}
        smallTitle={"CURD PLANT"}
        desc={
          "We provide a complete solution to the curd processing plant from machinery along with plant designing and consulting from our skilled and experienced dairy technicians and engineers. In dairy, raw milk passes through several stages of treatment in various types of processing equipment before reaching the consumer in the form of a finished, refined product. Production usually takes place continuously in a closed process, where the main components are connected by a system of pipes. The type of treatment involved, and the design of the process depend on the product. Our Curd plants are developed using the finest quality stainless steel and types of equipment of high grade and equipped with the latest manufacturing machinery and advanced method of production."
        }
        productTitle={"We provide the Best Curd Processing Plant"}
        img={"assets/curd-flowchart.png"}
      />

      <Slider />
    </div>
  );
};

export default Curd;

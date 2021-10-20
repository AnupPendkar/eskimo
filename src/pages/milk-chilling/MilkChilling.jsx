import { useEffect } from "react";
import Product from "../../components/product/Product";
import Slider from "../../components/slider/Slider";
import { MilkChillingSpecification } from "../../data";
import "./milkChilling.css";

const MilkChilling = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="milk-chilling">
      <Product
        page={MilkChillingSpecification}
        mainTitle={"Milk Chilling Plant"}
        smallTitle={"CHILLING"}
        desc={
          "We have the expertise of manufacturing chilling plants with a capacity of 500 litres/hour to 5,00,000 litres/day of liquid Milk. We provide all types of Milk chilling plant machines. These products are offered by us at the most affordable rates. Our products are high in demand due to their premium quality, seamless finish, different patterns and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, through this we have gained a huge client base in the market.We provide Freon Chilling plants as well as Ammonia Chilling plants."
        }
        productTitle={"We provide the Best Milk Chilling Plants"}
        img={"assets/milkchilling-flowchart.png"}
      />

      <Slider />
    </div>
  );
};

export default MilkChilling;

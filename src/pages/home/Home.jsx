import "./home.css";
import About from "../../components/about/About";
import Header from "../../components/header/Header";
import Milestone from "../../components/milestone/Milestone";
import Partners from "../../components/partners/Partners";
import Testimonials from "../../components/testimonials/Testimonials";
import Map from "../../components/map/Map";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Milestone />
      <About />
      <Partners />
      <Testimonials />
      <Map />
      <Contact />
    </div>
  );
};

export default Home;

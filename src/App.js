import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import ContactPage from "./pages/contactPage/ContactPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Project from "./pages/project/Project";
import Story from "./pages/story/Story";
import Values from "./pages/values/Values";
import Clients from "./pages/clients/Clients";
import Structure from "./pages/structure/Structure";
import Fact from "./pages/fact/Fact";
import Management from "./pages/management/Management";
import SmallScale from "./pages/small-scale/SmallScale";
import MediumScale from "./pages/medium-scale/MediumScale";
import LargeScale from "./pages/large-scale/LargeScale";
import MilkChilling from "./pages/milk-chilling/MilkChilling";
import Curd from "./pages/curd/Curd";
import Paneer from "./pages/paneer/Paneer";
import Ghee from "./pages/ghee/Ghee";
import Khoa from "./pages/khoa/Khoa";
import Icecream from "./pages/icecream/Icecream";
import Ammonia from "./pages/ammonia/Ammonia";
import Freon from "./pages/freon/Freon";
import Glycerol from "./pages/glycerol/Glycerol";
import Condenser from "./pages/condenser/Condenser";
import Units from "./pages/units/Units";
import Receivers from "./pages/receivers/Receivers";
import ColdStorage from "./pages/cold-storage/ColdStorage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        {/* ............................ABOUT SECTION.......................... */}
        <Route path="/our-story">
          <Story />
        </Route>
        <Route path="/our-values">
          <Values />
        </Route>
        <Route path="/our-clients">
          <Clients />
        </Route>
        <Route path="/organisation-structure">
          <Structure />
        </Route>
        <Route path="/fact-sheet">
          <Fact />
        </Route>
        <Route path="/project-management">
          <Management />
        </Route>
        {/* ----------------------------------END------------------------------- */}

        {/* ............................PRODUCT SECTION......................... */}

        {/* ...........MILK PROCESSING PLANT ..........*/}
        <Route path="/small-scale-milk-processing-plant">
          <SmallScale />
        </Route>
        <Route path="/medium-scale-milk-processing-plant">
          <MediumScale />
        </Route>
        <Route path="/large-scale-milk-processing-plant">
          <LargeScale />
        </Route>
        {/* -------------------END-------------------- */}

        {/* ............MILK CHILLING PLANT ...........*/}
        <Route path="/milk-chilling-plant">
          <MilkChilling />
        </Route>
        {/* -------------------END-------------------- */}

        {/* ...........REFRIGERATION SYSTEM ...........*/}
        <Route path="/ammonia-refrigeration-system">
          <Ammonia />
        </Route>
        <Route path="/freon-refrigeration-system">
          <Freon />
        </Route>
        {/* -------------------END-------------------- */}

        {/* ............MILK PRODUCT PLANT ............*/}
        <Route path="/curd-processing-plant">
          <Curd />
        </Route>
        <Route path="/paneer-processing-plant">
          <Paneer />
        </Route>
        <Route path="/ghee-processing-plant">
          <Ghee />
        </Route>
        <Route path="/khoa-processing-plant">
          <Khoa />
        </Route>
        <Route path="/ice-cream-processing-plant">
          <Icecream />
        </Route>
        {/* -------------------END-------------------- */}

        {/* ...........REFRIGERATION EQUIPMENT.........*/}
        <Route path="/ice-bank-glycol-tank">
          <Glycerol />
        </Route>
        <Route path="/evaporative-condenser">
          <Condenser />
        </Route>
        <Route path="/condensing-evaporative-units">
          <Units />
        </Route>
        <Route path="/ammonia-receivers-condensers-ammonia-liquid-separator">
          <Receivers />
        </Route>
        <Route path="/various-temperature-programs-and-industries-type-of-cold-storage">
          <ColdStorage />
        </Route>
        {/* -------------------END-------------------- */}

        {/* ---------------------------------END------------------------------- */}

        <Route path="/projects">
          <Project />
        </Route>
        <Route path="/contact-us">
          <ContactPage />
        </Route>
      </Switch>
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;

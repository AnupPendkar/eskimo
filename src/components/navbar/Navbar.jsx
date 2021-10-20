import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [revealAbout, setRevealAbout] = useState(false);
  const [revealProducts, setRevealProducts] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link
          className="link"
          to="/"
          onClick={() => {
            setActive(false);
            setRevealAbout(false);
            setRevealProducts(false);
          }}
        >
          <img
            className="logo-img"
            src="https://eskimoindustries.com/wp-content/uploads/2021/07/Eskimo-dark-logo-@300x-8.png"
            alt=""
          />
        </Link>
        <div
          className="ham"
          onClick={() => {
            setActive(!active);
            setRevealAbout(false);
            setRevealProducts(false);
          }}
        >
          <div className="ham-container">
            <span className={"line1 " + (active && "active")}></span>
            <span className={"line2 " + (active && "active")}></span>
            <span className={"line3 " + (active && "active")}></span>
            <span className={"line4 " + (active && "active")}></span>
            <span className={"line5 " + (active && "active")}></span>
          </div>
        </div>
      </div>
      <div className={"menu " + (active && "active")}>
        <ul className="menu-list">
          <li className="menu-item">
            <Link className="link" to="/" onClick={() => setActive(false)}>
              Home
            </Link>
          </li>
          <div className="list-wrapper">
            <div className="sublist-wrapper">
              <li className="about-li menu-item">About Us</li>
              <ul className={"menu-list " + (revealAbout && "reveal")}>
                <li className="menu-item">
                  <Link
                    className="link"
                    to="/our-story"
                    onClick={() => {
                      setActive(false);
                      setRevealAbout(false);
                    }}
                  >
                    Our Story
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="link"
                    to="/our-values"
                    onClick={() => {
                      setActive(false);
                      setRevealAbout(false);
                    }}
                  >
                    Our Values
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="link"
                    to="/our-clients"
                    onClick={() => {
                      setActive(false);
                      setRevealAbout(false);
                    }}
                  >
                    Our Clients
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="link"
                    to="/organisation-structure"
                    onClick={() => {
                      setActive(false);
                      setRevealAbout(false);
                    }}
                  >
                    Organization Structure
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="link"
                    to="/fact-sheet"
                    onClick={() => {
                      setActive(false);
                      setRevealAbout(false);
                    }}
                  >
                    Fact Sheet
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="link"
                    to="/project-management"
                    onClick={() => {
                      setActive(false);
                      setRevealAbout(false);
                    }}
                  >
                    Project Management
                  </Link>
                </li>
              </ul>
            </div>

            <i
              className="fas fa-chevron-right"
              onClick={() => {
                setRevealAbout(!revealAbout);
                if (revealProducts) {
                  setRevealProducts(!revealProducts);
                }
              }}
            ></i>
          </div>
          <div className="list-wrapper">
            <div className="sublist-wrapper">
              <li className="menu-item">Products</li>
              <ul className={"menu-list " + (revealProducts && "reveal")}>
                <li className="menu-item">Milk Processing Plant</li>
                <li className="menu-item">Milk Chilling Plant</li>
                <li className="menu-item">Refrigeration System</li>
                <li className="menu-item">Milk Product Plant</li>
                <li className="menu-item">Refrigeration Equipments</li>
                <li className="menu-item">Cold Storage</li>
              </ul>
            </div>
            <i
              className="fas fa-chevron-right"
              onClick={() => {
                setRevealProducts(!revealProducts);
                if (revealAbout) {
                  setRevealAbout(!revealAbout);
                }
              }}
            ></i>
          </div>
          <li className="menu-item">
            <Link
              className="link"
              to="/projects"
              onClick={() => {
                setActive(false);
                setRevealAbout(false);
                setRevealProducts(false);
              }}
            >
              Projects
            </Link>
          </li>
          <li className="menu-item">
            <Link
              className="link"
              to="/contact-us"
              onClick={() => {
                setActive(false);
                setRevealAbout(false);
                setRevealProducts(false);
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

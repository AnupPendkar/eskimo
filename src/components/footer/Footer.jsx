import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-title footer-title1">Products</span>
          <div className="footer-items">
            <i className="fas fa-square"></i>
            <span>
              <Link className="link" to="/curd-processing-plant">
                Curd Processing Plant
              </Link>
            </span>
          </div>
          <div className="footer-items">
            <i className="fas fa-square"></i>
            <span>
              <Link className="link" to="/paneer-processing-plant">
                Paneer Processing Plant
              </Link>
            </span>
          </div>
          <div className="footer-items">
            <i className="fas fa-square"></i>
            <span>
              <Link className="link" to="/ghee-processing-plant">
                Ghee & Butter Processing Plant
              </Link>
            </span>
          </div>
          <div className="footer-items margin">
            <i className="fas fa-square"></i>
            <span>
              <Link className="link" to="/khoa-processing-plant">
                Khoa Making Plant
              </Link>
            </span>
          </div>
          <div className="footer-items">
            <i className="fas fa-square"></i>
            <span>
              <Link className="link" to="/ice-cream-processing-plant">
                Ice Cream Plant
              </Link>
            </span>
          </div>
          <div className="footer-items">
            <i className="fas fa-square"></i>
            <span>
              <Link className="link" to="/small-scale-milk-processing-plant/">
                Small Milk Processing Plant
              </Link>
            </span>
          </div>
          <div className="footer-items">
            <i className="fas fa-square"></i>
            <span>
              <Link className="link" to="/medium-scale-milk-processing-plant/">
                Medium Milk Processing Plant
              </Link>
            </span>
          </div>
          <div className="footer-items">
            <i className="fas fa-square"></i>
            <span>
              <Link className="link" to="/ammonia-refrigeration-system">
                Ammonia Refrigeration System
              </Link>
            </span>
          </div>
          <div className="footer-items">
            <i className="fas fa-square"></i>
            <span>
              <Link className="link" to="/large-scale-milk-processing-plant">
                Large Milk Processing Plant
              </Link>
            </span>
          </div>
          <div className="footer-items">
            <i className="fas fa-square"></i>
            <span>
              <Link className="link" to="/milk-chilling-plant">
                Milk Chilling Plant
              </Link>
            </span>
          </div>
          <div className="footer-items margin">
            <i className="fas fa-square"></i>
            <span>
              <Link className="link" to="/freon-refrigeration-system">
                Freon Refrigeration System
              </Link>
            </span>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-items">
            <i className="fas fa-square"></i>
            <span>
              <Link className="link" to="/ice-bank-glycol-tank">
                Ice Bank / Glycol Tank
              </Link>
            </span>
          </div>
          <div className="footer-items">
            <i className="fas fa-square"></i>
            <span>
              <Link className="link" to="/evaporative-condenser">
                Evaporative Condenser
              </Link>
            </span>
          </div>
          <div className="footer-items">
            <i className="fas fa-square"></i>
            <span>
              <Link className="link" to="/condensing-evaporative-units">
                Condensing & Evaporative Units
              </Link>
            </span>
          </div>
          <div className="footer-items">
            <i className="fas fa-square"></i>
            <span>
              <Link
                className="link"
                to="/ammonia-receivers-condensers-ammonia-liquid-separator"
              >
                Ammonia Receivers
              </Link>
            </span>
          </div>
          <div className="footer-items margin">
            <i className="fas fa-square"></i>
            <span>
              <Link
                className="link"
                to="/various-temperature-programs-and-industries-type-of-cold-storage"
              >
                Cold Storage
              </Link>
            </span>
          </div>

          <span className="footer-title footer-title2">Get in touch</span>
          <div className="add-1">
            <i className="fas fa-map-pin"></i>
            <span>
              Gat No. 267/A/1/1, Shed No A-1 & A-2, Durga Industrial Complex,
              Pirangut, Tal-Mulshi, Pune - 412115
            </span>
          </div>
          <div className="add-2">
            <i className="fas fa-phone-alt"></i>
            <div className="footer-no">
              <span>9822403226</span>
              <span>8888850331</span>
              <span>020 - 6653 5212</span>
            </div>
          </div>
          <div className="add-3">
            <i className="fas fa-envelope"></i>
            <span>eskimoindustries99@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="social-handles">
        <span className="copyrights">2020 All Rights Reserved © Eskimo</span>
        <div className="footer-icons">
          <div className="social-icon-1">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="social-icon-1">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="social-icon-1">
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

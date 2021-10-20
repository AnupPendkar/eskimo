import Milestone from "../../components/milestone/Milestone";
import "./story.css";
import { useEffect } from "react";
import AOS from "aos";

const Story = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="story">
      <div className="story-container">
        <span className="story-small-title">Our story</span>
        <span className="story-title">About Eskimo</span>
        <span className="para1 para">
          Established in 1991, Eskimo Refrigeration Industries, an ISO 9001:2015
          registered, is involved in designing, supply, erecting and
          Commissioning Refrigeration systems, Cold Storages, Dairy, Food
          Processing and Ice Cream Plants on a turnkey basis since 1991. We have
          completed more than 450+ projects globally and have successfully
          delivered world-class refrigeration solutions across various
          industries for the past 30 years through highly proficient veterans.
        </span>
        <span className="para2 para">
          We provide cost-effective solutions, from concept to commissioning and
          rapidly deployable solutions for high-quality end products dedicatedly
          & we are committed to delivering value to our privileged customers.
        </span>
        <span className="para3 para">
          Eskimo revolves around the core value of ‘Developing
          application-focused solutions, delivering profitable customer value
          every single time.’ Our core value acts as a vital catalyst in
          developing efficiently integrated technologically with advanced state
          of manufacturing facility supporting industries to achieve better
          resource productivity.
        </span>
        <span className="para4 para">
          Our customer base is spread across various sectors such as food,
          chemical, pharmaceutical, automobile and many others. We at Eskimo
          believe that ‘Impending Success can only be achieved by delivering
          genuine products that justify sustainable practices.’
        </span>
        <img src="assets/30-years.png" alt="" className="story-img" />
        <img src="assets/1.jpg" alt="" className="story-img2" />
        <div className="strength-tables">
          <span className="story-title">Our Strength</span>
          <div className="strength-table st-1">
            <div className="strength-top">
              <span className="skill">EXPERTISE LEVEL</span>
              <span className="per">98%</span>
            </div>
            <div className="per-bar">
              <div className="per-blue-bar per-bar-1"></div>
            </div>
          </div>
          <div className="strength-table st-2">
            <div className="strength-top">
              <span className="skill">CUSTOMER SERVICE</span>
              <span className="per">99%</span>
            </div>
            <div className="per-bar">
              <div className="per-blue-bar per-bar-2"></div>
            </div>
          </div>
          <div className="strength-table st-3">
            <div className="strength-top">
              <span className="skill">
                PERSONAL RELATIONSHIPS WITH CUSTOMERS
              </span>
              <span className="per">100%</span>
            </div>
            <div className="per-bar">
              <div className="per-blue-bar per-bar-3"></div>
            </div>
          </div>
          <div className="strength-table st-4">
            <div className="strength-top">
              <span className="skill">
                HIGHLY EFFICIENT & LOW-COST MANUFACTURING
              </span>
              <span className="per">99%</span>
            </div>
            <div className="per-bar">
              <div className="per-blue-bar per-bar-4"></div>
            </div>
          </div>
        </div>
      </div>
      <Milestone />
      <div className="story-container">
        <span className="story-small-title">Our team</span>
        <span className="story-title">LED BY PASSIONATE EXPERTS</span>
        <div className="story-row">
          <div className="story-row-1">
            <img src="assets/anil.jpg" alt="" />
            <span data-aos="fade-left" className="story-row-desc">
              Anil S Upalaikar is the founder and the brain behind Eskimo
              Refrigeration Industries. He is a great leader and wholly
              responsible for Management and Direction in the Company. He has
              been responsible for successfully serving the Food Industry for
              the last 30 years.
            </span>
          </div>
          <div className="story-row-2">
            <span data-aos="fade-right" className="story-row-desc">
              Kedar A Upalaikar, his son is now taking forward the baton of his
              father’s dream and has proved his capability with 20% growth
              observed in the last few financial years. He comes from a
              background of Project Management & Marketing Experience.
            </span>
            <img src="assets/kedar.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="story-values">
        <span className="story-title st">Why Eskimo</span>
        <div className="story-why">
          <div className="story-i-container">
            <div className="story-icon-div">
              <i className="fa-2x far fa-flag"></i>
            </div>
            <span className="why-desc">MORE THAN 30 YEARS OF EXPERIENCE</span>
          </div>
          <div className="story-i-container">
            <div className="story-icon-div">
              <i className="fa-2x fas fa-user-check"></i>
            </div>
            <span className="why-desc">TRUSTED COMPANY</span>
          </div>
          <div className="story-i-container">
            <div className="story-icon-div">
              <i className="fa-2x far fa-thumbs-up"></i>
            </div>
            <span className="why-desc">GOOD CUSTOMER BASE</span>
          </div>
          <div className="story-i-container">
            <div className="story-icon-div">
              <i className="fa-2x fas fa-users"></i>
            </div>
            <span className="why-desc">
              SKILLED MAN POWER WITH 25 YEARS PERFORMANCE
            </span>
          </div>
          <div className="story-i-container">
            <div className="story-icon-div">
              <i className="fa-2x fas fa-award"></i>
            </div>
            <span className="why-desc">
              AN ISO 9001: 2015 QUALITY MANAGEMENT COMPANY
            </span>
          </div>
          <div className="story-i-container">
            <div className="story-icon-div">
              <i className="fa-2x far fa-handshake"></i>
            </div>
            <span className="why-desc">USER FRIENDLY OPERATIONS</span>
          </div>
          <div className="story-i-container">
            <div className="story-icon-div">
              <i className="fa-2x far fa-smile"></i>
            </div>
            <span className="why-desc">80% REPEATED CUSTOMER</span>
          </div>
          <div className="story-i-container">
            <div className="story-icon-div">
              <i className="fa-2x fas fa-table"></i>
            </div>
            <span className="why-desc">
              SUCCESSFULLY COMMISSIONED 450+ PLANTS
            </span>
          </div>
        </div>
        <span className="story-note">
          NOTE: IF YOU ARE NOT SATISFIED TELL US IF YOU ARE SATISFIED TELL
          OTHERS
        </span>
      </div>
    </div>
  );
};

export default Story;

import "./management.css";
import { useEffect } from "react";
import AOS from "aos";

const Management = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <div className="management">
      <div className="management-container">
        <span className="management-title">Project Management</span>
        <span className="management-small-title">
          Our Project management is the use of specific knowledge, skills, tools
          and techniques to deliver something of value to our customers. Every
          Eskimo project's execution & planning is unique and differs from
          another setup. The ongoing activities of an organization are planned
          processes and this is because the projects delivered has more shelf
          life than any other.
        </span>
        <img
          className="manage-flowchart"
          src="assets/management-flowchart.png"
          alt=""
        />
        <div className="management-info">
          <img src="assets/management-1.jpg" alt="" />
          <div className="management-info-desc" data-aos="fade-left">
            <span className="management-title">Training</span>
            <span className="management-small-title">
              At the time of erection and commissioning of projects at the
              client site, out site engineers use to train the clients plant
              operator and maintenance staff to ensure the plant is operated
              properly, to give the desired output & maintain the plant. The
              main objective of training is at the time of any minor faults in
              the plant, to reduce the response time to minimum. The maintenance
              staff can rectify the problem easily without the production
              output. Operation and maintenance manuals as well as electrical
              wiring details are also handed over to the client.
            </span>
          </div>
        </div>
        <div className="management-info">
          <div className="management-info-desc" data-aos="fade-right">
            <span className="management-title">Design</span>
            <span className="management-small-title">
              We design solutions & set up as per the need of the client which
              will help him to run his project on a long term basis.
            </span>
          </div>
          <img src="assets/management-2.jpg" alt="" />
        </div>
        <div className="management-info">
          <img src="assets/management-3.jpg" alt="" />
          <div className="management-info-desc" data-aos="fade-left">
            <span className="management-title">Consultancy</span>
            <span className="management-small-title">
              We also consult our customers to plan the right inventory of the
              spare parts & set up needs for any project.
            </span>
          </div>
        </div>
        <div className="management-info">
          <div className="management-info-desc" data-aos="fade-right">
            <span className="management-title">Engineering</span>
            <span className="management-small-title">
              Well equipped engineering to cater the client industrial
              requirement with a complete range of solutions which includes
              “Concept to Commissioning and Beyond” and cover the development of
              concept basic engineering details engineering in process,
              mechanical, Electricals, instrumentation and automations. On site
              project installation commissioning after sales supports,
              efficiency enhancement and product quality improvement.
            </span>
          </div>
          <img src="assets/management-4.jpg" alt="" />
        </div>
        <div className="management-info">
          <img src="assets/management-5.jpg" alt="" />
          <div className="management-info-desc" data-aos="fade-left">
            <span className="management-title">Customizations</span>
            <span className="management-small-title">
              We Customized our products according to Customer needs and
              requirements. Customizations in Products Colour,Products
              Dimensions,Shape and size,Products Specifications. We Don't
              Compromise with our Product Quality.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;

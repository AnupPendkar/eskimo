import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <img src="assets/Get-in-toch.jpg" alt="" />
      <div className="contact-desc">
        <span className="contact-title">get in touch</span>
        <span className="contact-small-title">
          We provide quality services not only in India but we are consultant &
          project supervisor for 20+ Countries across the globe.
        </span>
        <form className="contact-form">
          <input
            className="contact-input"
            type="text"
            placeholder="Your name"
          />
          <input className="contact-input" type="text" placeholder="email" />
          <input className="contact-input" type="text" placeholder="mobile" />
          <select id="cars" name="cars">
            <option value="Products Of Interest">Products Of Interest</option>
            <option value="Milk Processing Plant">Milk Processing Plant</option>
            <option value="Milk Chilling Plant">Milk Chilling Plant</option>
            <option value="Refrigeration Plant">Refrigeration Plant</option>
            <option value="MIlk Product Plant">Milk Product Plant</option>
            <option value="Refrigearation Equipment">
              Refrigearation Equipment
            </option>
            <option value="Cold Storage">Cold Storage</option>
            <option value="Electrical Control Panels">
              Electrical Control Panels
            </option>
          </select>
          <input
            className="contact-input write"
            type="text"
            placeholder="write here"
          />
          <button className="contact-btn btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <img src="assets/banner-4.jpg" alt="" className="newsletter-img" />
      <div className="newsletter-text">
        <span>Subscribe to Newsletter</span>
        <div className="newsletter-right">
          <input className="news-input" type="text" placeholder="E-MAIL" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

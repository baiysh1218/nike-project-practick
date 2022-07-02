import React from "react";
import Footer1 from "../../img/footer1.png";
import Footer2 from "../../img/footer2.png";
import Footer3 from "../../img/footer3.png";
import Footer4 from "../../img/footer4.png";
import Footer5 from "../../img/footer5.png";

const Footer = () => {
  return (
    <div className="footer-background">
      <div className="container">
        <div className="footer">
          <div className="footer-content">
            <div className="footer-content-gift">
              <h5 className="footer-content-h4">GIFT CARDS</h5>
              <h5 className="footer-content-h4">PROMOTIONS</h5>
              <h5 className="footer-content-h4">FIND A STORE</h5>
              <h5 className="footer-content-h4">SIGN UP FOR EMAIL</h5>
              <h5 className="footer-content-h4">BECOME A MEMBER</h5>
              <h5 className="footer-content-h4">NIKE JOURNAL</h5>
              <h5 className="footer-content-h4">SEND US FEEDBACK</h5>
            </div>
            <div className="footer-content-help">
              <h5 className="footer-content-h4">GET HELP</h5>
              <p className="footer-content-p">Order Status</p>
              <p className="footer-content-p">Shipping and Delivery</p>
              <p className="footer-content-p">Returns</p>
              <p className="footer-content-p">Returns</p>
              <p className="footer-content-p">Contact Us</p>
            </div>
            <div className="footer-content-nike">
              <h5 className="footer-content-h4">ABOUT NIKE</h5>
              <p className="footer-content-p">News</p>
              <p className="footer-content-p">Careers</p>
              <p className="footer-content-p">Investors</p>
              <p className="footer-content-p">Purpose</p>
              <p className="footer-content-p">Sustainability</p>
            </div>
          </div>
        </div>
      </div>
      <img className="footer-img-end-2" src={Footer2} alt="" />
      <img className="footer-img-end-1" src={Footer1} alt="" />
      <img className="footer-img-end-3" src={Footer3} alt="" />
      <img className="footer-img-end-4" src={Footer4} alt="" />
      <img className="footer-img-end-5" src={Footer5} alt="" />
    </div>
  );
};

export default Footer;

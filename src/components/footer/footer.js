import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-btn-container">
          <div className="footer-btn-wrapper">
            <button className="footer-btn">Let's Talk</button>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <div>
          <p>© 2019 - 2022 ESR, LLC. All rights reserved.</p>
        </div>
        <div className="footer-content-terms">
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./index.css";

function Testimonial() {
  return (
   
    <div className="testimony-section">
      <div className="testimonial-container">
        <div className="testimony">
          <span className="quotation"></span>
          <p className="testimony-p">
            We had an incredible experience working with Landify and were
            impressed they made such a big difference in only three weeks. Our
            team is so grateful for the wonderful improvements they made and
            their ability to get familiar with the product concept so quickly.
            It acted as a catalyst to take our design to the next level and get
            more eyes on our product.
          </p>
          <p className="testimony-name">Scarlett Johansson</p>
          <p className="testimony-position">CEO at Xion</p>
        </div>
        <div className="testimony-img">
          <img src="./images/client_photo.png" alt="client photo" />
        </div>
      </div>
    </div>
   
  );
}

export default Testimonial;

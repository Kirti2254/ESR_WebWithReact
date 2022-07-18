import React from "react";
import "./portFolio.css";

export const Portfolio = () => {
  return (
    <div className="services-section">
      <div className="section-headers">
        <h2>Our Portfolio</h2>
      </div>
      <div className="portfolio-menu-container">
        <div className="portfolio-menu">
          <div className="sub-menu">
            <div className="sub-menu-icon">
              <img src="./images/allMenuIcon.png" alt="icon" />
            </div>
            <p>All</p>
          </div>
          <div className="sub-menu">
            <div className="sub-menu-icon">
              <img src="./images/healthIcon.png" alt="icon" />
            </div>
            <p>Health</p>
          </div>
          <div className="sub-menu">
            <div className="sub-menu-icon">
              <img src="./images/travelIcon.png" alt="icon" />
            </div>
            <p>Travel</p>
          </div>
          <div className="sub-menu">
            <div className="sub-menu-icon">
              <img src="./images/energyIcon.png" alt="icon" />
            </div>
            <p>Energy</p>
          </div>
          <div className="sub-menu">
            <div className="sub-menu-icon">
              <img src="./images/sportsIcon.png" alt="icon" />
            </div>
            <p>Sports</p>
          </div>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="portfolio">
          <div className="portfolio-img">
            <img src="./images/iphoneX.png" />
          </div>
          <div className="portfolio-desc">
            <p className="portfolio-desc-title">Jewel Trek</p>
            <p className="portfolio-desc-category">Travel</p>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-img portfolio-grey">
            <img src="./images/samsungs92.png" />
          </div>
          <div className="portfolio-desc">
            <p className="portfolio-desc-title">Perfecto</p>
            <p className="portfolio-desc-category">Food</p>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-img portfolio-green">
            <img src="./images/Mockup2.png" />
          </div>
          <div className="portfolio-desc">
            <p className="portfolio-desc-title">Global EMR</p>
            <p className="portfolio-desc-category">Health</p>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-img">
            <img src="./images/iphoneX.png" />
          </div>
          <div className="portfolio-desc">
            <p className="portfolio-desc-title">Jewel Trek</p>
            <p className="portfolio-desc-category">Travel</p>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-img portfolio-grey">
            <img src="./images/samsungs92.png" />
          </div>
          <div className="portfolio-desc">
            <p className="portfolio-desc-title">Perfecto</p>
            <p className="portfolio-desc-category">Food</p>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-img portfolio-green">
            <img src="./images/Mockup2.png" />
          </div>
          <div className="portfolio-desc">
            <p className="portfolio-desc-title">Global EMR</p>
            <p className="portfolio-desc-category">Health</p>
          </div>
        </div>
      </div>
    </div>
  );
};

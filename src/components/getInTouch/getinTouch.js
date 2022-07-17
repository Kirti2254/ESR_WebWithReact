import React from "react";
import "./getinTouch.css";

const GetInTouch = () => {
  return (
    <section className="getinTouch-section">
      <div className="contact-form">
        <div className="second-container">
          <form>
            <div className="first-form-group">
              <div className="form-group">
                <label for="name-input">First Name</label>
                <input
                  id="name-input"
                  type="text"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="form-group">
                <label for="email-input">Enter your email</label>
                <input
                  id="email-input"
                  type="text"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="budget">Budget</label>
              <select name="budgets" id="budgets">
                <option value="" disabled selected>
                  Select your budget
                </option>
                <option value="<$10k">$10k</option>
                <option value="$10k - $50k">$10k - $50k</option>
                <option value="$50k - $100k">$50k - $100k</option>
                <option value="$100k - $250k">$100k - $250k</option>
                <option value="$250l+">$250k+</option>
              </select>
            </div>
            <div className="services-group">
              <label for="budget">Services</label>
              <div className="services-container">
                <div className="services services-active services-one">
                  <p>Web App</p>
                </div>
                <div className="services services-two">
                  <p>Mobile App</p>
                </div>
                <div className="services services-three">
                  <p>Cybersecurity</p>
                </div>
              </div>
              <div className="second-services-container">
                <div className="services services-four second-services">
                  <p>Machine Learning</p>
                </div>
                <div className="services services-five second-services">
                  <p>Custom Software</p>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="message-textarea">Notes</label>
              <textarea
                id="message-textarea"
                type="text"
                placeholder="Write your notes"
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
        <div className="first-container">
          <div class="info-container">
            <h2>
              Let's Work <br />
              <span>Together</span>
            </h2>
            <div className="info info-email">
              <div className="info-img">
                <img src="./images/Vector.png" />
              </div>
              <p>hello@esrtech.io</p>
            </div>
            <div className="info info-phone">
              <div className="info-img">
                <img src="./images/phoneVector.png" />
              </div>
              <p>+1 513 255 5928</p>
            </div>
            <div className="info info-map">
              <div className="info-img">
                <img src="./images/locationVector.png" />
              </div>
              <div className="info-location">
                <p>CALIFORNIA, USA</p>
                {/* <p>KANSAS, USA</p>
                <p>TEXAS, USA</p>
                <p>SINGAPORE, SINGAPORE</p>
                <p>KATHMANDU, NEPAL</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

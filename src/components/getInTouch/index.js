import React from "react";
import "./index.css";

const GetInTouch = () => {
  return (
    <section className="getinTouch-section">
      <div className="contact-form">
        <div className="second-container">
          <h2>Get in Touch</h2>
          <p>Fill out the form our team will get back to you</p>
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
                <label for="last-name-input">Last Name</label>
                <input
                  id="last-name-input"
                  type="text"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label for="email-input">Enter your email</label>
              <input
                id="email-input"
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <div className="form-radio">
              <p className="form-radio-buttons-p">Service</p>
              <div className="form-radio-groups">
                <div className="form-radio-buttons">
                  <div className="radio-buttons">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label for="html">Website</label>
                  </div>

                  <div className="radio-buttons">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      value="CSS"
                    />
                    <label for="css">IoT Solution</label>
                  </div>
                  <div className="radio-buttons">
                    <input
                      type="radio"
                      id="javascript"
                      name="fav_language"
                      value="JavaScript"
                    />
                    <label for="javascript">Cybersecurity</label>
                  </div>
                </div>
                <div className="form-radio-buttons">
                  <div className="radio-buttons">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label for="html">Mobile App</label>
                  </div>

                  <div className="radio-buttons">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      value="CSS"
                    />
                    <label for="css">Machine Learning</label>
                  </div>
                  <div className="radio-buttons">
                    <input
                      type="radio"
                      id="javascript"
                      name="fav_language"
                      value="JavaScript"
                    />
                    <label for="javascript">Data Analytics</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-dropdown">
              <label for="cars">Budget</label>
              <select name="cars" id="cars">
                <option value="volvo">$10k</option>
                <option value="saab">$10k - $50k</option>
                <option value="opel">$50k - $100k</option>
                <option value="audi">$100k - $250k</option>
                <option value="lambo">$250k+</option>
              </select>
            </div>
            <div className="form-group">
              <label for="message-textarea">Messages</label>
              <textarea
                id="message-textarea"
                type="text"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button>Send Message</button>
          </form>
        </div>
        <div className="first-container">
          <div class="info-container">
            <div>
              <p>Email us for a consultation</p>
              <h3>hello@esrtech.io</h3>
            </div>
            <div>
              <p>Phone Number</p>
              <h3>+1 513 255 5928</h3>
            </div>
            <div>
              <p>Address</p>
              <h3>CALIFORNIA, USA</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

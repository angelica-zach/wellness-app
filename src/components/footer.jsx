import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer_about">
                <div className="footer_logo">
                  <a href="index.html">
                    <img src="images/logo.png" alt="" />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="social_icon">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer_widget">
                <h3 className="footer_title">Contact Us</h3>
                <ul>
                  <li>
                    <a href="#">Address: 123, New Lenox Chicago, IL 60606</a>
                  </li>
                  <li>
                    <a href="#">Phone: +123 456 78900</a>
                  </li>
                  <li>
                    <a href="#">Email:email@mailto.com</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            </div>
            </div>
            </footer>
    );}
export default Footer;
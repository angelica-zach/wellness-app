import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer_content">
            <div className="footer_about">
              
              <p>
                Made with <span role="img" aria-label="heart">❤️</span> by POD4
              </p>
            </div>
            <div className="footer_social">
              <ul className="social_icon">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



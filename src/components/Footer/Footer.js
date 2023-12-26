// Footer.js

import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.row}></div>
        <br />
      </div>
      <div className={styles.container}>
        <div className="">
          <h3>Contact Us & Follow</h3>
          <ul className={styles.socialicons}>
            <div className="twitter">
              <a
                href="https://twitter.com/prem__acharya"
                target="_blank"
                className="newicon twitter"
                style={{ color: "#00aced" }}
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/prem-acharya-38772822b/"
                target="_blank"
                className="newicon linkedin"
                style={{ color: "#007bb6" }}
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </div>
            <div className="youtube">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="newicon youtube"
                style={{ color: "#FF0000" }}
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </div>
            <div className="dribbble">
              <a
                href="https://www.instagram.com/_premacharya/"
                target="_blank"
                className="newicon dribbble"
                style={{
                  color:"#DB00B5"
                }}
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </ul>
        </div>
        <p className={styles.copyrighttext}>
          Copyright &copy; 2023 All Rights Reserved by Prem Acharya
        </p>
      </div>
    </footer>
  );
};

export default Footer;

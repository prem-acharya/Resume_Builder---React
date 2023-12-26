import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const handleUpClick = () => {
  window.scrollTo({ top: -3000, behavior: "smooth" });
};

const handleDownClick = () => {
  window.scrollTo({ top: 650, behavior: "smooth" });
};

const handleDown2Click = () => {
  window.scrollTo({ top: 1500, behavior: "smooth" });
};

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.hero}>
        <div className={styles.banner}>
          <div>
            <Link className={styles.logo} onClick={handleUpClick} to="/">
              Resume <span>Builder</span>
            </Link>
          </div>
          <div className={styles["nav-links"]}>
            <nav>
              <ul>
                <li>
                  <div>
                    <Link className={styles["link"]} onClick={handleUpClick} to="/">
                      Home
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link className={styles["link"]} onClick={handleDownClick} to="/">
                      About
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link className={styles["link"]} onClick={handleUpClick} to="/resume">
                      Templates
                    </Link>
                  </div>
                </li>
                <li>
                <div>
                  <Link className={styles["link"]} onClick={handleDown2Click} to="/">Contact Us</Link>
                </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

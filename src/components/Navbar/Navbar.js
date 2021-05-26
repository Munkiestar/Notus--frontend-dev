import React, { useState } from "react";
import "./Navbar.scss";

import menuOpen from "../../assets/meni.svg";
import menuClose from "../../assets/meni-close.svg";
import { Link } from "react-scroll";

function Navbar(props) {
  const [isClicked, setIsClicked] = useState(false);

  // onClick change menu icon
  const handleMenuIconChange = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav className={isClicked ? "navbar__wrap active " : "navbar__wrap"}>
      <section className="navbar">
        <div className="navbar__icon" onClick={handleMenuIconChange}>
          {isClicked ? (
            <img src={menuClose} alt="menu-bars" />
          ) : (
            <img src={menuOpen} alt="menu-close" />
          )}
        </div>

        <ul className="navbar__links">
          <li className="navbar__link">
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              onClick={handleMenuIconChange}
            >
              TASK 3
            </Link>
          </li>
          <li className="navbar__link">
            <Link to="" spy={true} smooth={true} onClick={handleMenuIconChange}>
              TASK 4
            </Link>
          </li>
          <li className="navbar__link">
            <Link to="" spy={true} smooth={true} onClick={handleMenuIconChange}>
              TASK 5
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;

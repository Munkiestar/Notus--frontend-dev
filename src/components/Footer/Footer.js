import React from "react";

import "./Footer.scss";
import logo from "../../assets/logo-footer.svg";

function Footer(props) {
  return (
    <footer className="footer">
      <section className="footer__upper">
        <span>&copy; 2021 Notus IT d.o.o.</span>
      </section>
      <section className="footer__main">
        <img src={logo} alt="footer-logo" />
      </section>
    </footer>
  );
}

export default Footer;

import React from "react";

// import { HomeFooter } from "../styles/Footer.styled";
// import { FooterLink } from "../styles/Texts.styled";

//Import Style
import "../Styles/tools/fullScreenContainer.scss";
import "../Styles/components-styles/homeFooter.scss";

function Footer() {
  return (
    <div className="fullScreenContainer homeFooter">
      <a
        href="https://github.com/Polseznec?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://www.instagram.com/its.gast/"
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>
    </div>
  );
}

export default Footer;

import React from "react";

import { HomeFooter } from "../styles/Footer.styled";
import { FooterLink } from "../styles/Texts.styled";

function Footer() {
  return (
    <HomeFooter>
      <FooterLink
        href="https://github.com/Polseznec?tab=repositories"
        target="_blank"
      >
        GitHub
      </FooterLink>
      <FooterLink href="https://www.instagram.com/its.gast/" target="_blank">
        Instagram
      </FooterLink>
    </HomeFooter>
  );
}

export default Footer;

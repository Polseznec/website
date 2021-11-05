//import dependencies
import React from "react";
import { Link } from "react-router-dom";

//import Styles
import { Containers } from "../styles/Containers.styled";
import { LandingButton } from "../styles/Buttons.styled";
import { LandingTitle } from "../styles/Texts.styled";
//import Assets


function Landing() {
  return (
    <Containers>
      <LandingTitle>
        <h1>Pol</h1>
        <h1>Seznec</h1>
        <h1>.com</h1>
      </LandingTitle>

      <LandingButton>
        <Link to="/bonjourmonde">
          <h2>Hello</h2>
        </Link>
      </LandingButton>
    </Containers>
  );
}

export default Landing;

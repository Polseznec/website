//import dependencies
import React from "react";
//import Components
import AnimationTreeD from "../components/AnimationTreeD";
//import Styles
import "../Styles/tools/fullScreenContainer.scss";
import "../Styles/views-styles/landingView.scss";
//import Assets

function Landing() {
  return (
    <div className="fullScreenContainer landingPage">
      <AnimationTreeD />
      <h1>
        <span>Pol</span>
        <span>Seznec</span>
        <span>.com</span>
      </h1>
    </div>
  );
}

export default Landing;

//import dependenciesstate
import React, { useState } from "react";
import { Link } from "react-router-dom";

//import Style
import "../Styles/components-styles/cubeAnimation.scss";

function AnimationTreeD() {
  const [animationResize, setAnimationResize] = useState(true);

  let handelClic = () => {
    setAnimationResize(!animationResize);
  };

  return (
    <div
      className={
        animationResize ? "cubeAnimation" : "cubeAnimation toNavSwrapContainer"
      }
    >
      {/* <Link to="/bonjourmonde"> */}
      <div
        className={
          animationResize
            ? "animationSwarp"
            : "animationSwarp toNavAnimationSwrap"
        }
        onClick={handelClic}
      >
        <div className="square rotationOne"></div>
        <div className="square rotationTwo"></div>
      </div>
      <h1>
        <span>Pol</span>
        <span>Seznec</span>
        <span>.com</span>
      </h1>
      {/* </Link> */}
    </div>
  );
}

export default AnimationTreeD;

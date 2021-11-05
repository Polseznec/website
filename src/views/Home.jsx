import React from "react";

//import Components
import Nav from "../components/Nav";
import TopHome from "../components/TopHome";
import Footer from "../components/Footer";

//import Styles
import { Containers } from "../styles/Containers.styled";

function Home() {
  return (
    <Containers>
      <Nav />
      <TopHome />
      <Footer />
    </Containers>
  );
}

export default Home;

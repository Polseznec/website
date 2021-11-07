import React from "react";

//import Components
import Nav from "../components/Nav";
import TopHome from "../components/TopHome";
import Footer from "../components/Footer";

//import Styles
import '../Styles/views-styles/homeView.scss'


function Home() {
  return (
    <div className="homePage">
      <Nav />
      <TopHome />
      <Footer />
    </div>
  );
}

export default Home;

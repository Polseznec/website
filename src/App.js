import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Import Views
import Landing from "./views/Landing";
import Home from "./views/Home";

//Import Styles
import "./App.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/bonjourmonde" element={<Home />} />
          <Route element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

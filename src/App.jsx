import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/navigation";
import Home from "./Pagesss/Home";
import Exercise from "./Pagesss/exercise";
import Selfcare from "./Pagesss/selfcare";
import Meal from "./Pagesss/Meal";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="meals" element={<Meal />} />
        <Route path="workout" element={<Exercise />} />
        <Route path="selfcare" element={<Selfcare />} />
      </Routes>
    </Router>
  );
}

export default App;

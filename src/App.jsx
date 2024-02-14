import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/navigation";
import Home from "./Pages/Home";
import Exercise from "./Pages/exercise";
import Selfcare from "./Pages/selfcare";
import Meal from "./Pages/Meal";

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

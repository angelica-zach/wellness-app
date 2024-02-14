import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/navigation";
import Home from "./pages/Home";
import Exercise from "./pages/exercise";
import Selfcare from "./pages/selfcare";
import Meal from "./pages/Meal";


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

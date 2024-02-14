import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation";
import Home from "./Pages/Home";
import Exercise from "./Pages/Exercise";
import Selfcare from "./Pages/selfcare";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="meals" element={<MealIdeas />} /> */}
        <Route path="workout" element={<Exercise />} />
        <Route path="selfcare" element={<Selfcare />} />
      </Routes>
    </Router>
  );
}

export default App;

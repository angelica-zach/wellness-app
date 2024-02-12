import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation";
import Home from "./Pages/Home";
import Exercise from "./pages/Exercise";
import ExerciseCards from "./pages/ExerciseStack";
import Selfcare from "./pages/Selfcare";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="meals" element={<ExerciseCards />} />
        <Route path="workout" element={<Exercise />} />
        <Route path="selfcare" element={<Selfcare />} />
      </Routes>
    </Router>
  );
}

export default App;

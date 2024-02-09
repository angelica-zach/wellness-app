// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ColorSchemesExample from "./components/navbar";
import Home from "./pages/Home";
import MealIdeas from "./pages/MealIdeas";
import Woutout from "./pages/Workout";
import Selfcare from "./pages/Selfcare";



function App() {
  return (
    <Router>
      <ColorSchemesExample />
      { <Routes>
        <Route path="/" element={<Home />} />
        <Route path="meals" element={<MealIdeas />} />
        <Route path="workout" element={<Woutout />} />
        <Route path="selfcare" element={<Selfcare />} />
      </Routes> }
    </Router>
  );
}

export default App;

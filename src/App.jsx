// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ColorSchemesExample from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";
import MealIdeas from "./pages/Meal.jsx";
import Workout from "./pages/Workout.jsx";
import Selfcare from "./pages/Selfcare.jsx";
import Footer from "./components/footer.jsx"



function App() {
  return (
    <Router>
      <ColorSchemesExample />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Meal" element={<MealIdeas />} />
        <Route path="workout" element={<Workout />} />
        <Route path="selfcare" element={<Selfcare />} />
      </Routes> 
      <Footer/>
    </Router>
  );
}

export default App;

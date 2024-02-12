// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ColorSchemesExample from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";
import Meal from "./pages/Meal.jsx";
import Workout from "./pages/Workout.jsx";
import Selfcare from "./pages/Selfcare.jsx";
import Footer from "./components/footer.jsx";
import Exercise from "./pages/exercise.jsx";



function App() {
  return (
    <Router>
      <ColorSchemesExample />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Meal" element={<Meal />} />
        <Route path="workout" element={<Exercise />} />
        <Route path="selfcare" element={<Selfcare />} />
      </Routes> 
      <Footer/>
    </Router>
  );
}

export default App;

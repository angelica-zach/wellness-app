// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation";
import SelfCare from "./Pages/selfcare";
function App() {
  return (
    <Router>
      <Navbar />
      <SelfCare />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="meals" element={<MealIdeas />} />
        <Route path="workout" element={<Woutout />} />
        <Route path="selfcare" element={<Selfcare />} />
      </Routes> */}
    </Router>
  );
}

export default App;

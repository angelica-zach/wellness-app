// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation";
import ListDisplay from "./components/skincarelist";
function App() {
  return (
    <Router>
      <Navbar />
      <ListDisplay />
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

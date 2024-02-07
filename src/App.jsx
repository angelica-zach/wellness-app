import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExerciseStack from "./Pages/ExerciseStack"
// import Meal from "./Pages/Meal"


export default function App() {

  return (
    <main className="bg-dark">
      <BrowserRouter>
        <Routes>
          <Route
            path="/excercise"
            element={<ExerciseStack />}
          />
          {/* <Route
            path="/meal"
            element={<Meal />}
          /> */}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MyComponent from './Pages/quotes';

function App() {
  return (
    <Router>
      
      {/* Wrap Route elements in a Routes component */}
      <Routes>
       
       <Route path="/" element={<MyComponent />} /> 
       
        
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {Home} from "./pages/Home";
function App() {
  return (
    <div className="App">
      
        
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
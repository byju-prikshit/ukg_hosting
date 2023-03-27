import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Global_ukg from "./Global_ukg";
import Localised_ukg from "./Localised_ukg";

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Localised_ukg/>} />
        <Route path="/global_ukg" element={<Global_ukg/>} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Global_ukg from "./Global_ukg";
import Localised_ukg from "./Localised_ukg";
import Loader from "./components/Loader/Loader";

function App() {
  const [loader,setLoader]=useState(true);
  return (<>
  <Loader displayLoader={loader}/>
    <Router>
      <Routes>
        <Route  path="/" element={<Localised_ukg loaderTrigger={setLoader}/>} />
        <Route path="/global_ukg" element={<Global_ukg loaderTrigger={setLoader}/>} />
      </Routes>
    </Router></>
  );
}

export default App;

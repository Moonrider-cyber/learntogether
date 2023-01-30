import React from "react";
import "./index.css";
import Homepage from "./Pages/Homepage/Homepage";
import Signup from "./Pages/Signup/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Homepage/> */}
    </>
  );
}

export default App;

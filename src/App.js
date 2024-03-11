import React from "react";
import Home from "./page/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./page/login/Login";
import Signup from "./page/signup/Signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

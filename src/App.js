import React, { useState, useEffect } from "react";
import Home from "./page/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./page/login/Login";
import Signup from "./page/signup/Signup";
import { selectUser, userAsync } from "./features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./page/dashboard/Dashboard";
import CreateBot from "./page/createBot/CreateBot";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAsync());
  }, [dispatch]);
  console.log(user);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/createNewBot" element={<CreateBot />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

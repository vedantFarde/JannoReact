import React, { useState, useEffect } from "react";
import Home from "./page/home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./page/login/Login";
import Signup from "./page/signup/Signup";
import Dashboard from "./page/dashboard/Dashboard";
import CreateBot from "./page/createBot/CreateBot";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setCurrentUser } from "./features/auth/authSlice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authUser);
  const Cuser = useSelector((state) => state.auth.currentUser);
  console.log(Cuser);

  useEffect(() => {
    if (Cuser) {
      navigate("/dashboard");
    }
  }, [Cuser]);

  useEffect(() => {
    const getUser = () => {
      const url = `http://localhost:8000/auth/login/success`;
      fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          dispatch(setAuthUser(resObject.user.user));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, [dispatch]); /// get userdata after goole login

  useEffect(() => {
    if (user) {
      dispatch(setCurrentUser(user));
    }
  }, [user, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home Cuser={Cuser} />} />
        <Route path="/dashboard" element={<Dashboard Cuser={Cuser} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createNewBot" element={<CreateBot />} />
      </Routes>
    </>
  );
}

export default App;

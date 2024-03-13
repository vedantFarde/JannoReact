import React, { useEffect } from "react";
import Home from "./page/home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./page/login/Login";
import Signup from "./page/signup/Signup";
import Dashboard from "./page/dashboard/Dashboard";
import CreateBot from "./page/createBot/CreateBot";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthUser,
  setCurrentUser,
  setIsAuthenticated,
} from "./features/auth/authSlice";
import PrivateRoute from "./utility/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authUser);
  const Cuser = useSelector((state) => state.auth.currentUser);
  const authenticate = useSelector((state) => state.auth.isAuthenticated);

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
      dispatch(setIsAuthenticated(true));
    }
  }, [user]);
  console.log(authenticate);

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute authenticate={authenticate} />}>
          <Route path="/dashboard" element={<Dashboard Cuser={Cuser} />} />
          <Route path="/createNewBot" element={<CreateBot />} />
        </Route>
        {authenticate && (
          <Route path="/dashboard" element={<Dashboard Cuser={Cuser} />} />
        )}
        {authenticate && <Route path="/createNewBot" element={<CreateBot />} />}

        <Route path="/" element={<Home Cuser={Cuser} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* <Route path="/dashboard" element={<Dashboard Cuser={Cuser} />} /> */}
        {/* <Route path="/createNewBot" element={<CreateBot />} /> */}
      </Routes>
    </>
  );
}

export default App;

import React, { useEffect } from "react";
import Home from "./page/home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./page/login/Login";
import Signup from "./page/signup/Signup";
import UploadDocuments from "./page/createBot/UploadDocuments";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthUser,
  setCurrentUser,
  setIsAuthenticated,
} from "./features/auth/authSlice";
import PrivateRoute from "./utility/PrivateRoute";
import Dashboard1 from "./page/dashboard1/Dashboard1";
import CreateNewBot from "./page/CreateNewBot/CreateNewBot";
import NewDashboard from "./page/newDashboard/newDashboard";

function App() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authUser);
  const Cuser = useSelector((state) => state.auth.currentUser);
  const authenticate = useSelector((state) => state.auth.isAuthenticated);
  const manualAuth = useSelector((state) => state.auth.manualAuth);

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

  useEffect(() => {
    if (manualAuth === false) {
      getUser();
    }
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(setCurrentUser(user));
      dispatch(setIsAuthenticated(true));
    }
  }, [user]);

  const handelLogOut = () => {
    dispatch(setCurrentUser(null));
    dispatch(setAuthUser(null));
    dispatch(setIsAuthenticated(false));
    navigate("/");
  };

  console.log(authenticate);
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute authenticate={authenticate} />}>
          <Route
            path="/newdashboard"
            element={<Dashboard1 Cuser={Cuser} handelLogOut={handelLogOut} />}
          />
          <Route
            path="/dashboard"
            element={<NewDashboard Cuser={Cuser} handelLogOut={handelLogOut} />}
          />
          <Route
            path="/uploadDocuments"
            element={<UploadDocuments handelLogOut={handelLogOut} />}
          />
          <Route
            path="/createNewBot"
            element={<CreateNewBot handelLogOut={handelLogOut} />}
          />
        </Route>
        {/* {authenticate && (
          <Route path="/dashboard" element={<Dashboard Cuser={Cuser} />} />
        )}
        {authenticate && <Route path="/createNewBot" element={<CreateBot />} />} */}
        <Route path="/" element={<Home Cuser={Cuser} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

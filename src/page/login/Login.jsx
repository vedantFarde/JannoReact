import React, { useEffect, useState } from "react";
import Navbar from "../../features/navbar/Navbar";
import Sign from "../../features/auth/Sign";
import { useDispatch } from "react-redux";
import {
  setAuthUser,
  setCurrentUser,
  setIsAuthenticated,
  setIsmanualAuth,
} from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(newUser);
  };

  const handleGlogin = () => {
    window.open("http://localhost:8000/auth/google/callback", "_self");
    dispatch(setIsmanualAuth(false));
  };
  const handleFlogin = () => {
    window.open("http://localhost:8000/auth/facebook/callback", "_self");
    dispatch(setIsmanualAuth(false));
  };

  const handleManuallogin = async (e) => {
    try {
      const url = "http://localhost:8000/auth/login";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log(data);

      if (res.status === 200) {
        dispatch(setIsAuthenticated(true));
        dispatch(setAuthUser(data.user.user));
        dispatch(setCurrentUser(data.user.user));
        dispatch(setIsmanualAuth(true));
        navigate("/newdashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <Sign
        handleGlogin={handleGlogin}
        handleManuallogin={handleManuallogin}
        handelChange={handelChange}
        user={user}
        handleFlogin={handleFlogin}
      />
    </>
  );
}

export default Login;

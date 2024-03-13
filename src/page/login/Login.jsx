import React, { useEffect, useState } from "react";
import Navbar from "../../features/navbar/Navbar";
import Sign from "../../features/auth/Sign";
import { useDispatch } from "react-redux";
import { setAuthUser, setCurrentUser } from "../../features/auth/authSlice";
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
  };
  const handleFlogin = () => {
    // window.open("http://localhost:8000/auth/google/callback", "_self");
  };

  const handleManuallogin = async (e) => {
    try {
      const url = "http://localhost:8000/auth/login";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();

      if (res.ok) {
        dispatch(setAuthUser(data.user.user));
        navigate("/dashboard");
      } else {
        console.log("Login failed");
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

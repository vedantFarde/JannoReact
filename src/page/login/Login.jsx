import React, { useEffect, useState } from "react";
import Navbar from "../../features/navbar/Navbar";
import Sign from "../../features/auth/Sign";
import { useDispatch } from "react-redux";
import { setAuthUser, setCurrentUser } from "../../features/auth/authSlice";
function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

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
        dispatch(setCurrentUser(resObject.user.user));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(newUser);
  };

  const handleGlogin = () => {
    window.open("http://localhost:8000/auth/google/callback", "_self");
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
      />
    </>
  );
}

export default Login;

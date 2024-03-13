import React, { useState } from "react";
import Navbar from "../../features/navbar/Navbar";
import Register from "../../features/auth/Register";

function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log(user);

  const handelChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(newUser);
  };

  const handleGlogin = () => {
    window.open(`http://localhost:8000/auth/google/callback`, "_self");
  };
  const handleManualRes = async () => {
    console.log("in", user);
    try {
      const url = "http://localhost:8000/auth/manualreg";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        console.log("Registration successful");
      } else {
        console.log("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  return (
    <>
      <Navbar />
      <Register
        handleGlogin={handleGlogin}
        handelChange={handelChange}
        handleManualRes={handleManualRes}
        user={user}
      />
    </>
  );
}

export default Signup;

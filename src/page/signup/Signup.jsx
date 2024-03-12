import React from "react";
import Navbar from "../../features/navbar/Navbar";
import Register from "../../features/auth/Register";

function Signup() {
  const handleGlogin = () => {
    window.open(`http://localhost:8000/auth/google/callback`, "_self");
  };
  return (
    <>
      <Navbar />
      <Register handleGlogin={handleGlogin} />
    </>
  );
}

export default Signup;

import React, { useEffect, useState } from "react";
import Navbar from "../../features/navbar/Navbar";
import Sign from "../../features/auth/Sign";

function Login() {
  const handleGlogin = () => {
    window.open(`http://localhost:8000/auth/google/callback`, "_self");
  };

  return (
    <>
      <Navbar />
      <Sign handleGlogin={handleGlogin} />
    </>
  );
}

export default Login;

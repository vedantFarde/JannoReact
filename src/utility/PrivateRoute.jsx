import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ authenticate }) => {
  const authenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log(authenticated);
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

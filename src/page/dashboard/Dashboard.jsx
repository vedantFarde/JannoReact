import React from "react";
import Navbar1 from "../../features/navbar1/Navbar1";
import { useDispatch } from "react-redux";
import {
  setAuthUser,
  setCurrentUser,
  setIsAuthenticated,
} from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Dashboard({ Cuser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelLogOut = () => {
    dispatch(setCurrentUser(null));
    dispatch(setAuthUser(null));
    dispatch(setIsAuthenticated(false));
    navigate("/");
  };
  return (
    <div>
      <Navbar1 handelLogOut={handelLogOut} />
      <>
        <div>Log into</div>
        <div>{Cuser.email}</div>
      </>
    </div>
  );
}

export default Dashboard;

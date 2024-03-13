import React from "react";
import Navbar1 from "../../features/navbar1/Navbar1";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Dashboard({ Cuser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelLogOut = () => {
    dispatch(setCurrentUser(null));
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

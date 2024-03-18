import React, { useState } from "react";
import Templete from "../../features/dataInputs/Templete";
import Navbar1 from "../../features/navbar1/Navbar1";
import { useDispatch } from "react-redux";
import {
  setAuthUser,
  setCurrentUser,
  setIsAuthenticated,
} from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function CreateBot() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelLogOut = () => {
    dispatch(setCurrentUser(null));
    dispatch(setAuthUser(null));
    dispatch(setIsAuthenticated(false));
    navigate("/");
  };
  const [active, setActive] = useState("main");
  return (
    <div>
      <Navbar1 handelLogOut={handelLogOut} />
      <Templete />
    </div>
  );
}

export default CreateBot;

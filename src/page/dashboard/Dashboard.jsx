import React, { useEffect, useState } from "react";
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
  const [data, setData] = useState([]);

  const handelLogOut = () => {
    dispatch(setCurrentUser(null));
    dispatch(setAuthUser(null));
    dispatch(setIsAuthenticated(false));
    navigate("/");
  };

  useEffect(() => {
    const getRelatedData = async () => {
      const uri = "http://localhost:8000/v1/getDoc"; // Using environment variable for API URL
      try {
        const res = await fetch(uri, {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const dataDa = await res.json();
        setData(dataDa.data.Contents);
      } catch (err) {
        console.log(err);
      }
    };
    getRelatedData();
  }, []);

  return (
    <div>
      <Navbar1 handelLogOut={handelLogOut} />
      <>
        <div>Logged in as</div>
        <div>{Cuser.email}</div>
        <div>
          {data.length > 0 &&
            data.map((elem) => (
              <div key={elem.Key}>
                <div>{elem.Key}</div>
                <div>{elem.size}</div>
              </div>
            ))}
        </div>
      </>
    </div>
  );
}

export default Dashboard;

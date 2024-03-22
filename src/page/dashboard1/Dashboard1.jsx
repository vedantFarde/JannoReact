import React, { useEffect, useState } from "react";
import Navbar1 from "../../features/navbar1/Navbar1";
import { useDispatch } from "react-redux";
import {
  setAuthUser,
  setCurrentUser,
  setIsAuthenticated,
} from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Preview from "./pageComponand/Preview";
import Mainn from "./pageComponand/Mainn";
import Sidebar from "./pageComponand/Sidebar";

function Dashboard1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [preview, setPreview] = useState(null);
  const [active, setActive] = useState(false);

  const [type, setType] = useState("all");

  const handelLogOut = () => {
    dispatch(setCurrentUser(null));
    dispatch(setAuthUser(null));
    dispatch(setIsAuthenticated(false));
    navigate("/");
  };
  const getRelatedData = async () => {
    const uri = "http://localhost:8000/v1/getdoc";
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
  console.log(data);

  useEffect(() => {
    if (type === "all") getRelatedData();
  }, [type]);

  const handelPreview = async (file) => {
    const uri = "http://localhost:8000/v1/getpreview";
    try {
      const res = await fetch(uri, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: file }),
      });
      const dataDa = await res.json();
      console.log("previewUrl", dataDa);
      setPreview(dataDa.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handelRemove = async (file) => {
    console.log(file);
    const uri = "http://localhost:8000/v1/getdelete";
    try {
      const res = await fetch(uri, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: file }),
      });
      const dataDa = await res.json();
      if (res.ok) {
        getRelatedData();
        setPreview(null);
      }
      console.log("previewUrl", dataDa);
    } catch (err) {
      console.log(err);
    }
  };
  const handeldownload = async (file) => {
    const uri = "http://localhost:8000/v1/getpreview";
    try {
      const res = await fetch(uri, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: file }),
      });
      const dataDa = await res.json();
      const temp = document.createElement("a");
      temp.href = dataDa?.data;
      // temp.setAttribute("download", file.split("/")[2]);
      temp.download = file.split("/")[2];
      temp.target = "_blank";
      temp.rel = "noreferrer";
      temp.style.display = "none";
      document.body.appendChild(temp);
      temp.click();
      document.body.removeChild(temp);
    } catch (err) {
      console.log(err);
    }
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen">
      <div>
        <Navbar1 handelLogOut={handelLogOut} />
      </div>
      <div className="flex h-full w-full gap-5 md:p-10 p-4 ">
        <Sidebar
          setType={setType}
          active={active}
          windowWidth={windowWidth}
          setActive={setActive}
        />
        <Mainn
          data={data}
          handelRemove={handelRemove}
          handelPreview={handelPreview}
          handeldownload={handeldownload}
          windowWidth={windowWidth}
          type={type}
          active={active}
          setActive={setActive}
        />
        <Preview
          windowWidth={windowWidth}
          preview={preview}
          setPreview={setPreview}
        />
      </div>
    </div>
  );
}

export default Dashboard1;

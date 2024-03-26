import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import Sidebar from "./dashboardcomponand/Sidebar";

import { Bars3Icon } from "@heroicons/react/24/outline";

import Upload from "./dashboardcomponand/Upload";
import Preview from "./dashboardcomponand/Preview";
import Textdata from "../../features/dataInputs/Textdata";
import FileUpload from "../../features/dataInputs/Fileuplode";
import Weblink from "../../features/dataInputs/Weblink";
import FormforBotCreation from "./dashboardcomponand/FormforBotCreation";

function NewDashboard({ handelLogOut }) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState("");

  const [active, setActive] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [preview, setPreview] = useState(null);
  const [type, setType] = useState("all");

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

  useEffect(() => {
    getRelatedData();
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
    <div className="max-h-screen max-w-screen flex flex-row">
      <div
        className={
          "flex flex-col justify-between items-center w-[15%] md:w-[6%] h-screen  bg-stone-200 "
        }>
        <Bars3Icon
          className="mt-10 h-6 w-6"
          aria-hidden="true"
          onClick={toggleSidebar}
        />
        <div
          onClick={handelLogOut}
          className="flex items-center mb-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <svg
            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 16">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
            />
          </svg>
        </div>
      </div>
      <Sidebar
        handelLogOut={handelLogOut}
        toggleSidebar={toggleSidebar}
        isOpen={isOpen}
        setCurrent={setCurrent}
        setType={setType}
      />

      {(current === "DocAll" ||
        current === "DocText" ||
        current === "DocPdf" ||
        current === "DocHtml") && (
        <div className="w-full overflow-hidden flex max-h-full">
          <div className="w-full md:w-[65%] overflow-y-scroll scroll-smooth gap-3  ">
            <Upload
              data={data}
              handelRemove={handelRemove}
              handelPreview={handelPreview}
              handeldownload={handeldownload}
              windowWidth={windowWidth}
              type={type}
              current={current}
            />
          </div>
          <div className="md:flex hidden md:w-[35%] p-2">
            <Preview
              preview={preview}
              windowWidth={windowWidth}
              setPreview={setPreview}
            />
          </div>
        </div>
      )}

      {current === "UpText" && (
        <div className="flex justify-center flex-col gap-10 items-center w-11/12 p-10">
          <div>
            <h1 className="text-2xl md:text-5xl font-black	">
              <strong>DATA SOURCES</strong>
            </h1>
          </div>
          <div className="w-full">
            <Textdata />
          </div>
        </div>
      )}
      {current === "UpPdf" && (
        <div className="flex justify-center flex-col gap-10 items-center w-11/12 p-10">
          <div>
            <h1 className="text-2xl md:text-5xl font-black	">
              <strong>DATA SOURCES</strong>
            </h1>
          </div>
          <div className="w-full">
            <FileUpload />
          </div>
        </div>
      )}
      {current === "UpHtml" && (
        <div className="flex justify-center flex-col gap-10 items-center w-11/12 p-10">
          <div>
            <h1 className="text-2xl md:text-5xl font-black	">
              <strong>DATA SOURCES</strong>
            </h1>
          </div>
          <div className="w-full">
            <Weblink />
          </div>
        </div>
      )}

      {current === "CreNewBot" && (
        <div className="flex justify-center flex-col gap-3 items-center w-11/12 p-10">
          <div>
            <h1 className="text-2xl md:text-4xl font-black	">
              <strong>Create New Bot</strong>
            </h1>
          </div>
          <div className="w-full">
            <FormforBotCreation data={data} />
          </div>
        </div>
      )}
    </div>
  );
}

export default NewDashboard;

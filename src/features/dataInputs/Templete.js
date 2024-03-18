import React, { useState } from "react";
import Textdata from "./Textdata";
import Weblink from "./Weblink";
import Fileuplode from "./Fileuplode";

function Templete() {
  const [type, setType] = useState("Text");
  return (
    <div className="w-full mt-10 gap-10 flex text-center flex-wrap justify-center items-center flex-col">
      <div>
        <h1 className="text-2xl md:text-5xl font-black	">
          <strong>DATA SOURCES</strong>
        </h1>
      </div>
      <div className="flex flex-wrap gap-10 text-xl font-semibold	 ">
        <button type="button" onClick={() => setType("Text")}>
          <span
            className={`hover:text-red-500 ${
              type === "Text" ? "text-red-500" : ""
            }`}>
            Text
          </span>
        </button>
        <button type="button" onClick={() => setType("Files")}>
          <span
            className={`hover:text-red-500 ${
              type === "Files" ? "text-red-500" : ""
            }`}>
            Files
          </span>
        </button>
        <button type="button" onClick={() => setType("Website")}>
          <span
            className={`hover:text-red-500 ${
              type === "Website" ? "text-red-500" : ""
            }`}>
            Website
          </span>
        </button>
      </div>
      <div className="md:w-1/2 w-11/12">
        <div>{type === "Text" && <Textdata />}</div>
        <div>{type === "Files" && <Fileuplode />}</div>
        <div>{type === "Website" && <Weblink />}</div>
      </div>
    </div>
  );
}

export default Templete;

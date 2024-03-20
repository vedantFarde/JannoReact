import React from "react";
import pdf from "../../../features/dataInputs/pdf.svg";
function Sidebar({ setType }) {
  return (
    <div className="flex w-[15%] bg-stone-200 p-5 rounded-lg  ">
      <div className="flex flex-col gap-2 mt-10 w-full justify-start items-center ">
        <button
          type="button"
          onClick={() => setType("pdf")}
          className="flex gap-5 justify-start items-center bg-amber-100 rounded-lg p-2 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>

          <strong>ALL</strong>
        </button>
        <button
          type="button"
          onClick={() => setType("pdf")}
          className="flex gap-5 justify-start items-center bg-amber-100 rounded-lg p-2 w-full">
          <img src={pdf} alt="pdf" width={"15%"} className="hidden md:flex" />
          <strong>PDF</strong>
        </button>
        <button
          type="button"
          onClick={() => setType("text")}
          className="flex gap-5 justify-start items-center bg-amber-100 rounded-lg p-2 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hidden md:flex">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
          <strong>TEXT</strong>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

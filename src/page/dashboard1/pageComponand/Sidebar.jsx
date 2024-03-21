import React from "react";
import pdf from "../../../features/dataInputs/pdf.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Sidebar({ setType, active, windowWidth, setActive }) {
  return (
    <>
      {windowWidth < 900 ? (
        active && (
          <div className="flex md:w-[15%] w-36 z-10 bg-gradient-to-r from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.8)] p-2 md:p-5 rounded-lg h-max md:h-full right-0 fixed md:relative  ">
            <div className="flex flex-col flex-wrap h-max gap-2 mt-1 w-full justify-start items-start ">
              <div className=" block md:hidden">
                {active && (
                  <XMarkIcon
                    className="block h-6 w-6 text-white"
                    aria-hidden="true"
                    onClick={() => setActive(!active)}
                  />
                )}
              </div>
              <button
                type="button"
                onClick={() => {
                  setType("all");
                  setActive(!active);
                }}
                className="flex gap-5 justify-start items-center bg-amber-100 rounded-lg p-2 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6  md:flex">
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
                onClick={() => {
                  setType("pdf");
                  setActive(!active);
                }}
                className="flex gap-5 justify-start items-center bg-amber-100 rounded-lg p-2 w-full">
                <img src={pdf} alt="pdf" width={"15%"} className=" md:flex" />
                <strong>PDF</strong>
              </button>
              <button
                type="button"
                onClick={() => {
                  setType("text");
                  setActive(!active);
                }}
                className="flex gap-5 justify-start items-center bg-amber-100 rounded-lg p-2 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6  md:flex">
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
        )
      ) : (
        <div className="flex md:w-[15%] w-36 bg-stone-200 p-2 md:p-5 rounded-lg h-full absolute md:relative  ">
          <div className="flex flex-col flex-wrap h-max gap-2 mt-1 w-full justify-start items-center ">
            <button
              type="button"
              onClick={() => {
                setType("all");
              }}
              className="flex gap-5 justify-start items-center bg-amber-100 rounded-lg p-2 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6  md:flex">
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
              onClick={() => {
                setType("pdf");
              }}
              className="flex gap-5 justify-start items-center bg-amber-100 rounded-lg p-2 w-full">
              <img src={pdf} alt="pdf" width={"15%"} className=" md:flex" />
              <strong>PDF</strong>
            </button>
            <button
              type="button"
              onClick={() => {
                setType("text");
              }}
              className="flex gap-5 justify-start items-center bg-amber-100 rounded-lg p-2 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6  md:flex">
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
      )}
    </>
  );
}

export default Sidebar;

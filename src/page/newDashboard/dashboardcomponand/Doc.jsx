import React from "react";
import pdf from "../../../features/dataInputs/pdf.svg";

function Doc({
  elem,
  handelRemove,
  handelPreview,
  handeldownload,
  windowWidth,
}) {
  return (
    <div
      key={elem.Key}
      className="flex flex-col w-full gap-5 md:flex-row justify-between md:items-center">
      <div className="flex gap-5 justify-left items-center">
        <div className="w-8">
          {elem.Key.split("/")[1] === "pdf" ? (
            <img src={pdf} alt="pdf img" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          )}
        </div>
        <div>{elem.Key.split("/")[2]}</div>
      </div>
      <div className="flex md:flex-row flex-row-reverse	 gap-2 justify-between items-center">
        {windowWidth > 900 && (
          <button
            onClick={() => handelPreview(elem.Key)}
            className="rounded-lg p-2 bg-lime-200"
            type="button">
            Preview
          </button>
        )}
        <button
          className="rounded-lg p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white	"
          onClick={() => handeldownload(elem.Key)}
          type="button">
          Download
        </button>
        <button
          className="rounded-lg p-2 bg-red-300"
          onClick={() => handelRemove(elem.Key)}
          type="button">
          Remove
        </button>
      </div>
    </div>
  );
}

export default Doc;

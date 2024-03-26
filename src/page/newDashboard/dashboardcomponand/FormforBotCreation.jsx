import React, { useState, useEffect } from "react";
import pdf from "../../../features/dataInputs/pdf.svg";
import { Link } from "react-router-dom";

function FormforBotCreation({ data }) {
  const [botName, setBotName] = useState("");
  const [type, setType] = useState("all");

  const [docList, setDocList] = useState([]);

  const handleCheckboxChange = (key) => {
    if (docList.includes(key)) {
      setDocList(docList.filter((item) => item !== key));
    } else {
      setDocList([...docList, key]);
    }
  };

  const handelForm = async () => {};

  return (
    <div className=" flex w-full h-full">
      <form className="flex flex-col w-full h-full gap-1 justify-center items-center">
        <div className="relative w-full ">
          <input
            value={botName}
            onChange={(e) => setBotName(e.target.value)}
            type="text"
            id="floating_helper"
            aria-describedby="floating_helper_text"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_helper"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
            Bot Name
          </label>
        </div>
        <div className="border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="me-2">
              <Link
                onClick={() => setType("all")}
                to="#"
                className={`${
                  type === "all"
                    ? "text-blue-600 active border-blue-600"
                    : "text-gray-500 "
                } inline-flex items-center justify-center p-5 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group`}>
                <svg
                  className={
                    type === "all"
                      ? " w-4 h-4 me-2 text-blue-500 dark:text-blue-500 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                      : "w-4 h-4 me-2 text-gray-500 dark:text-blue-500 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  }
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                All
              </Link>
            </li>
            <li className="me-2">
              <Link
                onClick={() => setType("pdf")}
                to="#"
                className={`${
                  type === "pdf"
                    ? "text-blue-600 active border-blue-600"
                    : "text-gray-500"
                } inline-flex items-center justify-center p-5 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group`}>
                <svg
                  className={
                    type === "pdf"
                      ? " w-4 h-4 me-2 text-blue-500 dark:text-blue-500 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                      : "w-4 h-4 me-2 text-gray-500 dark:text-blue-500 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  }
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
                </svg>
                Pdf
              </Link>
            </li>
            <li className="me-2">
              <Link
                to="#"
                onClick={() => setType("text")}
                className={`${
                  type === "text"
                    ? "text-blue-600 active border-blue-600"
                    : "text-gray-500"
                } inline-flex items-center  justify-center p-5 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={
                    type === "text"
                      ? " w-4 h-4 me-2 text-blue-500 dark:text-blue-500 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                      : "w-4 h-4 me-2 text-gray-500 dark:text-blue-500 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  }>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                Text
              </Link>
            </li>
            <li className="me-2">
              <Link
                onClick={() => setType("html")}
                to="#"
                className={`${
                  type === "html"
                    ? "text-blue-600 active border-blue-600"
                    : "text-gray-500"
                } inline-flex items-center justify-center p-5 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group`}>
                <svg
                  className={
                    type === "html"
                      ? " w-4 h-4 me-2 text-blue-500 dark:text-blue-500 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                      : "w-4 h-4 me-2 text-gray-500 dark:text-blue-500 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  }
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
                Html
              </Link>
            </li>
          </ul>
        </div>
        <div className="h-96 w-full p-2 overflow-y-scroll">
          {type === "all" ? (
            <div className="flex flex-col overflow-y-hidden">
              {data.map((ele) => (
                <div className="flex justify-between">
                  <div
                    key={ele.Key}
                    onClick={() => handleCheckboxChange(ele.Key)}
                    className="flex items-center mb-2">
                    <div className="flex  w-8">
                      {ele.Key.split("/")[1] === "pdf" ? (
                        <img src={pdf} alt="pdf img" />
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-gray-600">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                          />
                        </svg>
                      )}
                    </div>
                    <h3 className="ml-2">{ele.Key.split("/")[2]}</h3>
                  </div>
                  <div>
                    <input
                      id={`checkbox-${ele.Key}`}
                      type="checkbox"
                      onChange={() => handleCheckboxChange(ele.Key)}
                      checked={docList.includes(ele.Key)}
                      className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col overflow-y-hidden">
              {data
                .filter((ele) => {
                  return ele.Key.split("/")[1] === type;
                })
                .map((ele) => (
                  <div className="flex justify-between">
                    <div
                      key={ele.Key}
                      onClick={() => handleCheckboxChange(ele.Key)}
                      className="flex items-center mb-2">
                      <div className="flex  w-8">
                        {ele.Key.split("/")[1] === "pdf" ? (
                          <img src={pdf} alt="pdf img" />
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-600">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                            />
                          </svg>
                        )}
                      </div>
                      <h3 className="ml-2">{ele.Key.split("/")[2]}</h3>
                    </div>
                    <div>
                      <input
                        id={`checkbox-${ele.Key}`}
                        type="checkbox"
                        onChange={() => handleCheckboxChange(ele.Key)}
                        checked={docList.includes(ele.Key)}
                        className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => handelForm()}
          className="text-white w-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Create Bot
        </button>
      </form>
    </div>
  );
}

export default FormforBotCreation;

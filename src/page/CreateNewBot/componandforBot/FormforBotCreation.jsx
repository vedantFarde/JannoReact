import React, { useState, useEffect } from "react";
import pdf from "../../../features/dataInputs/pdf.svg";

function FormforBotCreation() {
  const [data, setData] = useState([]);
  const [botName, setBotName] = useState("");
  const [docList, setDocList] = useState([]);

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
  }, []);

  const handleCheckboxChange = (key) => {
    if (docList.includes(key)) {
      // If the key exists in the list, remove it
      setDocList(docList.filter((item) => item !== key));
    } else {
      // If the key doesn't exist in the list, add it
      setDocList([...docList, key]);
    }
  };

  const handelForm = async () => {};

  return (
    <div className=" flex w-full h-full">
      <form className="flex flex-col w-full h-full gap-3 justify-center items-center">
        <div class="relative w-full ">
          <input
            value={botName}
            onChange={(e) => setBotName(e.target.value)}
            type="text"
            id="floating_helper"
            aria-describedby="floating_helper_text"
            class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_helper"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
            Bot Name
          </label>
        </div>
        <div className="h-96 w-full p-2 overflow-y-scroll">
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

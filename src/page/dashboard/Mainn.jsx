import React from "react";
import pdf from "../../features/dataInputs/pdf.svg";

function Mainn({ data, handelPreview, handeldownload, handelRemove }) {
  return (
    <div className="flex h-full md:w-7/12 w-full flex flex-col">
      <div className="flex w-full flex-col pl-10 pr-10 md:ml-10 gap-10 mb-10">
        <h2 className="text-xl w-full p-6 rounded-lg mt-10 bg-amber-100">
          <strong>List of Pdf Document :-</strong>
        </h2>
        <div className="flex flex-col gap-6">
          {data?.length > 0 &&
            data
              .filter((ele) => ele.Key.split("/")[1] === "pdf")
              .map((elem) => (
                <div
                  key={elem.Key}
                  className="flex flex-col gap-5 md:flex-row justify-between md:items-center">
                  <div className="flex gap-5 justify-left items-center">
                    <img src={pdf} alt="pdf img" />
                    <div>{elem.Key.split("/")[2]}</div>
                  </div>
                  <div className="flex md:flex-row  gap-2 justify-left items-center">
                    <button
                      onClick={() => handelPreview(elem.Key)}
                      className="rounded-lg p-2 bg-teal-100"
                      type="button">
                      Preview
                    </button>
                    <button
                      className="rounded-lg p-2 bg-blue-100"
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
              ))}
        </div>
      </div>
      <div className="flex w-full flex-col pl-10 pr-10  md:ml-10  mb-10 gap-10 ">
        <h2 className="text-xl w-full p-6 rounded-lg mt-2 bg-amber-100">
          <strong>List of Text Document :-</strong>
        </h2>
        <div className="flex flex-col gap-6">
          {data?.length > 0 &&
            data
              .filter((ele) => ele.Key.split("/")[1] === "text")
              .map((elem) => (
                <div
                  key={elem.Key}
                  className="flex flex-col gap-5 md:flex-row justify-between md:items-center">
                  <div className="flex gap-5 justify-left items-center">
                    <img src={pdf} alt="pdf img" />
                    <div>{elem.Key.split("/")[2]}</div>
                  </div>
                  <div className="flex md:flex-row  gap-2 justify-left items-center">
                    <button
                      onClick={() => handelPreview(elem.Key)}
                      className="rounded-lg p-2 bg-teal-100"
                      type="button">
                      Preview
                    </button>
                    <button
                      className="rounded-lg p-2 bg-blue-100"
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
              ))}
        </div>
      </div>
    </div>
  );
}

export default Mainn;

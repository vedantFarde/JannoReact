import React from "react";
import pdf from "../../../features/dataInputs/pdf.svg";

function Mainn({ handelPreview, handeldownload, data, handelRemove, type }) {
  return (
    <div className="flex  flex-1 bg-stone-200 p-5 rounded-lg">
      <div className="flex flex-col gap-6 w-full">
        {data?.length > 0 &&
          data
            .filter((ele) => {
              if (type === "all") {
                return ele;
              }
              return ele.Key.split("/")[1] === type;
            })
            .map((elem) => (
              <div
                key={elem.Key}
                className="flex flex-col w-full gap-5 md:flex-row justify-between md:items-center">
                <div className="flex gap-5 justify-left items-center">
                  <img src={pdf} alt="pdf img" />
                  <div>{elem.Key.split("/")[2]}</div>
                </div>
                <div className="flex md:flex-row  gap-2 justify-left items-center">
                  <button
                    onClick={() => handelPreview(elem.Key)}
                    className="rounded-lg p-2 bg-lime-200"
                    type="button">
                    Preview
                  </button>
                  <button
                    className="rounded-lg p-2 bg-green-600 text-white	"
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
  );
}

export default Mainn;

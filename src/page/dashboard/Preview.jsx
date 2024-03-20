import React from "react";
import cros from "../../features/dataInputs/cros.svg";

function Preview({ preview, windowWidth, setPreview }) {
  console.log(windowWidth);
  return (
    <div
      className={`h-full z-10 w-full md:relative absolute flex flex-1 text-gray-400 items-center justify-center ${
        preview ? "" : "hidden"
      }`}>
      {windowWidth > 800 ? (
        preview ? (
          <div className="flex w-full relative h-full p-10">
            <button
              type="button"
              className="absolute bg-black  rounded-full p-2 w-8 h-8 right-14 top-14"
              onClick={() => setPreview(null)}>
              <img src={cros} alt="close" />
            </button>
            <embed
              src={`${preview}#toolbar=1`}
              loading="egar"
              width="100%"
              height="100%"
              className="rounded-lg"
            />
          </div>
        ) : (
          <div>
            <h6>Select a file to open.</h6>
          </div>
        )
      ) : (
        preview && (
          <div className={`flex w-full relative h-full p-10 `}>
            <button
              type="button"
              className="absolute rounded-full bg-black p-1 w-4 h-4 right-14 top-14"
              onClick={() => setPreview(null)}>
              <img src={cros} alt="close" />
            </button>
            <embed
              src={`${preview}#toolbar=0`}
              loading="egar"
              width="100%"
              height="100%"
              className="rounded-lg"
            />
          </div>
        )
      )}
    </div>
  );
}

export default Preview;

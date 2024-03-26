import React from "react";
import cros from "../../../features/dataInputs/cros.svg";

function Preview({ preview, setPreview }) {
  return (
    <div className="flex w-full bg-stone-200 p-5 rounded-lg hidden md:flex justify-center items-center">
      <div className="h-full w-full flex justify-center rounded-lg items-center bg-gray-100">
        {preview ? (
          <div className="flex w-full relative h-full p-2">
            <button
              type="button"
              className="absolute bg-black  rounded-full p-2 w-8 h-8 right-6 top-6"
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
        )}
      </div>
    </div>
  );
}

export default Preview;

import React, { useState } from "react";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };
  const dragOverHandler = (ev) => {
    ev.preventDefault();
  };

  const dropHandler = (ev) => {
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      const files = Array.from(ev.dataTransfer.items)
        .map((item) => {
          if (item.kind === "file") {
            return item.getAsFile();
          }
          return null;
        })
        .filter(Boolean);

      if (files.length > 0) {
        setSelectedFile(files[0]);
      }
    } else {
      const files = Array.from(ev.dataTransfer.files);
      if (files.length > 0) {
        setSelectedFile(files[0]);
      }
    }
  };
  console.log(selectedFile);

  return (
    <div className="justify-center items-center flex flex-wrap">
      <div
        className="flex items-center justify-center w-full"
        id="drop_zone"
        onDrop={(e) => dropHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}>
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Pdf (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            accept="application/pdf"
            onChange={handleFileUpload}
          />
        </label>
      </div>
    </div>
  );
}

export default FileUpload;

import React, { useState } from "react";
import cros from "./cros.svg";
import pdf from "./pdf.svg";
function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handelupload = async () => {
    if (!selectedFile) {
      alert("please select file");
      return;
    }
    setLoading(true);

    const senddata = {
      filename: selectedFile.name,
      type: selectedFile.type,
      size: selectedFile.size,
    };

    const option = {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(senddata),
    };
    const res = await fetch("http://localhost:8000/v1/uplodpdf", option);
    const data = await res.json();
    const uploadUrl = await data?.url;

    console.log(uploadUrl);

    const optionUpload = {
      method: "PUT",
      body: selectedFile,
    };

    try {
      const resfileUpload = await fetch(uploadUrl, optionUpload);
      if (resfileUpload.ok) {
        alert("File uploaded successfully");
      } else {
        console.error("Failed to upload file:", resfileUpload.statusText);
      }
      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedUpload = debounce(handelupload, 1000);

  return (
    <div className="justify-center items-center flex flex-wrap">
      {!selectedFile && (
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
                <span className="font-semibold">Click to upload</span> or drag
                and drop
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
      )}
      {selectedFile && (
        <div className="flex items-center justify-center w-full mt-5 mb-5 gap-10">
          <div className="flex items-center justify-center">
            <img src={pdf} alt="pdf img" />
            {selectedFile?.name}
          </div>
          <button
            type="button"
            className=" w-8 hover:scale-110"
            onClick={() => setSelectedFile(null)}>
            <img src={cros} alt="cross img" className="z-10" />
          </button>
        </div>
      )}

      <button
        onClick={debouncedUpload}
        type="button"
        disabled={loading}
        className="md:w-1/2 bg-black w-11/12 p-3 rounded-xl  text-white font-black  hover:bg-slate-700	
      ">
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}

export default FileUpload;

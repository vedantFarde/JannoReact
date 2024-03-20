import React, { useState } from "react";

function Textdata() {
  const [name, setName] = useState("");
  const [datades, setDatades] = useState("");
  const [loading, setLoading] = useState(false);
  const handeltextDoc = async () => {
    const senddata = {
      filename: `${name}.text`,
      type: "text",
    };

    const option = {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(senddata),
    };
    const res = await fetch("http://localhost:8000/v1/uplodtext", option);
    const data = await res.json();

    const uploadUrl = data?.url;

    const optionUpload = {
      method: "PUT",
      body: datades,
    };

    try {
      const resfileUpload = await fetch(uploadUrl, optionUpload);
      if (resfileUpload.ok) {
        alert("File uploaded successfully");
      } else {
        console.error("Failed to upload file:", resfileUpload.statusText);
      }
      setDatades("");
      setName("");
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  const handelName = (e) => {
    const data = e.target.value;
    setName(data);
  };
  const handelDatades = (e) => {
    const data = e.target.value;
    setDatades(data);
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <input
        type="text"
        id="text"
        name="name"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="File Name..."
        onChange={handelName}
        required></input>

      <textarea
        id="message"
        rows={12}
        name="datades"
        onChange={handelDatades}
        className="block p-2.5 w-full text-sm text-gray-900
 rounded-lg border border-gray-300 
 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Data..."></textarea>
      <button
        onClick={handeltextDoc}
        type="button"
        disabled={loading}
        className="md:w-1/2 bg-black w-11/12 p-3 rounded-xl  text-white font-black  hover:bg-slate-700	
      ">
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
export default Textdata;

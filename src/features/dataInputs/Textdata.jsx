import React, { useState } from "react";

function Textdata() {
  const [name, setName] = useState("");
  const [datades, setDatades] = useState("");
  const handelName = (e) => {
    const data = e.target.value;
    setName(data);
  };
  const handelDatades = (e) => {
    const data = e.target.value;
    setDatades(data);
  };
  console.log(datades);
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        id="text"
        name="name"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Chatbot Name"
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
    </div>
  );
}
export default Textdata;

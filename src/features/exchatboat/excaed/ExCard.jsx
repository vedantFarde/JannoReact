import React from "react";

function ExCard({ ele }) {
  return (
    <div className="relative flex h-[25rem] w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-border text-center text-gray-700">
      <div className="relative w-full h-full flex flex-col items-center justify-end gap-5 ">
        <div className="">
          <h1 className="text-white text-lg">{ele?.name}</h1>
          <h2 className="text-white text-xl">{ele?.description}</h2>
          <h3 className="text-white text-lg">
            <strong>{ele?.language}</strong>
          </h3>
        </div>
        <div className="hover:shadow-xl shadow-white bg-[rgba(0,0,0,0.1)] w-20 md:w-32 md:gap-3 p-2 flex justify-center items-center  rounded-full mb-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 md:w-15">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
          <button type="button" className="text-black">
            <strong>Chat</strong>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExCard;

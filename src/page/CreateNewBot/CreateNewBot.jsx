import React, { useState } from "react";
import Navbar1 from "../../features/navbar1/Navbar1";
import FormforBotCreation from "./componandforBot/FormforBotCreation";

function CreateNewBot({ handelLogOut }) {
  const [list, setList] = useState([{}]);
  return (
    <div className="flex flex-col max-h-screen max-w-screen">
      <div>
        <Navbar1 handelLogOut={handelLogOut} />
      </div>

      <div className="flex md:flex-row flex-col w-full h-full ">
        <div className=" pl-10 pt-10 pr-10 md:w-1/2 w-full flex justify-center items-center h-full bg-stone-200">
          <FormforBotCreation />
        </div>
        <div className="grid md:w-1/2 w-full  ">
          fnjshushfsiou
          {list.map((ele) => (
            <div key={ele?.BotId}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateNewBot;

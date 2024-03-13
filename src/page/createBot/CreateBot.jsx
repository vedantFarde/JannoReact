import React, { useState } from "react";
import Templete from "../../features/dataInputs/Templete";
import Navbar1 from "../../features/navbar1/Navbar1";

function CreateBot() {
  const [active, setActive] = useState("main");
  return (
    <div>
      <Navbar1 />
      <Templete />
    </div>
  );
}

export default CreateBot;

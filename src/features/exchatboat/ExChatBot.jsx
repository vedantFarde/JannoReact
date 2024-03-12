import React from "react";
import product from "./demoData";
import ExCard from "./excaed/ExCard";

function ExChatBot() {
  return (
    <div className="grid grid-cols-6 gap-10 md:p-16 p-8" id="featured">
      {product.map((ele, index) => (
        <div
          key={ele.bot_id}
          className="col-span-6 md:col-span-2 col-span-1 hover:shadow-2xl">
          <ExCard ele={ele} />
        </div>
      ))}
    </div>
  );
}

export default ExChatBot;

import React from "react";
import Navbar from "../../features/navbar/Navbar";
import Pricing from "../../features/pricing/Pricing";
import Faq from "../../features/FAQ/Faq";
import ExChatBot from "../../features/exchatboat/ExChatBot";

function Home() {
  return (
    <>
      <Navbar />
      <Pricing />
      <ExChatBot />
      <Faq />
    </>
  );
}

export default Home;

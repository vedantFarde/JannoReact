import React from "react";
import Navbar from "../../features/navbar/Navbar";
import Pricing from "../../features/pricing/Pricing";
import Faq from "../../features/FAQ/Faq";

function Home() {
  return (
    <>
      <Navbar />
      <Faq />
      <Pricing />
    </>
  );
}

export default Home;

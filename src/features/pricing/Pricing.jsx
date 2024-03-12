import React from "react";
import Card from "./card/Card";

const pricingList = [
  {
    id: 0,
    planType: "Hobby",
    price: "19$",
    features: [
      {
        id: 0,
        isApplicable: true,
        detail: "2,000 message credits/month",
      },
      {
        id: 1,
        isApplicable: true,
        detail: "5 chatbots",
      },
      {
        id: 2,
        isApplicable: true,
        detail: "Embed on unlimited websites",
      },
    ],
  },
  {
    id: 1,
    planType: "Growth",
    price: "49$",
    features: [
      {
        id: 0,
        isApplicable: true,
        detail: "5,000 message credits/month",
      },
      {
        id: 1,
        isApplicable: true,
        detail: "10 chatbots",
      },
      {
        id: 2,
        isApplicable: true,
        detail: "Embed on unlimited websites",
      },
    ],
  },
  {
    id: 2,
    planType: "Standard",
    price: "99$",
    features: [
      {
        id: 0,
        isApplicable: true,
        detail: "10,000 message credits/month",
      },
      {
        id: 1,
        isApplicable: true,
        detail: "20 chatbots",
      },
      {
        id: 2,
        isApplicable: true,
        detail: "Embed on unlimited websites",
      },
    ],
  },
];

function Pricing() {
  return (
    <section
      className=" flex flex-col bg-gradient-to-t from-gray-50 to-slate-800"
      id="pricing">
      <div className="mt-10 mb-10 p-2 md:p-10">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-300 sm:text-xl dark:text-gray-400">
            Here at <strong>JONNA</strong> we concentrate on markets where
            technology, innovation, and capital can unleash long-term value and
            propel advancements in the bot creation industry.
          </p>
        </div>
        <div className="mt-8 p-4 space-y-4 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {pricingList.map((ele, index) => (
            <div key={ele.id}>
              <Card element={ele} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

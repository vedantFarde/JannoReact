import React from "react";
function Card({ element }) {
  return (
    <div className=" bg-white divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm hover:shadow-2xl ">
      <div className="p-6">
        <h2 className="text-lg font-medium leading-6 text-gray-900">
          {element?.planType}
        </h2>
        <p className="mt-4 text-sm text-gray-500">
          Everything you could need for your <strong>Bot.</strong>
        </p>
        <p className="mt-8">
          <span className="text-4xl font-bold tracking-tight text-gray-900">
            {element?.price}
          </span>
          <span className="text-base font-medium text-gray-500">/month</span>
        </p>
        <button className="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900 plausible-event-name=Plan-pro">
          Get {element.planType}
        </button>
      </div>
      <div className="px-6 pt-6 pb-8">
        <h3 className="text-sm font-medium text-gray-900">What's included</h3>
        <ul className="mt-6 space-y-4">
          {element?.features?.map((ele, index) => (
            <li className="flex space-x-3" key={ele.id}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 text-green-500">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span className="text-sm text-gray-500">
                Create up to <strong>{ele.detail}</strong> every Month
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;

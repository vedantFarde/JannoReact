import React from "react";

function FaqCard({ ele }) {
  return (
    <div class="py-5">
      <details class="group">
        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
          <span> {ele.question}</span>
          <span class="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
          {ele.answer}
        </p>
      </details>
    </div>
  );
}

export default FaqCard;

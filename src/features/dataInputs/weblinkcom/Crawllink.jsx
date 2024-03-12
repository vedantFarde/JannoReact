import { useState } from "react";

export default function CrawlLink() {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(null);

  function handleCrawlLink() {
    const urlPattern =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlPattern.test(inputValue)) {
      setInputError(`Please enter a valid link`);
      return null;
    }
  }
  return (
    <>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900">
        Crawl
      </label>
      <div className="flex md:flex-row flex-col md:gap-2 gap-y-4">
        <input
          type="text"
          id="text"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="https://www.example.com"
          required
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setInputError(null);
          }}></input>
        <button
          onClick={handleCrawlLink}
          type="button"
          className="text-white flex-none bg-gray-800 
       hover:bg-gray-900 focus:outline-none focus:ring-4 
       focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5">
          Fetch Links
        </button>
      </div>
      <p id="helper-text-explanation" className="mt-2 text-sm text-gray-800">
        This will crawl all the links starting with the URL (not including files
        on the website).
      </p>
      {inputError && (
        <p className="text-red-500 text-sm mt-2 mb-4">{inputError}</p>
      )}
    </>
  );
}

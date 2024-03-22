import { useState } from "react";

export default function CrawlLink() {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleCrawlLink() {
    setLoading(true);
    const urlPattern =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlPattern.test(inputValue)) {
      setInputError(`Please enter a valid link`);
      setLoading(false);
      return null;
    }
    const option = {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filename: inputValue }),
    };
    const res = await fetch("http://localhost:8000/v1/uplodurl", option);

    if (res.status === 200) {
      const data = await res.json();
      alert("url fetched and uploaded successfully");
      console.log(data.content);
      setLoading(false);
    }
    setLoading(false);
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
            setLoading(false);
          }}></input>
        <button
          onClick={handleCrawlLink}
          type="button"
          disabled={loading}
          className="text-white flex-none bg-gray-800 
       hover:bg-gray-900 focus:outline-none focus:ring-4 
       focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5">
          {loading ? "uploading..." : "Fetch Links & upload HTML"}
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

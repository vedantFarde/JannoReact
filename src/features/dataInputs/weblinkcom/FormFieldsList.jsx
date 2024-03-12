import { useState } from "react";

export default function FormFieldsList({ type }) {
  const [inputFields, setInputFields] = useState([""]);
  const [errors, setErrors] = useState([]);
  const [inputErrors, setInputErrors] = useState([]);

  const handleAddField = () => {
    setInputFields([...inputFields, ""]);
    setInputErrors([...inputErrors, ""]);
  };

  const handleDeleteField = (index) => {
    const updatedFields = [...inputFields];
    const updatedErrors = [...inputErrors];
    updatedFields.splice(index, 1);
    updatedErrors.splice(index, 1);
    setInputFields(updatedFields);
    setInputErrors(updatedErrors);
  };

  const handleDeleteAllFields = () => {
    setInputFields([]);
    setInputErrors([]);
  };

  const handleChange = (index, value) => {
    const updatedFields = [...inputFields];
    updatedFields[index] = value;

    validateInputFields(updatedFields[index], index);

    setInputFields(updatedFields);
  };

  const handleSubmit = () => {
    const validationErrors = validateInputFields();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = inputFields.filter((field) => field.trim() !== "");
    console.log(formData);
  };

  const validateInputFields = (value, index) => {
    const urlPattern =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    const updatedErrors = [...inputErrors];

    if (!urlPattern.test(value)) {
      updatedErrors[index] = `Field ${index + 1} is not a valid URL.`;
    } else {
      updatedErrors[index] = "";
    }

    setInputErrors(updatedErrors);
    return updatedErrors.filter((error) => error !== "");
  };

  return (
    <>
      <label
        htmlFor="message"
        className="block mb-2 mt-8 text-sm font-medium text-gray-900">
        {type === "includedLinks" ? `Included Links` : `Excluded Links`}
      </label>
      {inputFields.length > 0 && (
        <button
          className="bg-none text-red-500 my-4"
          onClick={handleDeleteAllFields}>
          Delete All
        </button>
      )}
      {inputFields.map((field, index) => (
        <div key={index}>
          <div className="flex mb-2">
            <input
              type="text"
              id={`text${index}`}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="https://www.example.com"
              value={field}
              onChange={(e) => handleChange(index, e.target.value)}
              required
            />
            <button
              onClick={() => handleDeleteField(index)}
              type="button"
              className="text-zinc-600 hover:text-zinc-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4 text-red-600 ml-1">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
              </svg>
            </button>
          </div>
          {inputErrors[index] && (
            <p className="text-red-500 text-sm mt-2 mb-4">
              {inputErrors[index]}
            </p>
          )}
        </div>
      ))}

      {errors.length > 0 && (
        <div className="text-red-500 mb-4">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      <button
        className="bg-gray-200 flex py-1 px-2 rounded my-4"
        onClick={handleAddField}>
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"></path>
        </svg>
        <span>Add</span>
      </button>
    </>
  );
}

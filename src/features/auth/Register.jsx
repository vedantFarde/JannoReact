import React, { useState } from "react";
import { Link } from "react-router-dom";
import OTPBox from "./OTPBox";

function Register({ handleGlogin }) {
  const [showOTP, setShowOTP] = useState(false);
  const handleSignUp = () => {
    // API Call here
    // On success
    setShowOTP(true);
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center px-6 mx-auto lg:py-0">
        <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {showOTP && <div className="w-full h-20" />}
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              {showOTP ? "Enter OTP" : "Create your account"}
            </h1>
            {!showOTP ? (
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    placeholder="Enter your email"
                    className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Enter a password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSignUp}
                  className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Sign Up
                </button>
                <div className="flex flex-col">
                  <p className="text-sm text-center font-light text-gray-500">
                    Have an account?{" "}
                    <Link
                      to="/login"
                      className="font-medium text-primary-600 hover:underline">
                      Login
                    </Link>
                  </p>
                </div>
                <button
                  type="button"
                  className="w-full border border-zinc-300 bg-white text-black bg-primary-600 hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={handleGlogin}>
                  Sign Up With Google
                </button>
              </form>
            ) : (
              <>
                <OTPBox />
                <button
                  type="button"
                  className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none 
                  focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Verify
                </button>
                <div className="flex flex-col">
                  <p className="text-sm font-light text-gray-500">
                    Did not receive OTP?{" "}
                    <Link
                      to="/login"
                      className="font-medium text-primary-600 hover:underline">
                      Resend
                    </Link>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sign() {
  const [user, setUser] = useState();
  const handleGlogin = () => {
    window.open(`http://localhost:8000/auth/google/callback`, "_self");
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center px-6 mx-auto lg:py-0">
        <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
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
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••••••"
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
              </div>
              <button
                type="button"
                className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Sign in
              </button>
              <div className="flex flex-col">
                <p className="text-sm font-light text-gray-500 text-center">
                  <Link
                    to="#"
                    className="text-sm font-medium text-primary-600 hover:underline">
                    Forgot password?
                  </Link>
                </p>
                <p className="text-sm font-light text-gray-500 text-center">
                  {`Don’t have an account yet?`}{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
              <button
                type="button"
                className="w-full border border-zinc-300 bg-white text-black bg-primary-600 hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleGlogin}>
                Sign in With Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sign;

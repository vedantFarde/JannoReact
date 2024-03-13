import React from "react";
import { Link } from "react-router-dom";

function Sign({
  handleGlogin,
  handleFlogin,
  handleManuallogin,
  handelChange,
  user,
}) {
  return (
    <section>
      <div className="flex flex-col justify-center items-center px-6 mx-auto lg:py-0">
        <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <button
                type="button"
                className="w-full border border-zinc-300 bg-white text-black bg-primary-600 hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleGlogin}>
                <div className="flex flex-wrap w-full justify-center items-center gap-6">
                  <div className="w-[40px]">
                    <svg
                      enable-background="new 0 0 48 48"
                      height="100%"
                      viewBox="0 0 48 48"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                        fill="#ffc107"
                      />
                      <path
                        d="m6.306 14.691 6.571 4.819c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z"
                        fill="#ff3d00"
                      />
                      <path
                        d="m24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z"
                        fill="#4caf50"
                      />
                      <path
                        d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z"
                        fill="#1976d2"
                      />
                    </svg>
                  </div>
                  <div>
                    <span>Sign in With Google</span>
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="w-full border border-zinc-300 bg-white text-black bg-primary-600 hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleFlogin}>
                <div className="flex flex-wrap w-full justify-center items-center gap-6">
                  <div className="w-[35px]">
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect fill="#1877f2" height="512" rx="15%" width="512" />
                      <path
                        d="m355.6 330 11.4-74h-71v-48c0-20.2 9.9-40 41.7-40h32.3v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6v56.4h-65v74h65v182h80v-182z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <div>
                    <span>Sign in With Facebook</span>
                  </div>
                </div>
              </button>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handelChange}
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
                  onChange={handelChange}
                  placeholder="••••••••••••"
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
              </div>
              <button
                onClick={handleManuallogin}
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sign;

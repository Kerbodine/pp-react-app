import React from "react";

import logo from "../logo512.png";

export default function Signup() {
  return (
    <div className="w-screen h-screen bg-white dark:bg-primary-900 flex items-center justify-center">
      <form className="w-[300px] rounded-2xl bg-primary-100 shadow-md dark:bg-primary-800 p-8 text-black dark:text-white relative">
        <img
          className="w-24 h-24 border-8 border-primary-100 dark:border-primary-800 rounded-2xl bg-white mx-auto -mt-16"
          src={logo}
          alt=""
        ></img>
        <h3 className="mt-4 text-2xl text-center">Create a new account</h3>
        <h4 className="text-primary-500 dark:text-primary-400 mt-8 text-sm">
          First name:
        </h4>
        <input className="w-full h-8 bg-primary-200 dark:bg-primary-700 rounded-md outline-none px-2"></input>
        <h4 className="text-primary-500 dark:text-primary-400 mt-2 text-sm">
          Email:
        </h4>
        <input
          type="email"
          className="w-full h-8 bg-primary-200 dark:bg-primary-700 rounded-md outline-none px-2"
        ></input>
        <h4 className="text-primary-500 dark:text-primary-400 mt-2 text-sm">
          Password:
        </h4>
        <input
          type="password"
          className="w-full h-8 tracking-widest bg-primary-200 dark:bg-primary-700 rounded-md outline-none px-2"
        ></input>
        <div className="flex justify-center mt-8">
          <button className="mt-1 px-2 py-1 w-full rounded-md bg-primary-300 dark:bg-primary-600 hover:bg-accent-400 hover:text-white dark:hover:bg-accent-400">
            Create account
          </button>
        </div>

        <button className="mt-8 text-sm text-primary-500 dark:text-primary-400">
          Already have an account?
          <span className="ml-2 text-black dark:text-white hover:underline">
            Sign in
          </span>
        </button>
      </form>
    </div>
  );
}

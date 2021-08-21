import React from "react";

export default function Login() {
  return (
    <div className="w-screen h-screen bg-white dark:bg-primary-900 flex items-center justify-center">
      <form className="w-[300px] rounded-2xl bg-primary-100 shadow-md dark:bg-primary-800 p-8 text-black dark:text-white">
        <h3 className="text-2xl font-thin text-center">
          Sign in to your account
        </h3>
        <h4 className="text-primary-500 dark:text-primary-400 mt-8 text-sm">
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
        <p className="text-sm text-right text-primary-500 dark:text-primary-400 hover:underline cursor-pointer">
          Forgot password?
        </p>
        <div className="flex items-center mt-4">
          <input type="checkbox" className="mr-2"></input>
          <label className="text-sm text-primary-500 dark:text-primary-400">
            Remember me
          </label>
        </div>
        <div className="flex justify-center">
          <button className="mt-1 px-2 py-1 w-full rounded-md bg-primary-300 dark:bg-primary-600 hover:bg-accent-400 dark:hover:bg-accent-400">
            Log in
          </button>
        </div>

        <button className="mt-8 text-sm text-primary-500 dark:text-primary-400">
          Not a member?
          <span className="ml-2 text-black dark:text-white hover:underline">
            Sign up now
          </span>
        </button>
      </form>
    </div>
  );
}

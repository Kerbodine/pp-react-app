import React from "react";

export default function Login({
  email,
  setEmail,
  password,
  setPassword,
  loginHandler,
  signupHandler,
  hasAccount,
  setHasAccount,
  emailError,
  passwordError,
}) {
  return (
    <section className="w-full min-h-screen px-5 bg-primary-200 flex">
      <div className="p-16 m-auto w-full max-w-[520px] min-h-[600px] flex flex-col justify-center bg-primary-700 rounded-2xl shadow-md">    
        <label className="text-white my-4 block text-2xl leading-4">Email</label>
        <input
          className="w-full border-none outline-none text-lg p-2 bg-primary-600 rounded text-white"
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="text-red-500">{emailError}</p>
        <label className="text-white my-4 block text-2xl leading-4">Password</label>
        <input
          className="w-full border-none outline-none text-lg p-2 bg-primary-600 rounded text-white"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-red-500">{passwordError}</p>
        <div className="w-full py-6">
          {hasAccount ? (
            <>
              <button onClick={loginHandler} className="rounded border-none outline-none w-full py-4 text-white bg-accent-400 cursor-pointer">Sign in</button>
              <p className="mt-4 text-right text-white">Don't have an account? <span onClick={() => setHasAccount(!hasAccount)} className="text-accent-400 ml-1 cursor-pointer transition-all hover:text-purple-400">Sign up</span></p>
            </>
          ) : (
            <>
              <button onClick={signupHandler} className="rounded border-none outline-none w-full py-4 text-white bg-accent-400 cursor-pointer">Sign up</button>
              <p className="mt-4 text-right text-white">Have an account? <span onClick={() => setHasAccount(!hasAccount)} className="text-accent-400 ml-1 cursor-pointer transition-all hover:text-purple-400">Sign in</span></p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

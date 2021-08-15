import React, { useState, useEffect } from "react";
import { BiInfoCircle } from "react-icons/bi";

export default function WorkModeAlert({ workMode }) {
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    setBannerVisible(true);
    setTimeout(() => {
      setBannerVisible(false);
    }, 3000);
  }, [workMode]);

  console.log(bannerVisible);

  return (
    <div
      className={`absolute inset-x-1/2 transition-transform duration-500 w-[200px] -top-12 h-12 bg-white shadow-md dark:bg-primary-700 rounded-md flex justify-center items-center px-3 py-2 gap-2 text-black dark:text-white ${
        bannerVisible ? "translate-y-[5.5rem]" : ""
      }`}
    >
      <div className="text-2xl">
        <BiInfoCircle />
      </div>
      <h3 className="leading-4">
        {workMode
          ? "Workspace switched to work mode"
          : "Workspace switched to personal mode"}
      </h3>
    </div>
  );
}

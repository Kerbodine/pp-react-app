import React, { useEffect } from "react";
import ReactDom from "react-dom";
import { AiOutlineExclamation } from "react-icons/ai";

export default function NewPageModal({
  darkMode,
  newPageMenu,
  setNewPageMenu,
  newPageHandler,
}) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setNewPageMenu(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  if (newPageMenu) {
    return ReactDom.createPortal(
      <div
        className={`${
          darkMode ? "dark" : ""
        } absolute top-0 bg-black/50 w-screen h-screen flex items-center justify-center z-10`}
      >
        <div className="w-96 rounded-2xl bg-white dark:bg-primary-700 shadow-md flex flex-col justify-center items-center p-8 gap-2 z-20 text-black dark:text-white">
          <div className="w-96 h-96 bg-red-200 rounded-2xl"></div>
        </div>
      </div>,
      document.getElementById("portal")
    );
  } else {
    return null;
  }
}

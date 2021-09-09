import React, { useContext } from "react";
import ReactDom from "react-dom";
import UserContext from "../../UserContext";

export default function ProfileModal({
  darkMode,
  message,
  deleteConfirmation,
  toggleDeleteConfirmation,
  deleteListHandler,
}) {
  const { userData } = useContext(UserContext);

  if (deleteConfirmation) {
    return ReactDom.createPortal(
      <div
        className={`${
          darkMode ? "dark" : ""
        } absolute top-0 bg-black/50 w-screen h-screen flex items-center justify-center z-10`}
      >
        <div className="w-96 rounded-2xl bg-white dark:bg-primary-700 shadow-md flex flex-col justify-center items-center p-4 gap-2 z-20 text-black dark:text-white">
          <h3 className="text-3xl font-light">Change username</h3>
          <input
            className="w-full h-8 px-2 bg-primary-100 dark:bg-primary-600 rounded-md"
            value={userData.username}
          ></input>
          <div className="flex gap-4">
            <button
              className="w-24 h-10 p-2 bg-primary-200 dark:bg-primary-600 hover:bg-primary-300 dark:hover:bg-primary-500 rounded-md"
              onClick={toggleDeleteConfirmation}
            >
              Cancel
            </button>
            <button
              className="w-24 h-10 p-2 bg-red-400 text-white rounded-md"
              onClick={deleteListHandler}
            >
              Delete
            </button>
          </div>
        </div>
      </div>,
      document.getElementById("portal")
    );
  } else {
    return null;
  }
}

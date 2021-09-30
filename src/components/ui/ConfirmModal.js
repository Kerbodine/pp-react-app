import React from "react";
import ReactDom from "react-dom";
import { AiOutlineExclamation } from "react-icons/ai";

export default function ConfirmModal({
  darkMode,
  message,
  deleteConfirmation,
  setDeleteConfirmation,
  deleteListHandler,
}) {
  if (deleteConfirmation) {
    return ReactDom.createPortal(
      <div
        className={`${
          darkMode ? "dark" : ""
        } absolute top-0 bg-black/75 w-screen h-screen flex items-center justify-center z-10`}
        onClick={() => {
          setDeleteConfirmation(false);
        }}
      >
        <div className="w-96 rounded-2xl bg-white dark:bg-primary-800 shadow-md flex flex-col justify-center items-center p-8 gap-2 z-20 text-black dark:text-white">
          <div className="w-16 h-16 text-4xl rounded-full bg-red-400 text-white flex items-center justify-center">
            <AiOutlineExclamation />
          </div>
          <h3 className="text-3xl font-light">Are you sure?</h3>
          <p className="text-center">
            You are about to permanently delete {message}. This action cannot be
            undone.
          </p>
          <div className="flex gap-4">
            <button
              className="w-24 h-10 p-2 bg-primary-200 dark:bg-primary-600 hover:bg-primary-300 dark:hover:bg-primary-500 rounded-md"
              onClick={() => {
                setDeleteConfirmation(false);
              }}
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

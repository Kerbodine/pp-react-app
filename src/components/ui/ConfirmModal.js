import React from "react";
import ReactDom from "react-dom";
import { AiOutlineExclamation } from "react-icons/ai";

export default function ConfirmModal({
  message,
  deleteConfirmation,
  toggleDeleteConfirmation,
  deleteListHandler,
}) {
  if (deleteConfirmation) {
    return ReactDom.createPortal(
      <div className="absolute top-0 bg-black/50 w-screen h-screen flex items-center justify-center z-10">
        <div className="w-96 rounded-2xl bg-white shadow-md flex flex-col justify-center items-center p-4 gap-2 z-20">
          <div className="w-16 h-16 text-4xl rounded-full bg-red-400 text-white flex items-center justify-center">
            <AiOutlineExclamation />
          </div>
          <h3 className="text-4xl font-light">Are you sure?</h3>
          <p className="text-center">
            You are about to permanently delete {message}. This action cannot be
            undone.
          </p>
          <div className="flex gap-4">
            <button
              className="w-24 h-10 p-2 bg-gray-200 hover:bg-gray-300 rounded-md"
              onClick={toggleDeleteConfirmation}
            >
              Cancel
            </button>
            <button
              className="w-24 h-10 p-2 bg-red-400 active:bg-red-500 text-white rounded-md"
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

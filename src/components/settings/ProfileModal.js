import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import UserContext from "../../UserContext";

export default function ProfileModal({
  darkMode,
  deleteConfirmation,
  toggleDeleteConfirmation,
  changeUsername,
}) {
  const { userData } = useContext(UserContext);

  const [username, setUsername] = useState(userData.username);

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  if (deleteConfirmation) {
    return ReactDom.createPortal(
      <div
        className={`${
          darkMode ? "dark" : ""
        } absolute top-0 bg-black/50 w-screen h-screen flex items-center justify-center z-10`}
      >
        <div className="w-96 rounded-2xl bg-white dark:bg-primary-700 shadow-md justify-center items-center p-8 z-20 text-black dark:text-white">
          <h3 className="text-3xl font-light">Edit profile</h3>
          <input
            className="w-full h-8 px-2 bg-primary-100 dark:bg-primary-600 rounded-md my-4"
            value={username}
            onChange={usernameChangeHandler}
            placeholder="Username"
          ></input>
          <div className="flex gap-4 justify-center">
            <button
              className="w-24 h-10 p-2 bg-primary-200 dark:bg-primary-600 hover:bg-primary-300 dark:hover:bg-primary-500 rounded-md"
              onClick={toggleDeleteConfirmation}
            >
              Cancel
            </button>
            <button
              className="w-24 h-10 p-2 bg-primary-200 dark:bg-primary-600 hover:bg-accent-400 dark:hover:bg-accent-400 text-black dark:text-white hover:text-white rounded-md"
              onClick={() => changeUsername(username)}
            >
              Confirm
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

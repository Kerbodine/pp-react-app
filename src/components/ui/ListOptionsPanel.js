import React from "react";
import { BiDotsVerticalRounded, BiTrash } from "react-icons/bi";
import ColorPicker from "./ColorPicker";
import IconPicker from "./IconPicker";

export default function ListOptionsPanel({
  currentListIndex,
  settingsDropdown,
  handleSettingsDropdown,
  userData,
  listIconHandler,
  toggleDeleteConfirmation,
  listColorHandler,
}) {
  return (
    <div
      className={`${
        currentListIndex < 5 ? "hidden" : "visible"
      } group relative w-8 h-8 rounded-full ml-auto bg-primary-200 dark:bg-primary-700 text-2xl flex items-center justify-center text-black dark:text-white hover:bg-accent-400 dark:hover:bg-accent-400`}
      onClick={handleSettingsDropdown}
    >
      <BiDotsVerticalRounded className="group-hover:text-white" />
      <div
        className={`${
          settingsDropdown ? "visible" : "hidden"
        } absolute top-10 w-[204px] -right-2 h-auto z-10 bg-white dark:bg-primary-600 rounded-2xl shadow-md p-4 text-base`}
      >
        <p>Color:</p>
        <hr className="h-0.5 bg-primary-300 dark:bg-primary-400 border-none mb-2" />
        <div className="flex flex-wrap gap-2 mb-4">
          {userData.allColors.map((color) => (
            <ColorPicker color={color} listColorHandler={listColorHandler} />
          ))}
        </div>
        <p>Icon:</p>
        <hr className="h-0.5 bg-primary-300 dark:bg-primary-400 border-none mb-2" />
        <div className="flex flex-wrap gap-2 mb-4">
          {userData.allIcons.map((icon) => (
            <IconPicker
              icon={icon}
              listIconHandler={listIconHandler}
            ></IconPicker>
          ))}
        </div>
        <p>Options:</p>
        <hr className="h-0.5 bg-primary-300 dark:bg-primary-400 border-none mb-2" />
        <div className="flex">
          <p>Delete list</p>
          <div
            className={`${
              currentListIndex < 5 ? "hidden" : "visible"
            } w-7 h-7 rounded-md bg-primary-200 hover:bg-red-400 text-primary-600 dark:text-primary-200 dark:bg-primary-700 dark:text-white dark:hover:bg-red-400 text-black hover:text-white dark:hover:text-white text-2xl ml-auto flex items-center justify-center`}
            onClick={toggleDeleteConfirmation}
          >
            <BiTrash />
          </div>
        </div>
      </div>
    </div>
  );
}

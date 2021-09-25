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
    <div className="ml-auto relative">
      <div
        className={`${
          currentListIndex < 5 ? "hidden" : "visible"
        } relative w-8 h-8 rounded-full bg-primary-200 dark:bg-primary-700 text-2xl flex items-center justify-center text-black dark:text-white hover:bg-accent-400 dark:hover:bg-accent-400 hover:text-white`}
        onClick={handleSettingsDropdown}
      >
        <BiDotsVerticalRounded />
      </div>
      <div
        className={`${
          settingsDropdown ? "visible" : "hidden"
        } absolute w-[204px] top-10 -right-2 h-auto z-10 bg-white dark:bg-primary-600 rounded-2xl shadow-md p-4 text-base text-black dark:text-white`}
      >
        <p className="font-semibold">Color:</p>
        <hr className="h-0.5 bg-primary-300 dark:bg-primary-400 border-none mb-2" />
        <div className="flex flex-wrap gap-2 mb-4">
          {userData.allColors.map((color) => (
            <ColorPicker color={color} listColorHandler={listColorHandler} />
          ))}
        </div>
        <p className="font-semibold">Icon:</p>
        <hr className="h-0.5 bg-primary-300 dark:bg-primary-400 border-none mb-2" />
        <div className="flex flex-wrap gap-2 mb-4">
          {userData.allIcons.map((icon) => (
            <IconPicker
              icon={icon}
              listIconHandler={listIconHandler}
            ></IconPicker>
          ))}
        </div>
        <p className="font-semibold">Options:</p>
        <hr className="h-0.5 bg-primary-300 dark:bg-primary-400 border-none mb-2" />
        <div className="flex">
          <p className="text-primary-500 dark:text-primary-400">Delete list</p>
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

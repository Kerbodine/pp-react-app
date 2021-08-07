import React, { useState } from "react";
import ReminderItem from "./ReminderItem";
import { BiListPlus, BiCaretDownCircle, BiCaretUpCircle } from "react-icons/bi";

export default function ReminderSidebar({
  darkMode,
  allLists,
  allCategories,
  selectList,
}) {
  const [showCategories, setShowCategories] = useState(true);
  const [showLists, setShowLists] = useState(true);

  const showCategoriesHandler = () => {
    setShowCategories(!showCategories);
  };

  const showListHandler = () => {
    setShowLists(!showLists);
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } flex flex-col h-full cursor-pointer`}
    >
      <div className="flex mt-4 mx-4">
        <div className="w-full font-bold">CATEGORIES:</div>
        <button onClick={showCategoriesHandler}>
          <i className={`${showLists ? "visible" : "hidden"} text-2xl`}>
            <BiCaretDownCircle />
          </i>
          <i className={`${showLists ? "hidden" : "visible"} text-2xl`}>
            <BiCaretUpCircle />
          </i>
        </button>
      </div>
      <hr className="border-none h-0.5 bg-gray-300 mx-4 my-2" />
      <div className={`${showCategories ? "visible" : "hidden"}`}>
        {allLists.slice(0, 4).map((list) => (
          <div key={list.id}>
            <ReminderItem
              id={list.id}
              title={list.title}
              amount={Object.keys(list.tasks).length}
              color={list.color}
              icon={list.icon}
              darkMode={darkMode}
              selectList={selectList}
            />
          </div>
        ))}
      </div>
      <div className="flex mt-4 mx-4">
        <div className="w-full font-bold">MY LISTS:</div>
        <button onClick={showListHandler}>
          <i className={`${showLists ? "visible" : "hidden"} text-2xl`}>
            <BiCaretDownCircle />
          </i>
          <i className={`${showLists ? "hidden" : "visible"} text-2xl`}>
            <BiCaretUpCircle />
          </i>
        </button>
      </div>
      <hr className="border-none h-0.5 bg-gray-300 mx-4 my-2" />
      <div className={`flex-auto min-h-0 ${showLists ? "visible" : "hidden"}`}>
        <div className="overflow-hidden overflow-y-auto h-full">
          {allLists.slice(4).map((list) => (
            <div key={list.id}>
              <ReminderItem
                id={list.id}
                title={list.title}
                amount={Object.keys(list.tasks).length}
                color={list.color}
                icon={list.icon}
                darkMode={darkMode}
                selectList={selectList}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`flex-auto min-h-0 ${showLists ? "hidden" : "visible"}`}
      ></div>
      <hr className="border-none h-0.5 bg-gray-300" />
      <button className="h-12 flex-shrink-0 hover:bg-primary-300 transition-colors dark:bg-primary-700 text-black dark:text-white flex items-center text-lg">
        <i className="text-2xl ml-4 mr-2">
          <BiListPlus />
        </i>
        <h2>New List</h2>
      </button>
    </div>
  );
}

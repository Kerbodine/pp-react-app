import React, { useState } from "react";
import ReminderItem from "./ReminderItem";
import { BiListPlus, BiChevronDown, BiChevronUp } from "react-icons/bi";

export default function ReminderSidebar({
  allLists,
  newListHandler,
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
    <div className={`flex flex-col h-full cursor-pointer`}>
      <div className="flex mt-4 mx-4 text-black dark:text-white">
        <div className="w-full font-bold">CATEGORIES:</div>
        <button onClick={showCategoriesHandler}>
          <i className={`${showCategories ? "visible" : "hidden"} text-2xl`}>
            <BiChevronDown />
          </i>
          <i className={`${showCategories ? "hidden" : "visible"} text-2xl`}>
            <BiChevronUp />
          </i>
        </button>
      </div>
      <hr className="border-none h-0.5 bg-gray-300 dark:bg-primary-600 mx-4 my-2" />
      <div className={`${showCategories ? "visible" : "hidden"}`}>
        {allLists.slice(0, 4).map((list, listIndex) => (
          <div key={list.id}>
            <ReminderItem
              index={listIndex}
              icon={list.icon}
              title={list.title}
              color={list.color}
              selectList={selectList}
            />
          </div>
        ))}
      </div>
      <div className="flex mt-4 mx-4 text-black dark:text-white">
        <div className="w-full font-bold">MY LISTS:</div>
        <button onClick={showListHandler}>
          <i className={`${showLists ? "visible" : "hidden"} text-2xl`}>
            <BiChevronDown />
          </i>
          <i className={`${showLists ? "hidden" : "visible"} text-2xl`}>
            <BiChevronUp />
          </i>
        </button>
      </div>
      <hr className="border-none h-0.5 bg-gray-300 dark:bg-primary-600 mx-4 my-2" />
      <div className={`flex-auto min-h-0 ${showLists ? "visible" : "hidden"}`}>
        <div className="overflow-hidden overflow-y-auto h-full">
          {allLists.slice(4).map((list, listIndex) => (
            <div key={list.id}>
              <ReminderItem
                // Set index to be offset by 4 (list categories)
                index={listIndex + 4}
                title={list.title}
                amount={Object.keys(list.tasks).length}
                color={list.color}
                icon={list.icon}
                selectList={selectList}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`flex-auto min-h-0 ${showLists ? "hidden" : "visible"}`}
      ></div>
      <hr className="border-none h-0.5 bg-gray-300 dark:bg-primary-600" />
      <button
        className="h-12 flex-shrink-0 hover:bg-primary-300 dark:bg-primary-700 dark:hover:bg-primary-600 text-black dark:text-white flex items-center text-lg"
        onClick={newListHandler}
      >
        <i className="text-2xl ml-4 mr-2">
          <BiListPlus />
        </i>
        <h2>New List</h2>
      </button>
    </div>
  );
}

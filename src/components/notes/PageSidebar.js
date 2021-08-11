import React, { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import PageItem from "./PageItem";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export default function PageSidebar({
  darkMode,
  allPages,
  selectPage,
  newPageHandler,
}) {
  const [showLists, setShowLists] = useState(true);

  const showListHandler = () => {
    setShowLists(!showLists);
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } flex flex-col h-full text-black dark:text-white`}
    >
      <div className="flex mt-4 mx-4">
        <div className="w-full font-bold">ALL DOCUMENTS:</div>
        <button onClick={showListHandler}>
          <i className={`${showLists ? "visible" : "hidden"} text-2xl`}>
            <BiChevronDown />
          </i>
          <i className={`${showLists ? "hidden" : "visible"} text-2xl`}>
            <BiChevronUp />
          </i>
        </button>
      </div>
      <hr className="border-none h-0.5 bg-primary-300 dark:bg-primary-600 mx-4 my-2" />
      <div className={`flex-auto min-h-0 ${showLists ? "visible" : "hidden"}`}>
        <div className="overflow-hidden overflow-y-auto h-full">
          {allPages.map((page, pageIndex) => (
            <div key={page.id}>
              <PageItem
                index={pageIndex}
                icon={page.icon}
                title={page.title}
                color={page.color}
                selectPage={selectPage}
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
        onClick={newPageHandler}
      >
        <i className="text-2xl ml-4 mr-2">
          <AiOutlineFileAdd />
        </i>
        <h2>New Note</h2>
      </button>
    </div>
  );
}

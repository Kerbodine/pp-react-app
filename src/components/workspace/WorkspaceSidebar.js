import React, { useState } from "react";
import {
  BiListPlus,
  BiChevronDown,
  BiChevronUp,
  BiSun,
  BiCalendarExclamation,
  BiStar,
  BiPin,
  BiArchive,
  BiPlus,
} from "react-icons/bi";
import WorkspaceCategory from "./WorkspaceCategory";
import { Link } from "react-router-dom";
import WorkspaceItem from "./WorkspaceItem";

export default function WorkspaceSidebar({
  allLists,
  selectItemHandler,
  newItemHandler,
  currentListIndex,
}) {
  const [showCategories, setShowCategories] = useState(true);
  const [showLists, setShowLists] = useState(true);

  return (
    <div
      className={`flex flex-col h-full cursor-pointer text-black dark:text-white`}
    >
      <div className="w-full h-12 bg-primary-300 dark:bg-primary-600 flex items-end px-4"></div>
      <div className="flex mt-4 mx-4">
        <div className="w-full font-bold">CATEGORIES:</div>
        <button
          onClick={() => {
            setShowCategories(!showCategories);
          }}
        >
          <i className="text-2xl">
            {showCategories ? <BiChevronUp /> : <BiChevronDown />}
          </i>
        </button>
      </div>
      <hr className="border-none h-0.5 bg-gray-300 dark:bg-primary-600 mx-4 my-2" />
      <div className={`${showCategories ? "visible" : "hidden"}`}>
        <Link to="/today">
          <WorkspaceCategory
            path="/today"
            icon={<BiSun />}
            title="Today"
            color="blue"
          />
        </Link>
        <Link to="/priority">
          <WorkspaceCategory
            path="/priority"
            icon={<BiCalendarExclamation />}
            title="Priority"
            color="red"
          />
        </Link>
        <Link to="/starred">
          <WorkspaceCategory
            path="/starred"
            icon={<BiStar />}
            title="Starred"
            color="amber"
          />
        </Link>
        <Link to="/pinned">
          <WorkspaceCategory
            path="/pinned"
            icon={<BiPin />}
            title="Pinned"
            color="indigo"
          />
        </Link>
        <Link to="/all">
          <WorkspaceCategory
            path="/all"
            icon={<BiArchive />}
            title="All"
            color="gray"
          />
        </Link>
      </div>
      <div className="flex mt-4 mx-4">
        <div className="w-full font-bold">MY LISTS:</div>
        <button
          onClick={() => {
            setShowLists(!showLists);
          }}
        >
          <i className="text-2xl">
            {showLists ? <BiChevronUp /> : <BiChevronDown />}
          </i>
        </button>
      </div>
      <hr className="border-none h-0.5 bg-gray-300 dark:bg-primary-600 mx-4 my-2" />
      <div className={`flex-auto min-h-0 ${showLists ? "visible" : "hidden"}`}>
        <div className="overflow-hidden overflow-y-auto h-full">
          {allLists.map((list, listIndex) => {
            switch (list.type) {
              case "reminders":
                return (
                  <div key={list.id}>
                    <WorkspaceItem
                      index={listIndex}
                      title={list.title}
                      amount={Object.keys(list.tasks).length}
                      color={list.color}
                      icon={list.icon}
                      selectItemHandler={selectItemHandler}
                      currentListIndex={currentListIndex}
                    />
                  </div>
                );
              case "notes":
                return (
                  <div key={list.id}>
                    <WorkspaceItem
                      index={listIndex}
                      icon={list.icon}
                      title={list.title}
                      color={list.color}
                      selectItemHandler={selectItemHandler}
                      currentListIndex={currentListIndex}
                    />
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
      <div
        className={`flex-auto min-h-0 ${showLists ? "hidden" : "visible"}`}
      ></div>
      <hr className="border-none h-0.5 bg-gray-300 dark:bg-primary-600" />
      <button
        className="h-12 flex-shrink-0 hover:bg-primary-300 dark:bg-primary-700 dark:hover:bg-primary-600 flex items-center text-lg"
        // onClick={newItemHandler}
      >
        <BiPlus className="text-2xl ml-4 mr-2" />
        <h3>New Item</h3>
      </button>
    </div>
  );
}

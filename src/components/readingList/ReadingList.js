import React, { useState, useEffect } from "react";
import ReadingListSidebar from "./ReadingListSidebar";
import { v4 as uuidv4 } from "uuid";
import {
  BiBookHeart,
  BiTime,
  BiCheckCircle,
  BiBookContent,
  BiArchive,
  BiChevronDown,
  BiBook,
  BiTrash,
} from "react-icons/bi";
import ConfirmModal from "../reminders/ConfirmModal";

export default function ReadingList({ darkMode }) {
  const data = [
    {
      id: uuidv4(),
      title: "In progress",
      color: "yellow",
      icon: <BiTime />,
      books: [],
    },
    {
      id: uuidv4(),
      title: "Finished",
      color: "blue",
      icon: <BiCheckCircle />,
      books: [],
    },
    {
      id: uuidv4(),
      title: "Favorites",
      color: "red",
      icon: <BiBookHeart />,
      books: [],
    },
    {
      id: uuidv4(),
      title: "Book type",
      color: "purple",
      icon: <BiBookContent />,
      books: [],
    },
    {
      id: uuidv4(),
      title: "All",
      color: "green",
      icon: <BiArchive />,
      books: [],
    },
  ];

  const [allLists, setAllLists] = useState(data);
  const [currentListIndex, setCurrentListIndex] = useState(0);
  const [colorDropdown, setColorDropdown] = useState(false);
  const [showColorSelector, setShowColorSelector] = useState(true);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  // Function to change current list to selected list
  const selectListHandler = (index) => {
    setCurrentListIndex(index);
  };

  // Manage color dropdown state
  const handleColorDropdown = () => {
    setColorDropdown(!colorDropdown);
  };

  // Function to update color for current list
  const listColorHandler = (newColor) => {
    let temp = allLists;
    temp[currentListIndex].color = newColor;
    setAllLists([...temp]);
    setColorDropdown(false);
  };

  // Function to change list title
  const titleChangeHandler = (e) => {
    if (currentListIndex >= 5) {
      let temp = allLists;
      temp[currentListIndex].title = e.target.value;
      setAllLists([...temp]);
    }
  };

  // Adding a new list to the end of allLists
  const newListHandler = () => {
    const newList = {
      id: uuidv4(),
      title: "Untitled list",
      color: "gray",
      icon: <BiBook />,
      tasks: [],
    };
    setAllLists([...allLists, newList]);
    setCurrentListIndex(allLists.length);
  };

  const deleteListHandler = () => {
    setDeleteConfirmation(false);
    const temp = allLists;
    temp.splice(currentListIndex, 1);
    setAllLists([...temp]);
    setCurrentListIndex(allLists.length - 1);
  };

  const toggleDeleteConfirmation = () => {
    setDeleteConfirmation(!deleteConfirmation);
  };

  useEffect(() => {
    if (currentListIndex < 5) {
      setShowColorSelector(false);
    } else {
      setShowColorSelector(true);
    }
  }, [currentListIndex]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="h-screen flex bg-primary dark:bg-primary-900">
        <div className="my-4 mr-4 lg:mr-0 w-full">
          <div className="h-full rounded-2xl flex overflow-hidden">
            <div className="h-full">
              <div className="w-0 md:w-48 bg-primary-200 dark:bg-primary-700 h-full">
                <ReadingListSidebar
                  allLists={allLists}
                  selectList={selectListHandler}
                  newListHandler={newListHandler}
                />
              </div>
            </div>
            <div className="w-full h-full">
              <div className="bg-primary-100 dark:bg-primary-800 h-full">
                <div
                  className={`w-full h-12 bg-${allLists[currentListIndex].color}-400`}
                ></div>
                <div className="h-12 m-8 flex flex-row items-center">
                  <input
                    className="flex-auto bg-transparent truncate text-black dark:text-white font-bold outline-none text-4xl"
                    autoComplete="off"
                    value={allLists[currentListIndex].title}
                    onChange={titleChangeHandler}
                    type="text"
                    aria-label="list title"
                  ></input>
                  <div
                    className={`${
                      showColorSelector ? "visible" : "hidden"
                    } relative w-8 h-8 rounded-full bg-${
                      allLists[currentListIndex].color
                        ? `${allLists[currentListIndex].color}-400 text-white`
                        : "primary-200 text-black"
                    } text-2xl flex items-center justify-center hover:bg-${
                      allLists[currentListIndex].color
                    }-400/80`}
                    onClick={handleColorDropdown}
                  >
                    <BiChevronDown />
                    <div
                      className={`${
                        colorDropdown ? "visible" : "hidden"
                      } absolute top-10 -left-2 w-12 bg-white dark:bg-primary-900 rounded-md shadow-md`}
                    >
                      <div
                        className="w-8 h-8 m-2 rounded-full bg-red-400 hover:bg-red-400/80"
                        onClick={() => listColorHandler("red")}
                      ></div>
                      <div
                        className="w-8 h-8 m-2 rounded-full bg-yellow-400 hover:bg-yellow-400/80"
                        onClick={() => listColorHandler("yellow")}
                      ></div>
                      <div
                        className="w-8 h-8 m-2 rounded-full bg-green-400 hover:bg-green-400/80"
                        onClick={() => listColorHandler("green")}
                      ></div>
                      <div
                        className="w-8 h-8 m-2 rounded-full bg-blue-400 hover:bg-blue-400/80"
                        onClick={() => listColorHandler("blue")}
                      ></div>
                      <div
                        className="w-8 h-8 m-2 rounded-full bg-purple-400 hover:bg-purple-400/80"
                        onClick={() => listColorHandler("purple")}
                      ></div>
                      <div
                        className="w-8 h-8 m-2 rounded-full bg-gray-400 hover:bg-gray-400/80"
                        onClick={() => listColorHandler("gray")}
                      ></div>
                      <div
                        className="w-8 h-8 m-2 rounded-full border-gray-400 border-2 hover:bg-gray-200"
                        onClick={() => listColorHandler(false)}
                      ></div>
                    </div>
                  </div>
                  <div
                    className={`${
                      showColorSelector ? "visible" : "hidden"
                    } relative w-8 h-8 rounded-full bg-primary-200 hover:bg-red-400 dark:bg-primary-700 dark:text-white dark:hover:bg-red-400 text-black hover:text-white text-2xl ml-2 flex items-center justify-center`}
                    onClick={toggleDeleteConfirmation}
                  >
                    <BiTrash />
                  </div>
                  <ConfirmModal
                    deleteConfirmation={deleteConfirmation}
                    toggleDeleteConfirmation={toggleDeleteConfirmation}
                    deleteListHandler={deleteListHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TagList from "./TagList";
import PageSidebar from "./PageSidebar";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";
import {
  AiOutlineEye,
  AiOutlineFileExclamation,
  AiOutlineFileText,
  AiOutlineFileImage,
} from "react-icons/ai";
import {
  BiPencil,
  BiCaretDownCircle,
  BiCaretUpCircle,
  BiChevronDown,
  BiTrash,
} from "react-icons/bi";

import Editor from "rich-markdown-editor";

export default function Notes({ darkMode }) {
  const data = [
    {
      id: uuidv4(),
      icon: <AiOutlineFileExclamation />,
      title: "Note 1",
      color: "red",
      content: "",
      tags: [],
      readOnly: false,
    },
    {
      id: uuidv4(),
      icon: <AiOutlineFileText />,
      title: "Note 2",
      color: "yellow",
      content: "",
      tags: [],
      readOnly: false,
    },
    {
      id: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue",
      content: "",
      tags: [],
      readOnly: false,
    },
  ];

  const [readOnly, setReadOnly] = useState(false);
  const [viewModeDropdown, setViewModeDropdown] = useState(false);
  const [allPages, setAllPages] = useState(data);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [colorDropdown, setColorDropdown] = useState(false);

  const readOnlyHandler = () => {
    setReadOnly(!readOnly);
  };

  const viewModeDropdownHandler = () => {
    setViewModeDropdown(!viewModeDropdown);
  };

  const selectPageHandler = (index) => {
    setCurrentPageIndex(index);
  };

  const titleChangeHandler = (e) => {
    let temp = allPages;
    temp[currentPageIndex].title = e.target.value;
    setAllPages([...temp]);
  };

  const newPageHandler = () => {
    const newPage = {
      id: uuidv4(),
      icon: <AiOutlineFileText />,
      title: "Untitled note",
      color: "gray",
      content: "",
      tags: [],
      readOnly: false,
    };
    setAllPages([...allPages, newPage]);
    setCurrentPageIndex(allPages.length);
  };

  const updatePageHandler = (value) => {
    const content = value();
    allPages[currentPageIndex].content = content;
  };

  // Manage color dropdown state
  const handleColorDropdown = () => {
    setColorDropdown(!colorDropdown);
  };

  // Function to update color for current list
  const listColorHandler = (newColor) => {
    let temp = allPages;
    temp[currentPageIndex].color = newColor;
    setAllPages([...temp]);
    setColorDropdown(false);
  };

  useEffect(() => {
    setReadOnly(allPages[currentPageIndex].readOnly);
  }, [currentPageIndex]);

  console.log(allPages[currentPageIndex]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="h-screen flex bg-primary dark:bg-primary-900">
        <div className="my-4 mr-4 lg:mr-0 w-full">
          <div className="h-full rounded-2xl flex overflow-hidden">
            <div className="h-full">
              <div className="w-0 md:w-48 bg-primary-200 dark:bg-primary-700 h-full">
                <PageSidebar
                  allPages={allPages}
                  selectPage={selectPageHandler}
                  newPageHandler={newPageHandler}
                />
              </div>
            </div>
            <div className="w-full h-full">
              <div className="bg-primary-100 dark:bg-primary-800 h-full">
                <div
                  className={`w-full h-12 bg-${allPages[currentPageIndex].color}-400`}
                ></div>
                <div className="h-12 m-8 flex flex-row items-center">
                  <input
                    id="document-title"
                    autoComplete="off"
                    value={allPages[currentPageIndex].title}
                    onChange={titleChangeHandler}
                    className="flex-auto bg-transparent truncate text-black dark:text-white font-bold outline-none text-4xl"
                    type="text"
                    aria-label="document title"
                  ></input>
                  <div
                    className={`relative w-8 h-8 rounded-full bg-${
                      allPages[currentPageIndex].color
                        ? `${allPages[currentPageIndex].color}-400 text-white`
                        : "primary-200 text-black"
                    } text-2xl flex items-center justify-center hover:bg-${
                      allPages[currentPageIndex].color
                    }-400/80`}
                    onClick={handleColorDropdown}
                  >
                    <BiChevronDown />
                    <div
                      className={`${
                        colorDropdown ? "visible" : "hidden"
                      } absolute top-10 -left-2 w-12 bg-white dark:bg-primary-900 rounded-md shadow-md z-20`}
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
                    className={`relative w-8 h-8 rounded-full bg-primary-200 hover:bg-red-400 dark:bg-primary-700 dark:text-white dark:hover:bg-red-400 text-black hover:text-white text-2xl ml-2 flex items-center justify-center`}
                  >
                    <BiTrash />
                  </div>
                </div>
                <div className="mx-8">
                  <div className="flex -mt-4">
                    <div className="flex-auto">
                      <TagList />
                    </div>
                    <button
                      className="w-20 h-8 bg-primary-200 dark:bg-primary-700 text-black dark:text-white rounded-full relative flex items-center"
                      onClick={viewModeDropdownHandler}
                    >
                      <i className="text-2xl px-2">
                        {readOnly ? <AiOutlineEye /> : <BiPencil />}
                      </i>
                      <div className="text-2xl px-2">
                        {viewModeDropdown ? (
                          <BiCaretDownCircle />
                        ) : (
                          <BiCaretUpCircle />
                        )}
                      </div>
                      <div
                        className={`${
                          viewModeDropdown ? "visible" : "hidden"
                        } absolute top-10 right-0 w-30 h-16 rounded-md bg-white dark:bg-primary-700 shadow-md overflow-hidden z-10`}
                      >
                        <div
                          className={`w-full h-8 flex items-center px-2 cursor-pointer ${
                            readOnly
                              ? "bg-primary-200 dark:bg-primary-900"
                              : "hover:bg-primary-100 dark:hover:bg-primary-800"
                          }`}
                          onClick={readOnlyHandler}
                        >
                          <i className="text-2xl">
                            <AiOutlineEye />
                          </i>
                          <h4 className="mx-1.5 whitespace-nowrap">Viewing</h4>
                        </div>
                        <div
                          className={`w-full h-8 flex items-center px-2 cursor-pointer ${
                            readOnly
                              ? "hover:bg-primary-100 dark:hover:bg-primary-800"
                              : "bg-primary-200 dark:bg-primary-900"
                          }`}
                          onClick={readOnlyHandler}
                        >
                          <i className="text-2xl">
                            <BiPencil />
                          </i>
                          <h4 className="mx-1.5 whitespace-nowrap">Editing</h4>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="px-8 mt-4 overflow-y-scroll overflow-x-hidden h-full bg-primary-100 dark:bg-primary-800">
                  <Editor
                    dark={darkMode}
                    readOnly={readOnly}
                    defaultValue={allPages[currentPageIndex].content}
                    onChange={(value) => updatePageHandler(value)}
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

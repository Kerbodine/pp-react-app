import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TagList from "./TagList";
import PageSidebar from "./PageSidebar";
import {
  AiOutlineEye,
  AiOutlineFileExclamation,
  AiOutlineFileText,
  AiOutlineFileImage,
} from "react-icons/ai";
import { BiPencil, BiCaretDownCircle, BiCaretUpCircle } from "react-icons/bi";

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

  useEffect(() => {
    setReadOnly(allPages[currentPageIndex].readOnly);
  }, [currentPageIndex]);

  console.log(allPages[currentPageIndex]);

  return (
    <div className="h-screen w-full bg-primary dark:bg-primary-900 flex">
      <div className="w-full h-auto mr-4 mt-4 mb-4 lg:mr-0">
        <div className="h-full rounded-2xl overflow-hidden shadow-md transition-width flex flex-row ">
          <div className="h-full">
            <div className="w-0 md:w-48 bg-primary-200 dark:bg-primary-700 h-full">
              <PageSidebar
                allPages={allPages}
                selectPage={selectPageHandler}
                newPageHandler={newPageHandler}
              />
            </div>
          </div>
          <div className="w-full">
            <div
              className={`w-full h-12 bg-${allPages[currentPageIndex].color}-400`}
            ></div>
            <div className="px-8 pt-8 bg-primary-100 dark:bg-primary-800 flex flex-col">
              <input
                id="document-title"
                autoComplete="off"
                value={allPages[currentPageIndex].title}
                onChange={titleChangeHandler}
                className="h-12 bg-transparent text-black dark:text-white font-bold outline-none text-4xl mb-4"
                type="text"
                aria-label="document title"
              ></input>
              <div className="flex">
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
              <div className="w-full h-4 bg-primary-100 dark:bg-primary-800"></div>
            </div>
            <div className="px-8 overflow-y-scroll overflow-x-hidden h-full bg-primary-100 dark:bg-primary-800">
              <Editor
                defaultValue="Hello world!"
                dark={darkMode}
                readOnly={readOnly}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

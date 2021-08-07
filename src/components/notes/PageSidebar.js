import React, { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import PageItem from "./PageItem";
import { BiCaretDownCircle, BiCaretUpCircle } from "react-icons/bi";

export default function PageSidebar({ allPages }) {
  const [showLists, setShowLists] = useState(true);

  const showListHandler = () => {
    setShowLists(!showLists);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex mt-4 mx-4">
        <div className="w-full font-bold">ALL DOCUMENTS:</div>
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
          {allPages.map((page) => (
            <div key={page.key}>
              <PageItem
                icon={page.icon}
                title={page.title}
                color={page.color}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`flex-auto min-h-0 ${showLists ? "hidden" : "visible"}`}
      ></div>
      <hr className="border-none h-0.5 bg-gray-300" />
      <div className="w-48 h-20 bg-primary-300 p-4">
        <button className="bg-accent-400 hover:bg-accent-300 rounded-full h-12 flex items-center w-full text-white">
          <i>
            <AiOutlineFileAdd className={"w-6 h-6 text-2xl m-2"} />
          </i>
          <h2>New page</h2>
        </button>
      </div>
    </div>
  );
}

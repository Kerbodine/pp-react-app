import React from "react";
import TextEditor from "../TextEditor";
import TagList from "./TagList";

export default function Notepad({ isSideExpanded }) {

  return (
    <div className={`h-screen w-auto ${ isSideExpanded ? "lg:mr-72 mr-0" : "lg:mr-14 mr-0"}`}>
      <div className={"p-4 h-screen"}>
        <div className="bg-gray-50 h-full rounded-2xl shadow-md transition-width flex flex-row ">
          <div className="">
            <div className="w-0 h-full md:w-48 bg-red-200 rounded-l-2xl h-48"></div>
          </div>
          <div className="w-full flex flex-col">
            <div className="">
              <div className="h-10 w-auto rounded-t-2xl md:rounded-none md:rounded-tr-2xl bg-gradient-to-r from-green-400 to-accent-500"></div>
              <div className="px-4 pt-4 mb-4">
                <input id="document-title" className="h-12 bg-transparent text-primary-800 font-semibold outline-none text-4xl px-2 mb-4" placeholder="Untitled" type="text"></input>
                <TagList />
              </div>
            </div>
            <div className="overflow-y-auto p-4 -mt-2">
              <TextEditor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

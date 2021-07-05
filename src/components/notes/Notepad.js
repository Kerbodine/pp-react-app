import React from "react";
import TextEditor from "../TextEditor";
import TagList from "./TagList";

export default function Notepad({ isSideExpanded }) {

  return (
    <div
      className={`bg-white h-screen w-auto ${ isSideExpanded ? "lg:mr-72 mr-0" : "lg:mr-14 mr-0"}`}>
      <div className={"p-8 rounded text-black h-screen"}>
        <div className="bg-primary-100 h-auto rounded-lg shadow-md transition-width">
          <div className="h-10 w-full rounded-t-lg bg-gradient-to-r from-green-400 to-accent-500"></div>
          <div className="p-4">
            <input id="document-title" className="w-full h-12 bg-transparent text-primary-800 font-semibold outline-none text-4xl px-2 mb-4" placeholder="Untitled" type="text"></input>
            <TagList />
            <hr className="w-full mb-2 h-0.5 bg-primary-200"></hr>
            <div className="editor">
              <TextEditor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

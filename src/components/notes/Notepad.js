import React from "react";

import TextEditor from "../TextEditor";

export default function Notepad({ isSideExpanded }) {

  return (
    <div
      className={`transition-all bg-white h-screen w-auto ${ isSideExpanded ? "lg:mr-72 mr-0" : "lg:mr-14 mr-0"}`}>
      <div className={"p-8 rounded text-black h-screen"}>
        <div className="p-4 bg-primary-50 h-auto rounded">
          <div className="editor">
            <input id="document-title" className="w-full h-12 bg-transparent text-primary-800 font-semibold outline-none text-4xl px-2 mb-4" placeholder="Untitled" type="text"></input>
            <TextEditor />
          </div>
        </div>
      </div>
    </div>
  );
}

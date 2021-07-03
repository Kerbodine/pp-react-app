import React from "react";

import TextEditor from "../TextEditor";

export default function Notepad({ isSideExpanded }) {

  return (
    <div
      className={`transition-all bg-white h-screen ${ isSideExpanded ? "mr-72" : "mr-14"}`}>
      <div className={"p-8 rounded text-black h-screen"}>
        <div className="p-4 bg-primary-200 h-full rounded">
          <div className="editor">
            <TextEditor />
          </div>
        </div>
      </div>
    </div>
  );
}

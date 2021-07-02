import React from "react";

import TextEditor from "../TextEditor";

export default function Notepad({ isSideExpanded }) {
  return (
    <div
      className={`bg-red-200 transition-all ${
        isSideExpanded ? "mr-48" : "mr-14"
      }`}
    >
      <div className={"m-4 bg-green-200"}>
        <div className="editor">
          <TextEditor />
        </div>
      </div>
    </div>
  );
}

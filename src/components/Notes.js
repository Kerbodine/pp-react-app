import React from "react";

import PageSidebar from "./notes/PageSidebar"
import Notepad from "./notes/Notepad";

export default function Notes({ isSideExpanded }) {

  return (
    <div>
      {/* <PageSidebar /> */}
      <div className={`w-auto bg-primary-800`}>
        <Notepad isSideExpanded={isSideExpanded} />
      </div>
    </div>
  );
}

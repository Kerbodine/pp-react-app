import React from "react";
import { useState } from "react";

import PageSidebar from "./notes/PageSidebar";
import SidePanel from "./notes/SidePanel";
import Notepad from "./notes/Notepad";

export default function Notes() {
  const sidePanelCollapsed = localStorage.getItem("side-panel-collapsed");
  const [isSideExpanded, setIsSideExpanded] = useState(
    sidePanelCollapsed ? false : true
  );

  const toggleSidePanelHandler = () => {
    if (isSideExpanded) {
      setIsSideExpanded(false);
      localStorage.setItem("side-panel-collapsed", true);
      return;
    }
    setIsSideExpanded(true);
    localStorage.removeItem("side-panel-collapsed");
  };

  return (
    <div>
      <h1>Notes Page</h1>
      <PageSidebar />
      <div className={"ml-48"}>
        <Notepad isSideExpanded={isSideExpanded} />
      </div>
      <SidePanel
        isSideExpanded={isSideExpanded}
        toggleSidePanelHandler={toggleSidePanelHandler}
      />
    </div>
  );
}

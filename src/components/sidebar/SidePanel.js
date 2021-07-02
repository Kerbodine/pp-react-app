// import { BiMenu } from "react-icons/bi";
import { BiDotsVerticalRounded, BiCalendarEvent } from "react-icons/bi";

import { IconContext } from "react-icons";

import Calendar from 'react-calendar';

import NavbarTitle from "../navbar/NavbarTitle";

export default function SidePanel({ isSideExpanded, toggleSidePanelHandler }) {

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 flex flex-col h-full bg-gray-700 text-white transition-width z-10 ${
        isSideExpanded ? " w-72 " : "w-14"}`}>
      <IconContext.Provider value={{ color: "white" }}>
        <NavbarTitle
          icon={<BiDotsVerticalRounded />}
          click={toggleSidePanelHandler}
          title="Widgets"
          expanded={isSideExpanded}
        />
        <hr
          className={`border transition-width mx-4 ${
            isSideExpanded ? "w-64" : "w-6"
          }`}
        ></hr>
        <div className="m-4">
          <i><BiCalendarEvent className={`text-2xl ${isSideExpanded ? "hidden" : "visible"}`}/></i>
          <Calendar className={`transition-opacity ${isSideExpanded ? "visible" : "hidden"}`}/>
        </div>
      </IconContext.Provider>
    </div>
  );
}

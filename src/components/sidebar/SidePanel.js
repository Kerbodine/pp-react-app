// import { BiMenu } from "react-icons/bi";
import { BiDotsVerticalRounded, BiCalendar, BiCalendarEvent, BiListUl, BiNote } from "react-icons/bi";
import { IconContext } from "react-icons";
import Calendar from 'react-calendar';
import NavbarTitle from "../navbar/NavbarTitle";
import SideItem from "./SideItem";
import SideWidget from "./SideWidget";
import SideNote from "./SideNote";

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
        <div className="mx-4 mt-4">
          <i className={`text-2xl ${isSideExpanded ? "hidden" : "visible"}`}><BiCalendar /></i>
          <p className={`mb-2 ${isSideExpanded ? "visible" : "hidden"}`}>Calendar:</p>
          <Calendar className={`transition-opacity ${isSideExpanded ? "visible" : "hidden"}`}/>
        </div>
        <div className="mx-4 mt-4">
          <i className={`text-2xl ${isSideExpanded ? "hidden" : "visible"}`}><BiCalendarEvent /></i>
          <p className={`${isSideExpanded ? "visible" : "hidden"}`}>Upcoming events:</p>
        </div>
        <div className="flex gap-4 mx-4">
          <SideWidget isSideExpanded={isSideExpanded} eventName="Test event" countdown="6" timeUnit="days"/>
          <SideWidget isSideExpanded={isSideExpanded} eventName="Test event 2" countdown="11" timeUnit="days"/>
        </div>
        <div className="mx-4 mt-4">
          <p className={`${isSideExpanded ? "visible" : "hidden"}`}>Pinned tasks:</p>
          <i className={`text-2xl ${isSideExpanded ? "hidden" : "visible"}`}><BiListUl /></i>
          <div className={`${isSideExpanded ? "visible" : "hidden"}`}>
            <SideItem color="#ffee00" taskName="Task 1"/>
            <SideItem color="#ccffdd" taskName="Task 2"/>
            <SideItem color="#1fde53" taskName="Task 3"/>
          </div>
        </div>
        <div className="mx-4 mt-4">
          <i className={`text-2xl ${isSideExpanded ? "hidden" : "visible"}`}><BiNote /></i>
          <p className={`mb-2 ${isSideExpanded ? "visible" : "hidden"}`}>Stickies:</p>
          <SideNote isSideExpanded={isSideExpanded}/>
        </div>
      </IconContext.Provider>
    </div>
  );
}

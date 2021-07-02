import React from 'react'

import { BiGridAlt, BiUserCircle, BiCalendar, BiCheckSquare, BiNote, BiExtension, BiMenu, BiCog, BiExit } from "react-icons/bi";
import { IconContext } from "react-icons";

import { Link } from "react-router-dom";

import NavbarTitle from "./NavbarTitle";
import NavbarItem from "./NavbarItem";

export default function Navbar({ isExpanded, toggleNavbarHandler }) {

  return (
    <div className={`fixed top-0 left-0 bottom-0 flex flex-col h-full bg-gray-800 text-white transition-width ${isExpanded ? " w-48 " : "w-14"}`}>
      <IconContext.Provider value={{ color: 'white'}}>
      <NavbarTitle icon={<BiMenu />} click={toggleNavbarHandler} title="LOGO" expanded={isExpanded}/>
      <hr className={`border transition-width mx-4 ${isExpanded ? "w-40" : "w-6"}`}></hr>
      <div className="flex flex-col px-2">
        <Link to="/"><NavbarItem icon={<BiGridAlt />} title="Dashboard" expanded={isExpanded}></NavbarItem></Link>
        <Link to="/calendar"><NavbarItem icon={<BiCalendar />} title="Calendar" expanded={isExpanded}/></Link>
        <Link to="/reminders"><NavbarItem icon={<BiCheckSquare />} title="Reminders" expanded={isExpanded}/></Link>
        <Link to="/notes"><NavbarItem icon={<BiNote />} title="Notes" expanded={isExpanded}/></Link>
        <Link to="/extras"><NavbarItem icon={<BiExtension />} title="Extras" expanded={isExpanded}/></Link>
        <div className="absolute bottom-0 whitespace-nowrap">
          <Link to="/profile"><NavbarItem icon={<BiUserCircle />} title="Profile" expanded={isExpanded}/></Link>
          <Link to="/settings"><NavbarItem icon={<BiCog />} title="Settings" expanded={isExpanded}/></Link>
          <hr className={`border transition-width mx-2 ${isExpanded ? "w-40" : "w-6"}`}></hr>
          <Link to="/"><NavbarItem icon={<BiExit />} title="Sign-out" expanded={isExpanded}/></Link>
        </div>
      </div>
      </IconContext.Provider>
    </div>
  );
}

import React from 'react'

import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";

import NavbarTitle from '../navbar/NavbarTitle';

export default function SidePanel({ isSideExpanded, toggleSidePanelHandler }) {
  return (
    <div className={`fixed top-0 right-0 bottom-0 flex flex-col h-full bg-gray-700 text-white transition-width ${isSideExpanded ? " w-48 " : "w-14"}`}>
      <IconContext.Provider value={{ color: 'white'}}>
        <NavbarTitle icon={<BiMenu />} click={toggleSidePanelHandler} title="Properties" expanded={isSideExpanded}/>
        <hr className={`border transition-width mx-4 ${isSideExpanded ? "w-40" : "w-6"}`}></hr>
      </IconContext.Provider>
    </div>
  )
}

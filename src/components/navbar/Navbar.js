import React from "react";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import {BiAtom, BiGridAlt, BiCheckSquare, BiNotepad, BiExtension, BiUserCircle, BiCog, BiExit} from "react-icons/bi";

export default function Navbar() {
  return (
    <div
      className="h-screen flex flex-col bg-primary-800 text-white">
        <div className="w-20 flex flex-col gap-4 mt-4">
          <NavbarItem icon={<BiAtom />} />
          <Link to="/">
            <NavbarItem icon={<BiGridAlt />} />
          </Link>
          <Link to="/reminders">
            <NavbarItem icon={<BiCheckSquare />} />
          </Link>
          <Link to="/notes">
            <NavbarItem icon={<BiNotepad />} />
          </Link>
          <Link to="/extras">
            <NavbarItem icon={<BiExtension />} />
          </Link>
        </div>
        <div className="mt-auto pt-4 mb-4 flex flex-col gap-4">
          <Link to="/profile">
            <NavbarItem icon={<BiUserCircle />} />
          </Link>
          <Link to="/settings">
            <NavbarItem icon={<BiCog />} />
          </Link>
          <Link to="/">
            <NavbarItem icon={<BiExit />} />
          </Link>
        </div>
    </div>
  );
}

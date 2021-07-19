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
          <Link to="/" aria-label="home">
            <NavbarItem icon={<BiGridAlt />} path="/" />
          </Link>
          <Link to="/reminders" aria-label="reminders">
            <NavbarItem icon={<BiCheckSquare />} path="/reminders" />
          </Link>
          <Link to="/notes" aria-label="notes">
            <NavbarItem icon={<BiNotepad />} path="/notes" />
          </Link>
          <Link to="/extensions" aria-label="extensions">
            <NavbarItem icon={<BiExtension />} path="/extensions" />
          </Link>
        </div>
        <div className="mt-auto pt-4 mb-4 flex flex-col gap-4">
          <Link to="/profile" aria-label="profile">
            <NavbarItem icon={<BiUserCircle />} path="/profile" />
          </Link>
          <Link to="/settings" aria-label="settings">
            <NavbarItem icon={<BiCog />} path="/settings" />
          </Link>
          <Link to="/logout" aria-label="logout">
            <NavbarItem icon={<BiExit />} path="/logout" />
          </Link>
        </div>
    </div>
  );
}

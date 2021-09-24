import React from "react";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import NavbarLogo from "./NavbarLogo";
import { useLocation } from "react-router-dom";
import {
  BiAtom,
  BiGridAlt,
  BiCheckSquare,
  BiNotepad,
  BiBookBookmark,
  BiExtension,
  BiCog,
} from "react-icons/bi";

export default function Navbar() {
  const location = useLocation();

  let active = false;
  location.pathname.split("/")[1] !== "login"
    ? (active = true)
    : (active = false);

  return (
    <div
      className={`${
        active ? "visible" : "hidden"
      } h-screen flex flex-col bg-primary dark:bg-primary-900 text-black dark:text-white`}
    >
      <div className="w-20 mt-4">
        <div className="absolute top-4 w-20 z-10">
          <NavbarLogo icon={<BiAtom />} accent={true} />
        </div>
        <div className="overflow-hidden overflow-y-auto no-scrollbar h-[calc(100vh-4rem)] flex flex-col gap-4 sticky mt-8">
          <div className="mt-4"></div>
          <Link to="/" aria-label="home">
            <NavbarItem icon={<BiGridAlt />} path="/" />
          </Link>
          <Link to="/reminders" aria-label="reminders">
            <NavbarItem icon={<BiCheckSquare />} path="/reminders" />
          </Link>
          <Link to="/notes" aria-label="notes">
            <NavbarItem icon={<BiNotepad />} path="/notes" />
          </Link>
          <Link to="/reading-list" aria-label="reading list">
            <NavbarItem icon={<BiBookBookmark />} path="/reading-list" />
          </Link>
          <Link to="/extensions" aria-label="extensions">
            <NavbarItem icon={<BiExtension />} path="/extensions" />
          </Link>
          <Link to="/settings" aria-label="settings">
            <NavbarItem icon={<BiCog />} path="/settings" />
          </Link>
        </div>
      </div>
    </div>
  );
}

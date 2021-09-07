import React from "react";
import {
  BiCheckSquare,
  BiBookBookmark,
  BiNotification,
  BiSidebar,
  BiWorld,
  BiUserCircle,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import SettingsItem from "./SettingsItem";

export default function SettingsSidebar({ setSettingsPage, settingsPage }) {
  const selectList = (index) => {
    setSettingsPage(index);
  };

  return (
    <div
      className={`flex flex-col h-full cursor-pointer text-black dark:text-white`}
    >
      <div className="w-full h-12 bg-primary-300 dark:bg-primary-600 flex items-end px-4">
        <h2 className="mb-0.5 text-lg font-bold">SETTINGS</h2>
      </div>
      <div className="mt-4">
        <Link to="/settings" aria-label="General settings">
          <SettingsItem title="General" icon={<BiWorld />} path="" />
        </Link>
        <Link to="/settings/account" aria-label="Account settings">
          <SettingsItem
            title="Account"
            icon={<BiUserCircle />}
            path="/account"
          />
        </Link>
        <Link to="/settings/sidebar" aria-label="Sidebar settings">
          <SettingsItem title="Sidebar" icon={<BiSidebar />} path="/sidebar" />
        </Link>
        <Link to="/settings/notifications" aria-label="Notifications settings">
          <SettingsItem
            title="Notifications"
            icon={<BiNotification />}
            path="/notifications"
          />
        </Link>
        <Link to="/settings/reminders" aria-label="Reminders settings">
          <SettingsItem
            title="Reminders"
            icon={<BiCheckSquare />}
            path="/reminders"
          />
        </Link>
        <Link to="/settings/reading-list" aria-label="Reading list settings">
          <SettingsItem
            title="Reading list"
            icon={<BiBookBookmark />}
            path="/reading-list"
          />
        </Link>
      </div>
    </div>
  );
}

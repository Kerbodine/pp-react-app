import React from "react";
import {
  BiCheckSquare,
  BiBookBookmark,
  BiNotification,
  BiSidebar,
  BiWorld,
} from "react-icons/bi";
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
        <SettingsItem
          index={0}
          title="General"
          icon={<BiWorld />}
          selectList={selectList}
          settingsPage={settingsPage}
        />
        <SettingsItem
          index={1}
          title="Sidebar"
          icon={<BiSidebar />}
          selectList={selectList}
          settingsPage={settingsPage}
        />
        <SettingsItem
          index={2}
          title="Notifications"
          icon={<BiNotification />}
          selectList={selectList}
          settingsPage={settingsPage}
        />
        <SettingsItem
          index={3}
          title="Reminders"
          icon={<BiCheckSquare />}
          selectList={selectList}
          settingsPage={settingsPage}
        />
        <SettingsItem
          index={4}
          title="Reading list"
          icon={<BiBookBookmark />}
          selectList={selectList}
          settingsPage={settingsPage}
        />
      </div>
    </div>
  );
}

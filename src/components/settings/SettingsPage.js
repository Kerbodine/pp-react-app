import React, { useState } from "react";
import SettingsLine from "./SettingsLine";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="h-screen w-full bg-primary dark:bg-primary-900 flex pr-4 py-4 lg:pr-0">
      <div className="bg-primary-100 dark:bg-primary-800 rounded-2xl w-full h-full flex flex-col items-center overflow-hidden text-black dark:text-white">
        <div className="p-8 max-w-[1024px] w-full">
          <h1 className="text-4xl font-bold">Settings</h1>
          <div className="mt-4 flex flex-col gap-4">
            <div>
              <h2 className="font-semibold text-xl mb-1">Theme</h2>
              <SettingsLine
                caption="Use dark mode as default"
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
                condition={darkMode}
              />
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-1">Sidebar</h2>
              <SettingsLine caption="Show greetings card" />
              <SettingsLine caption="Show calendar" />
              <SettingsLine caption="Show Pomodoro timer" />
              <SettingsLine caption="Show pinned tasks" />
              <SettingsLine caption="Show pinned sticky notes" />
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-1">Notifications</h2>
              <SettingsLine caption="Task notifications" />
              <SettingsLine caption="Pomodoro timer notifications" />
              <SettingsLine caption="Event notifications" />
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-1">
                Reminders Categories
              </h2>
              <SettingsLine caption="Show today category" />
              <SettingsLine caption="Show important category" />
              <SettingsLine caption="Show starred category" />
              <SettingsLine caption="Show all tasks category" />
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-1">
                Reading list Categories
              </h2>
              <SettingsLine caption="Show in progress category" />
              <SettingsLine caption="Show completed category" />
              <SettingsLine caption="Show book type category" />
              <SettingsLine caption="Show favorites tasks category" />
              <SettingsLine caption="Show favorites all books category" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

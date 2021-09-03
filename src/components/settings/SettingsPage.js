import React, { useContext } from "react";
import { SettingsConsumer } from "./SettingsContext";
import SettingsLine from "./SettingsLine";
import settingsContext from "./SettingsContext";
import SettingsSidebar from "./SettingsSidebar";
import { useState } from "react";

export default function SettingsPage() {
  const {
    setDarkMode,
    setSidebarGreeting,
    setSidebarCalendar,
    setSidebarPomodoro,
  } = useContext(settingsContext);

  const [settingsPage, setSettingsPage] = useState(0);

  console.log(settingsPage);

  return (
    <div className="h-screen w-full bg-primary dark:bg-primary-900 flex pr-4 py-4 lg:pr-0">
      <div className="overflow-hidden rounded-2xl flex w-full">
        <div className="h-full">
          <div className="w-0 md:w-48 bg-primary-200 dark:bg-primary-700 h-full">
            <SettingsSidebar
              setSettingsPage={setSettingsPage}
              settingsPage={settingsPage}
            />
          </div>
        </div>
        <div className="bg-primary-100 dark:bg-primary-800 w-full h-full items-center overflow-hidden text-black dark:text-white">
          <div
            className={`w-full h-12 bg-primary-200 dark:bg-primary-700`}
          ></div>
          <div className="p-8 flex justify-center w-full overflow-y-auto h-[calc(100vh-4rem)]">
            <div className="max-w-[768px] w-full">
              <SettingsConsumer>
                {(settings) => {
                  return (
                    <>
                      {settingsPage === 0 ? (
                        <div>
                          <h1 className="text-4xl font-bold mb-4">General</h1>
                          <h2 className="font-semibold text-xl mb-1">Theme</h2>
                          <SettingsLine
                            caption="Use dark mode as default"
                            onClick={setDarkMode}
                            condition={settings.darkMode}
                          />
                        </div>
                      ) : null}
                      {settingsPage === 1 ? (
                        <div>
                          <h1 className="text-4xl font-bold mb-4">Sidebar</h1>
                          <h2 className="font-semibold text-xl mb-1">
                            Widgets
                          </h2>
                          <SettingsLine
                            caption="Show greetings card"
                            onClick={setSidebarGreeting}
                            condition={settings.sidebarGreeting}
                          />
                          <SettingsLine
                            caption="Show calendar"
                            onClick={setSidebarCalendar}
                            condition={settings.sidebarCalendar}
                          />
                          <SettingsLine
                            caption="Show Pomodoro timer"
                            onClick={setSidebarPomodoro}
                            condition={settings.sidebarPomodoro}
                          />
                          <SettingsLine caption="Show pinned tasks" />
                          <SettingsLine caption="Show pinned sticky notes" />
                        </div>
                      ) : null}
                      {settingsPage === 2 ? (
                        <div>
                          <h1 className="text-4xl font-bold mb-4">
                            Notifications
                          </h1>
                          <h2 className="font-semibold text-xl mb-1">Apps</h2>
                          <SettingsLine caption="Task notifications" />
                          <SettingsLine caption="Pomodoro timer notifications" />
                          <SettingsLine caption="Event notifications" />
                        </div>
                      ) : null}
                      {settingsPage === 3 ? (
                        <div>
                          <h1 className="text-4xl font-bold mb-4">Reminders</h1>
                          <h2 className="font-semibold text-xl mb-1">
                            Categories
                          </h2>
                          <SettingsLine caption="Show today category" />
                          <SettingsLine caption="Show important category" />
                          <SettingsLine caption="Show starred category" />
                          <SettingsLine caption="Show all tasks category" />
                        </div>
                      ) : null}
                      {settingsPage === 4 ? (
                        <div>
                          <h1 className="text-4xl font-bold mb-4">
                            Reading List
                          </h1>
                          <h2 className="font-semibold text-xl mb-1">
                            Categories
                          </h2>
                          <SettingsLine caption="Show in progress category" />
                          <SettingsLine caption="Show completed category" />
                          <SettingsLine caption="Show book type category" />
                          <SettingsLine caption="Show favorites tasks category" />
                          <SettingsLine caption="Show favorites all books category" />
                        </div>
                      ) : null}
                    </>
                  );
                }}
              </SettingsConsumer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

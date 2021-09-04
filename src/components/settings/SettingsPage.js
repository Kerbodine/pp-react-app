import React, { useContext } from "react";
import { SettingsConsumer } from "./SettingsContext";
import SettingsLine from "./SettingsLine";
import settingsContext from "./SettingsContext";
import SettingsSidebar from "./SettingsSidebar";
import { useState } from "react";

export default function SettingsPage() {
  const {
    setDarkMode,
    setSidebarCollapsed,
    setSidebarGreeting,
    setSidebarCalendar,
    setSidebarPomodoro,
    setSidebarTasks,
    setSidebarNotes,
    setRemindersToday,
    setRemindersImportant,
    setRemindersStarred,
    setRemindersPinned,
    setRemindersAll,
    setReadingProgress,
    setReadingComplete,
    setReadingType,
    setReadingFavorite,
    setReadingAll,
  } = useContext(settingsContext);

  const [settingsPage, setSettingsPage] = useState(0);

  console.log(settingsPage);

  return (
    <div className="h-screen w-full bg-primary dark:bg-primary-900 flex">
      <div className="overflow-hidden rounded-2xl flex w-full my-4">
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
                          <h1 className="text-4xl font-bold mb-2">Sidebar</h1>
                          <h2 className="font-semibold text-xl mt-4 mb-1">
                            View
                          </h2>
                          <SettingsLine
                            caption="Collapse sidebar"
                            onClick={setSidebarCollapsed}
                            condition={settings.sidebarCollapsed}
                          />
                          <h2 className="font-semibold text-xl mt-4 mb-1">
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
                          <SettingsLine
                            caption="Show pinned tasks"
                            onClick={setSidebarTasks}
                            condition={settings.sidebarTasks}
                          />
                          <SettingsLine
                            caption="Show pinned sticky notes"
                            onClick={setSidebarNotes}
                            condition={settings.sidebarNotes}
                          />
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
                          <SettingsLine
                            caption="Show today category"
                            onClick={setRemindersToday}
                            condition={settings.remindersToday}
                          />
                          <SettingsLine
                            caption="Show priority category"
                            onClick={setRemindersImportant}
                            condition={settings.remindersImportant}
                          />
                          <SettingsLine
                            caption="Show starred category"
                            onClick={setRemindersStarred}
                            condition={settings.remindersStarred}
                          />
                          <SettingsLine
                            caption="Show pinned tasks category"
                            onClick={setRemindersPinned}
                            condition={settings.remindersPinned}
                          />
                          <SettingsLine
                            caption="Show all tasks category"
                            onClick={setRemindersAll}
                            condition={settings.remindersAll}
                          />
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
                          <SettingsLine
                            caption="Show in progress category"
                            onClick={setReadingProgress}
                            condition={settings.readingProgress}
                          />
                          <SettingsLine
                            caption="Show completed category"
                            onClick={setReadingComplete}
                            condition={settings.readingComplete}
                          />
                          <SettingsLine
                            caption="Show book type category"
                            onClick={setReadingType}
                            condition={settings.readingType}
                          />
                          <SettingsLine
                            caption="Show favorites category"
                            onClick={setReadingFavorite}
                            condition={settings.readingFavorite}
                          />
                          <SettingsLine
                            caption="Show all books category"
                            onClick={setReadingAll}
                            condition={settings.readingAll}
                          />
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

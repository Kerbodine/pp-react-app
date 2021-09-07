import React, { useContext } from "react";
import { SettingsConsumer } from "./SettingsContext";
import SettingsLine from "./SettingsLine";
import settingsContext from "./SettingsContext";
import SettingsSidebar from "./SettingsSidebar";
import { useState } from "react";
import { BiBadge, BiChevronDown } from "react-icons/bi";
import UserContext, { UserConsumer } from "../../UserContext";
import ColorPicker from "../ui/ColorPicker";

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

  const [colorDropdown, setColorDropdown] = useState(false);

  const handleColorDropdown = () => {
    setColorDropdown(!colorDropdown);
  };

  const { userData } = useContext(UserContext);

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
                        <>
                          <h1 className="text-4xl font-bold mb-4">Account</h1>
                          <div class="flex items-center justify-center mb-8">
                            <div class="w-full relative flex flex-col">
                              <UserConsumer>
                                {(user) => {
                                  return (
                                    <div
                                      className={`h-24 w-full rounded-t-xl bg-${user.userData.profileColor}-400`}
                                    ></div>
                                  );
                                }}
                              </UserConsumer>
                              <div class="bg-primary-200 dark:bg-primary-700 px-6 rounded-b-xl">
                                <div class="flex justify-between items-center">
                                  <img
                                    class="-mt-10 rounded-full h-20 w-20 bg-accent-400 p-1"
                                    src="https://images.unsplash.com/photo-1620505155135-6d5cc5b4efd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=5&w=800&h=800&q=80"
                                    alt=""
                                  />
                                  <BiBadge className="mt-2 text-2xl text-black dark:text-white" />
                                </div>
                                <div class="py-3 border-b-2 border-black dark:border-white">
                                  <h1 class="text-black dark:text-white font-bold text-xl">
                                    Username
                                    <span class="ml-2 text-primary-500 dark:text-primary-400">
                                      #0000
                                    </span>
                                  </h1>
                                </div>
                                <div class="py-2 mb-4">
                                  <h2 class="uppercase text-primary-500 dark:text-primary-400 font-bold text-sm">
                                    About me:
                                  </h2>
                                  <p class="text-primary-500 dark:text-primary-400 leading-4 pt-2">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Vel saepe quisquam
                                    perspiciatis id illum. Explicabo mollitia
                                    atque et magnam nulla!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h2 className="font-semibold text-xl mb-1">
                              Customization
                            </h2>
                            <div className="flex mb-2">
                              <p className="text-primary-500 dark:text-primary-400">
                                User profile color
                              </p>
                              <UserConsumer>
                                {(user) => {
                                  return (
                                    <div
                                      className={`ml-auto relative w-8 h-8 rounded-full bg-${user.userData.profileColor}-400 text-2xl text-white flex items-center justify-center cursor-pointer hover:bg-opacity-80`}
                                      onClick={handleColorDropdown}
                                    >
                                      <BiChevronDown />
                                      <div
                                        className={`${
                                          colorDropdown ? "visible" : "hidden"
                                        } absolute top-10 -right-1 w-[6.5rem] h-auto z-10 bg-white dark:bg-primary-600 rounded-md shadow-md flex flex-wrap gap-2 p-2`}
                                      >
                                        {userData.allColors.map((color) => (
                                          <ColorPicker
                                            color={color}
                                            listColorHandler={(color) => {
                                              user.setUserData({
                                                ...user.userData,
                                                profileColor: color,
                                              });
                                            }}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  );
                                }}
                              </UserConsumer>
                            </div>
                          </div>
                        </>
                      ) : null}
                      {settingsPage === 1 ? (
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
                      {settingsPage === 2 ? (
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
                      {settingsPage === 3 ? (
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
                      {settingsPage === 4 ? (
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
                      {settingsPage === 5 ? (
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

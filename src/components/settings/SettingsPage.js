import React, { useContext, useState } from "react";
import GeneralSettings from "./GeneralSettings";
import AccountSettings from "./AccountSettings";
import SidebarSettings from "./SidebarSettings";
import NotificationSettings from "./NotificationSettings";
import ReminderSettings from "./ReminderSettings";
import ReadingListSettings from "./ReadingListSettings";

import settingsContext from "./SettingsContext";
import SettingsSidebar from "./SettingsSidebar";
import { Route, useRouteMatch } from "react-router-dom";

export default function SettingsPage() {
  const { userSettings } = useContext(settingsContext);

  const [settingsPage, setSettingsPage] = useState(0);
  const [colorDropdown, setColorDropdown] = useState(false);

  const handleColorDropdown = () => {
    setColorDropdown(!colorDropdown);
  };

  const { url } = useRouteMatch();

  return (
    <div className="h-screen w-full flex">
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
              <Route path={`${url}/`} exact>
                <GeneralSettings />
              </Route>
              <Route path={`${url}/account`} exact>
                <AccountSettings />
              </Route>
              <Route path={`${url}/sidebar`} exact>
                <SidebarSettings />
              </Route>
              <Route path={`${url}/notifications`} exact>
                <NotificationSettings />
              </Route>
              <Route path={`${url}/reminders`} exact>
                <ReminderSettings />
              </Route>
              <Route path={`${url}/reading-list`} exact>
                <ReadingListSettings />
              </Route>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { SettingsConsumer } from "./SettingsContext";
import SettingsLine from "./SettingsLine";

export default function SidebarSettings() {
  return (
    <SettingsConsumer>
      {(settings) => {
        return (
          <div>
            <h1 className="text-4xl font-bold mb-2">Sidebar</h1>
            <h2 className="font-semibold text-xl mt-4 mb-1">View</h2>
            <SettingsLine
              caption="Collapse sidebar"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  sidebarCollapsed: !settings.data.sidebarCollapsed,
                });
              }}
              condition={settings.data.sidebarCollapsed}
            />
            <h2 className="font-semibold text-xl mt-4 mb-1">Widgets</h2>
            <SettingsLine
              caption="Show greetings card"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  sidebarGreeting: !settings.data.sidebarGreeting,
                });
              }}
              condition={settings.data.sidebarGreeting}
            />
            <SettingsLine
              caption="Show calendar"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  sidebarCalendar: !settings.data.sidebarCalendar,
                });
              }}
              condition={settings.data.sidebarCalendar}
            />
            <SettingsLine
              caption="Show Pomodoro timer"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  sidebarPomodoro: !settings.data.sidebarPomodoro,
                });
              }}
              condition={settings.data.sidebarPomodoro}
            />
            <SettingsLine
              caption="Show pinned tasks"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  sidebarTasks: !settings.data.sidebarTasks,
                });
              }}
              condition={settings.data.sidebarTasks}
            />
            <SettingsLine
              caption="Show pinned sticky notes"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  sidebarNotes: !settings.data.sidebarNotes,
                });
              }}
              condition={settings.data.sidebarNotes}
            />
          </div>
        );
      }}
    </SettingsConsumer>
  );
}

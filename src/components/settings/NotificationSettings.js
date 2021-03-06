import React from "react";
import { SettingsConsumer } from "./SettingsContext";
import SettingsLine from "./SettingsLine";

export default function NotificationSettings() {
  return (
    <SettingsConsumer>
      {(settings) => {
        return (
          <div>
            <h1 className="text-4xl font-bold mb-4">Notifications</h1>
            <h2 className="font-semibold text-xl mb-1">Apps</h2>
            <SettingsLine
              caption="Show notifications"
              condition={settings.data.notificationShow}
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  notificationShow: !settings.data.notificationShow,
                });
              }}
            />
            <SettingsLine
              caption="Task notifications"
              condition={settings.data.notificationTasks}
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  notificationTasks: !settings.data.notificationTasks,
                });
              }}
            />
            <SettingsLine
              caption="Pomodoro timer notifications"
              condition={settings.data.notificationPomodoro}
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  notificationPomodoro: !settings.data.notificationPomodoro,
                });
              }}
            />
            <SettingsLine
              caption="Event notifications"
              condition={settings.data.notificationEvent}
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  notificationEvent: !settings.data.notificationEvent,
                });
              }}
            />
          </div>
        );
      }}
    </SettingsConsumer>
  );
}

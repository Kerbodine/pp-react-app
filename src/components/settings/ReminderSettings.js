import React from "react";
import { SettingsConsumer } from "./SettingsContext";
import SettingsLine from "./SettingsLine";

export default function ReminderSettings() {
  return (
    <SettingsConsumer>
      {(settings) => {
        return (
          <>
            <h1 className="text-4xl font-bold mb-4">Reminders</h1>
            <h2 className="font-semibold text-xl mb-1">Categories</h2>
            <SettingsLine
              caption="Show my day category"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  remindersToday: !settings.data.remindersToday,
                });
              }}
              condition={settings.data.remindersToday}
            />
            <SettingsLine
              caption="Show priority category"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  remindersImportant: !settings.data.remindersImportant,
                });
              }}
              condition={settings.data.remindersImportant}
            />
            <SettingsLine
              caption="Show starred category"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  remindersStarred: !settings.data.remindersStarred,
                });
              }}
              condition={settings.data.remindersStarred}
            />
            <SettingsLine
              caption="Show pinned tasks category"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  remindersPinned: !settings.data.remindersPinned,
                });
              }}
              condition={settings.data.remindersPinned}
            />
            <SettingsLine
              caption="Show all tasks category"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  remindersAll: !settings.data.remindersAll,
                });
              }}
              condition={settings.data.remindersAll}
            />
          </>
        );
      }}
    </SettingsConsumer>
  );
}

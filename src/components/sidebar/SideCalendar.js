import React from "react";
import Calendar from "react-calendar";
import { SettingsConsumer } from "../settings/SettingsContext";

export default function SideCalendar() {
  return (
    <SettingsConsumer>
      {(settings) => {
        return (
          <div
            className={`p-2 bg-primary-100 dark:bg-primary-800 rounded-2xl ${
              settings.sidebarCalendar ? "visible" : "hidden"
            }`}
          >
            <Calendar calendarType="US" view="month" />
          </div>
        );
      }}
    </SettingsConsumer>
  );
}

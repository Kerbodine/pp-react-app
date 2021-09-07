import React from "react";
import Calendar from "react-calendar";
import { SettingsConsumer } from "../settings/SettingsContext";

export default function SideCalendar() {
  return (
    <SettingsConsumer>
      {(settings) => {
        return (
          <div
            className={`p-2 w-64 flex justify-center bg-primary-100 dark:bg-primary-800 rounded-2xl ${
              settings.data.sidebarCalendar ? "visible" : "hidden"
            }`}
          >
            <Calendar calendarType="US" view="month" />
          </div>
        );
      }}
    </SettingsConsumer>
  );
}

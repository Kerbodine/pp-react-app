import React from "react";
import SettingsLine from "./SettingsLine";

export default function NotificationSettings() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Notifications</h1>
      <h2 className="font-semibold text-xl mb-1">Apps</h2>
      <SettingsLine caption="Task notifications" />
      <SettingsLine caption="Pomodoro timer notifications" />
      <SettingsLine caption="Event notifications" />
    </div>
  );
}

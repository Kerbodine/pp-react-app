import React from "react";
import { SettingsConsumer } from "./SettingsContext";
import SettingsLine from "./SettingsLine";

export default function GeneralSettings() {
  return (
    <SettingsConsumer>
      {(settings) => {
        return (
          <div>
            <h1 className="text-4xl font-bold mb-4">General</h1>
            <h2 className="font-semibold text-xl mb-1">Theme</h2>
            <SettingsLine
              caption="Use dark mode as default"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  darkMode: !settings.data.darkMode,
                });
              }}
              condition={settings.data.darkMode}
            />
          </div>
        );
      }}
    </SettingsConsumer>
  );
}

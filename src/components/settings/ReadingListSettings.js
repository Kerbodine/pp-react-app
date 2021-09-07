import React from "react";
import { SettingsConsumer } from "./SettingsContext";
import SettingsLine from "./SettingsLine";

export default function ReadingListSettings() {
  return (
    <SettingsConsumer>
      {(settings) => {
        return (
          <>
            <h1 className="text-4xl font-bold mb-4">Reading List</h1>
            <h2 className="font-semibold text-xl mb-1">Categories</h2>
            <SettingsLine
              caption="Show in progress category"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  readingProgress: !settings.data.readingProgress,
                });
              }}
              condition={settings.data.readingProgress}
            />
            <SettingsLine
              caption="Show completed category"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  readingComplete: !settings.data.readingComplete,
                });
              }}
              condition={settings.data.readingComplete}
            />
            <SettingsLine
              caption="Show book type category"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  readingType: !settings.data.readingType,
                });
              }}
              condition={settings.data.readingType}
            />
            <SettingsLine
              caption="Show favorites category"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  readingFavorite: !settings.data.readingFavorite,
                });
              }}
              condition={settings.data.readingFavorite}
            />
            <SettingsLine
              caption="Show all books category"
              onClick={() => {
                settings.setData({
                  ...settings.data,
                  readingAll: !settings.data.readingAll,
                });
              }}
              condition={settings.data.readingAll}
            />
          </>
        );
      }}
    </SettingsConsumer>
  );
}

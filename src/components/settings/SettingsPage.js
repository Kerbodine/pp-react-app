import React from "react";
import SettingsLine from "./SettingsLine";

export default function SettingsPage() {
  return (
    <div className="h-screen w-full bg-primary dark:bg-primary-900 flex md:pr-4 py-4 lg:pr-0">
      <div className="bg-primary-100 dark:bg-primary-800 rounded-2xl w-full h-full flex flex-col overflow-hidden text-black dark:text-white">
        <div className="w-full h-12 bg-primary-300 dark:bg-primary-600 flex justify-center items-end">
          {/* <h2 className="mb-0.5 text-lg font-bold ">SETTINGS</h2> */}
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <div className="mt-4 flex flex-col gap-4">
            <div>
              <h2 className="font-semibold text-xl">Theme</h2>
              <SettingsLine title="Theme" caption="Dark mode" />
              <SettingsLine title="Theme" caption="Dark mode" />
            </div>
            <div>
              <h2 className="font-semibold text-xl">Theme</h2>
              <SettingsLine title="Theme" caption="Dark mode" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

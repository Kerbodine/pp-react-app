import React from "react";
import { UserConsumer } from "../../UserContext";
import { SettingsConsumer } from "../settings/SettingsContext";

export default function SideGreeting() {
  return (
    <UserConsumer>
      {(user) => {
        return (
          <SettingsConsumer>
            {(settings) => {
              return (
                <div
                  className={`w-64 h-auto bg-primary-100 dark:bg-primary-800 rounded-2xl flex ${
                    settings.sidebarGreeting ? "visible" : "hidden"
                  }`}
                >
                  <div className="my-4">
                    <p className="mx-4 text-xl">Hello,</p>
                    <p className="mx-4 text-3xl font-bold">
                      {user.userData.username}
                    </p>
                  </div>
                  <div className="w-16 h-16 ml-auto my-auto mr-4 rounded-full bg-accent-400"></div>
                </div>
              );
            }}
          </SettingsConsumer>
        );
      }}
    </UserConsumer>
  );
}

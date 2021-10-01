import React from "react";
import { UserConsumer } from "../../UserContext";
import { SettingsConsumer } from "../settings/SettingsContext";

export default function SideGreeting() {
  let message;
  var today = new Date();
  let time = today.getHours();
  if (time < 12) {
    message = "Good morning,";
  } else if (time < 18) {
    message = "Good afternoon,";
  } else {
    message = "Good evening,";
  }

  return (
    <UserConsumer>
      {(user) => {
        return (
          <SettingsConsumer>
            {(settings) => {
              return (
                <div
                  className={`w-64 h-auto bg-primary-100 dark:bg-primary-800 rounded-2xl flex ${
                    settings.data.sidebarGreeting ? "visible" : "hidden"
                  }`}
                >
                  <div className="my-4">
                    <p className="mx-4 text-lg text-primary-500 dark:text-primary-400">
                      {message}
                    </p>
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

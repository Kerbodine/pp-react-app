import React from "react";
import { UserConsumer } from "../../UserContext";

export default function SideGreeting() {
  return (
    <UserConsumer>
      {(user) => {
        return (
          <div className="w-full h-auto bg-primary-100 dark:bg-primary-800 rounded-2xl flex">
            <div className="my-4">
              <p className="mx-4 text-xl">Hello,</p>
              <p className="mx-4 text-3xl font-bold">{user.username}</p>
            </div>
            <div className="w-16 h-16 ml-auto my-auto mr-4 rounded-full bg-accent-400"></div>
          </div>
        );
      }}
    </UserConsumer>
  );
}

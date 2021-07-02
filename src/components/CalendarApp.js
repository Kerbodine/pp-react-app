import React from "react";

import PageCalendar from "./calendar/PageCalendar";

export default function CalendarApp() {
  return (
    <div className={"bg-red-200"}>
      <div>
      <PageCalendar />
        {/* <Calendar /> */}
      </div>
    </div>
  );
}

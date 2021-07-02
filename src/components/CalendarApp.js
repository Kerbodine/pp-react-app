import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarApp() {
  return (
    <div className={"bg-red-200"}>
      <h1>Calendar Page</h1>
      <div>
        <Calendar />
      </div>
    </div>
  );
}

import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function CalendarApp() {
  return (
    <div>
      <h1>Calendar Page</h1>
      <div style={{ marginLeft: "100px", marginRight: "100px"}}>
        <Calendar />
      </div>
    </div>
  )
}

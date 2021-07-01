import React from 'react'

import { Route, Switch } from "react-router-dom";

import Dashboard from "./Dashboard";
import Profile from "./Profile";
import CalendarApp from "./CalendarApp";
import Reminders from "./Reminders";
import Notes from "./Notes";
import Tools from "./Tools";
import Settings from "./Settings";

export default function MainContent() {
  return (
    <div>
      <Route>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/calendar">
            <CalendarApp />
          </Route>
          <Route path="/reminders">
            <Reminders />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/tools">
            <Tools />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Route>
    </div>
  )
}

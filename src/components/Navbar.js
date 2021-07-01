import React from "react";
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { MdDashboard, MdAccountBox } from "react-icons/md";
import { BiCalendar, BiCheckSquare, BiNote, BiWrench } from "react-icons/bi";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Calendar from "./Calendar";
import Reminders from "./Reminders";
import Notes from "./Notes";
import Tools from "./Tools";
import Settings from "./Settings";

export default function Navbar() {
  const iconStyles = {
    color: "white",
    fontSize: "2em",
    verticalAlign: "middle",
  };

  return (
    <div>
      <Router>
        <Route
          render={({ location, history }) => (
            <React.Fragment>
              <SideNav
                onSelect={(selected) => {
                  const to = selected;
                  if (location.pathname !== to) {
                    history.push(to);
                  }
                }}
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="/">
                  <NavItem eventKey="/">
                    <NavIcon>
                      <i>
                        <MdDashboard style={iconStyles} />
                      </i>
                    </NavIcon>
                    <NavText>Home</NavText>
                  </NavItem>
                  <NavItem eventKey="/profile">
                    <NavIcon>
                      <i>
                        <MdAccountBox style={iconStyles} />
                      </i>
                    </NavIcon>
                    <NavText>Profile</NavText>
                  </NavItem>
                  <NavItem eventKey="/calendar">
                    <NavIcon>
                      <i>
                        <BiCalendar style={iconStyles} />
                      </i>
                    </NavIcon>
                    <NavText>Calendar</NavText>
                  </NavItem>
                  <NavItem eventKey="/reminders">
                    <NavIcon>
                      <i>
                        <BiCheckSquare style={iconStyles} />
                      </i>
                    </NavIcon>
                    <NavText>Reminders</NavText>
                  </NavItem>
                  <NavItem eventKey="/notes">
                    <NavIcon>
                      <i>
                        <BiNote style={iconStyles} />
                      </i>
                    </NavIcon>
                    <NavText>Notes</NavText>
                  </NavItem>
                  <NavItem eventKey="/tools">
                    <NavIcon>
                      <i>
                        <BiWrench style={iconStyles} />
                      </i>
                    </NavIcon>
                    <NavText>Tools</NavText>
                  </NavItem>
                </SideNav.Nav>
              </SideNav>
              <main>
                <Switch>
                  <Route exact path="/">
                    <Dashboard />
                  </Route>
                  <Route path="/profile">
                    <Profile />
                  </Route>
                  <Route path="/calendar">
                    <Calendar />
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
              </main>
            </React.Fragment>
          )}
        />
      </Router>
    </div>
  );
}

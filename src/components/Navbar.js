import React from "react";
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "./Navbar.css"
import { MdDashboard, MdAccountBox } from "react-icons/md";
import { BiCalendar, BiCheckSquare, BiNote, BiWrench } from "react-icons/bi";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainContent from "./MainContent";

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
              <div className="app-grid">
                <div className="main-nav">
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
                          <i><MdDashboard style={iconStyles} title="Dashboard"/></i>
                        </NavIcon>
                        <NavText>Dashboard</NavText>
                      </NavItem>
                      <NavItem eventKey="/profile">
                        <NavIcon>
                          <i><MdAccountBox style={iconStyles} /></i>
                        </NavIcon>
                        <NavText>Profile</NavText>
                      </NavItem>
                      <NavItem eventKey="/calendar">
                        <NavIcon>
                          <i><BiCalendar style={iconStyles} /></i>
                        </NavIcon>
                        <NavText>Calendar</NavText>
                      </NavItem>
                      <NavItem eventKey="/reminders">
                        <NavIcon>
                          <i><BiCheckSquare style={iconStyles} /></i>
                        </NavIcon>
                        <NavText>Reminders</NavText>
                      </NavItem>
                      <NavItem eventKey="/notes">
                        <NavIcon>
                          <i><BiNote style={iconStyles} /></i>
                        </NavIcon>
                        <NavText>Notes</NavText>
                      </NavItem>
                      <NavItem eventKey="/tools">
                        <NavIcon>
                          <i><BiWrench style={iconStyles} /></i>
                        </NavIcon>
                        <NavText>Tools</NavText>
                      </NavItem>
                    </SideNav.Nav>
                  </SideNav>
                </div>
                <MainContent className="main-content"/>
              </div>
            </React.Fragment>
          )}
        />
      </Router>
    </div>
  );
}

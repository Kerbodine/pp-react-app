import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import CalendarApp from "./components/CalendarApp";
import Reminders from "./components/Reminders";
import Notes from "./components/Notes";
import Tools from "./components/Tools";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <div>
            <Route path="/" exact component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/calendar" component={CalendarApp} />
            <Route path="/reminders" component={Reminders} />
            <Route path="/notes" component={Notes} />
            <Route path="/tools" component={Tools} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//import Nav from "./components/Nav";
//import Signup from "./Pages/Signup";
//import Login from "./Pages/Login";
//import Dashboard from "./Pages/Dashboard";


function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </Router>
);
}

export default App;

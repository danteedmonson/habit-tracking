import "./App.css";
import React from 'react';
import "@fontsource/roboto";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Router>
          <Switch>
            <Route path ="/" exact>
              <LoginPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

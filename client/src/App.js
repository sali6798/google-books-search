import React from 'react';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav"
import Jumbotron from "./components/Jumbotron"
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="uk-container">
        <Jumbotron />
        <div className="results-container">
          <Switch>
            <Route exact path="/saved" component={Saved} />
            <Route exact path="*" component={Search} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

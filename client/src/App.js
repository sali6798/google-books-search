import React from 'react';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          {/* <Route exact path={["/", "/books"]} component={Books} /> */}
          <Route exact path="/saved" component={Saved} />
          <Route exact path="*" component={Search} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

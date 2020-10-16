import React, { Component } from "react";
import HeaderNav from "./HeaderNav";
import LandingPage from "./LandingPage";
import PrototyperPage from "./PrototyperPage";
import { ObjectContextProvider } from "./ObjectContextProvider";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "../styles.scss";

export default class App extends Component {
  render() {
    return (
      <ObjectContextProvider>
        <BrowserRouter>
          <div className='main-container'>
            <header>
              <HeaderNav />
            </header>
            <main>
              <Switch>
                <Route exact path='/'>
                  <LandingPage />
                </Route>
                <Route path='/prototyper'>
                  <PrototyperPage />
                </Route>
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </ObjectContextProvider>
    );
  }
}

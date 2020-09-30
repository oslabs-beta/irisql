import React, { Component } from 'react';
import HeaderNav from './HeaderNav';
import LandingPage from './LandingPage';
import PrototyperPage from './PrototyperPage';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
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
      
    )
  }
}



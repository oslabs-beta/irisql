import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import HeaderNav from './HeaderNav';
import LandingPage from './LandingPage';
import PrototyperPage from './PrototyperPage';
import { ObjectContextProvider } from './ObjectContextProvider';
import '../styles.scss';

export default function App() {
  return (
    <ObjectContextProvider>
      <BrowserRouter>
        <div className="main-container">
          <header>
            <HeaderNav />
          </header>
          <main>
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/prototyper">
                <PrototyperPage />
              </Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </ObjectContextProvider>
  );
}

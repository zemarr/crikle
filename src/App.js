import React from 'react';
import './App.css';

import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavigationProvider } from './Context/NavigationContext';
import {withTheme} from './Context/ScrollContext'

function App(props) {
  console.log(props)
  return (
    <NavigationProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/register' component={Register} />
          </Switch>
        </Router>
      </div>
    </NavigationProvider>
  );
}

export default withTheme(App);

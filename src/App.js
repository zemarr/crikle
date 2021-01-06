import React from 'react';
import './App.css';

import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Chat from './Pages/Chat/Chat';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faUser, faSearch, faAngleLeft } from '@fortawesome/free-solid-svg-icons'


import { NavigationProvider } from './Context/NavigationContext';
import { withTheme } from './Context/ScrollContext';
import { UserProvider } from './Context/UserContext';

const App = (props) => {
  console.log(props)
  return (
    <NavigationProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <UserProvider>
              <Route path='/register' component={Register} />
              <Route path='/chat' component={Chat} />
            </UserProvider>
          </Switch>
        </Router>
      </div>
    </NavigationProvider>
  );
}

library.add(fas, faUser, faSearch, faAngleLeft)

export default withTheme(App);

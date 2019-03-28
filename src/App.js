import React, { Component } from 'react';
import {Switch} from 'react-router-dom'

// Bootstrap JS
import 'bootstrap/js/dist/collapse';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

//  Components
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar'

// Pages
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';

import AuthProvider from './providers/AuthProvider';


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Navbar />
        <div className="container">
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;

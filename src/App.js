import React, { Component } from 'react';
import { Switch } from 'react-router-dom'

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
import Profile from './pages/Profile';

import AuthProvider from './providers/AuthProvider';

// Context
const Context = React.createContext();
export const Consumer = Context.Consumer


class App extends Component {
  state = {
    favorites: [],
  }

  handleAddToFavorite = (trip) => {
    this.setState(
      { favorites: [...this.state.favorites, trip] }
    )
  }

  handleRemoveFromFavorite = (updatedFavoriteList) => {
    this.setState(
      { favorites: [...updatedFavoriteList] }
    )
  }

  render() {
    return (
      <AuthProvider>
        <Context.Provider
          value={
            {
              favorites: this.state.favorites,
              addToFavorite: this.handleAddToFavorite,
              removeFromFavorite: this.handleRemoveFromFavorite
            }
          }
        >
          <Navbar />
          <div className="container">
            <Switch>
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute path="/private" component={Private} />
              <PrivateRoute path="/profile" component={Profile} />
            </Switch>
          </div>
        </Context.Provider>
      </AuthProvider>
    )
  }
}

export default App;

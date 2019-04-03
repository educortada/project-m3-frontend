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
import Start from './pages/Start';
import Favorite from './pages/Favorite';

import firebase from 'firebase';

import AuthProvider from './providers/AuthProvider';
import favoritesService from './lib/favorite-service';

// Context
const Context = React.createContext();
export const Consumer = Context.Consumer

// Firebase
const config = {
  apiKey: "AIzaSyAa6Y4zK9Fc3UdzuoXxUHfsGzCFVxuUQ5I",
  authDomain: "project-m3-322bd.firebaseapp.com",
  databaseURL: "https://project-m3-322bd.firebaseio.com",
  projectId: "project-m3-322bd",
  storageBucket: "project-m3-322bd.appspot.com",
  messagingSenderId: "80833003080"
}
firebase.initializeApp(config)

class App extends Component {
  state = {
    favorites: [],
  }

  componentDidMount = async () => {
    const favorites = await favoritesService.getFavorites()
    this.setState({ favorites })
  }

  handleAddToFavorite = async () => {
    const favorites = await favoritesService.getFavorites()
    this.setState({ favorites })
  }

  handleRemoveFromFavorite = async () => {
    const favorites = await favoritesService.getFavorites()
    this.setState({ favorites })
  }

  render() {
    return (
      <AuthProvider>
        <Context.Provider
          value={
            {
              favorites: this.state.favorites,
              addToFavorite: this.handleAddToFavorite,
              removeFromFavorite: this.handleRemoveFromFavorite,
            }
          }
        >
          <Navbar favoriteIdDetail={this.state.favoriteIdDetail} />
          <div className="container">
            <Switch>
              <AnonRoute exact path="/" component={Start} />
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute path="/home" component={Private} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/favorite/:id" component={Favorite} />
            </Switch>
          </div>
        </Context.Provider>
      </AuthProvider>
    )
  }
}

export default App;

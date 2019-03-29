import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

// Componrnts
import FavoritesNavbar from './FavoritesNavbar'
import ProfileNavbar from './ProfileNavbar'

class Navbar extends Component {
  render() {
    const { isLogged, logout } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-light-primary fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01">
          <span className="navbar-toggler-icon"></span>
        </button>
          {
          (isLogged) ?
          <React.Fragment>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link to='/private' className="nav-link">Home</Link>
                </li>
                <li className="nav-item active">
                  <button onClick={logout} className="nav-link">Logout</button>
                </li>
              </ul>
            </div>
            <div className="btn-group navbar-right-fixed">
              <FavoritesNavbar />
              <ProfileNavbar />
            </div>

          </React.Fragment>
          :
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link to='/' className="nav-link">Home</Link>
              </li>
              <li className="nav-item active">
                <Link to='/login' className="nav-link">Login</Link>
              </li>
              <li className="nav-item active">
                <Link to='/signup' className="nav-link">Signup</Link>
              </li>
            </ul>
          </div>
          }
      </nav>
    )
  }
}

export default withAuth(Navbar)
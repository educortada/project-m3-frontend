import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

// Componrnts
import FavoritesNavbar from './FavoritesNavbar'

class Navbar extends Component {
  render() {
    const { isLogged, logout } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-light-primary fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {
              (isLogged) ?
                <React.Fragment>
                  <li className="nav-item active">
                    <Link to='/private' className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item active">
                    <button onClick={logout} className="nav-link">Logout</button>
                  </li>
                </React.Fragment>
                :
                <React.Fragment>
                  <li className="nav-item active">
                    <Link to='/' className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item active">
                    <Link to='/login' className="nav-link">Login</Link>
                  </li>
                  <li className="nav-item active">
                    <Link to='/signup' className="nav-link">Signup</Link>
                  </li>
                </React.Fragment>
            }
          </ul>
        </div>
        <FavoritesNavbar />
      </nav>
    )
  }
}

export default withAuth(Navbar)
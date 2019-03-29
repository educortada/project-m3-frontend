import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class ProfileNavbar extends Component {
  render() {
    return (
      <Link to='/profile' className="btn btn-link btn-profile">
        <i className="fas fa-user-circle"></i>
      </Link>
    )
  }
}

export default ProfileNavbar

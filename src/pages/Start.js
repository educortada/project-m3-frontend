import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Start extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1 className="display-4">Flight Finder!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <div className="btns-group">
            <Link to='/signup' className="btn btn-primary">Signup</Link>
            <Link to='/login' className="btn btn-outline-primary">Login</Link>
          </div>
        </div>
      </React.Fragment>
        )
      }
    }
    
    export default Start

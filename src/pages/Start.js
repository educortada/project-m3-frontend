import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Start extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1 className="display-4">Flight Finder!</h1>
          <p className="lead">Find the cheapest flights from spain to some amazing european cities.</p>
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

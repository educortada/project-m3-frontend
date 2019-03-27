import React, { Component } from 'react'

export class Button extends Component {
  render() {
    return (
      <button className="btn btn-primary btn-is-rounded btn-block">{this.props.children}</button>
    )
  }
}

export default Button

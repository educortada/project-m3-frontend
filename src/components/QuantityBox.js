import React, { Component } from 'react'

class QuantityBox extends Component {

  state = {
    adults: 0,
  }

  handleOnDecrement = async () => {
    if (this.state.adults > 0) {
      await this.setState({
        adults: this.state.adults - 1
      })
      this.props.adults(this.state.adults)
    }
  }

  handleOnIncrement = async () => {
    await this.setState({
      adults: this.state.adults + 1
    })
    this.props.adults(this.state.adults)
  }

  render() {
    return (
      <div className="qty-box">
        <span className="dec" onClick={this.handleOnDecrement}>–</span>
        <span className="qty">{this.state.adults}</span>
        <span className="inc" onClick={this.handleOnIncrement}>+</span>
      </div>
    )
  }
}

export default QuantityBox


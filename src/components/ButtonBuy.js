import React, { Component } from 'react'
import tripService from '../lib/trip-service'

export class ButtonBuy extends Component {

  state = {
    isBought: false,
  }

  handleClickBuy = async () => {
    await tripService.createTrip(this.props.flight)
    this.setState({
      isBought: true
    })
  }

  render() {
    return (
      <div>
        {(this.state.isBought)
          ? <button className="btn btn-is-success"><i class="fas fa-plane-departure"></i>Bought</button>
          : <button className="btn btn-primary" onClick={this.handleClickBuy} ><i className="fas fa-shopping-cart"></i>Buy</button>}
      </div>
    )
  }
}

export default ButtonBuy

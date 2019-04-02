import React, { Component } from 'react'
import tripService from '../lib/trip-service'

export class ButtonBuy extends Component {

  state = {
    isBought: false,
  }

  handleClickBuy = async () => {
    try {
      await tripService.createTrip(this.props.flight, this.props.adults, this.props.photoCity)
      this.setState({
        isBought: true
      })

    } catch (error) {
      console.log(error);      
    }
  }

  render() {
    return (
      <div>
        {(this.state.isBought)
          ? <button className="btn btn-wide btn-is-success"><i className="fas fa-plane-departure"></i>Bought</button>
          : <button className="btn btn-primary btn-wide" onClick={this.handleClickBuy} ><i className="fas fa-shopping-cart"></i>Buy</button>}
      </div>
    )
  }
}

export default ButtonBuy

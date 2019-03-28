import React, { Component } from 'react'

import flightsService from '../lib/flights-service'

// Component
import Card from '../components/Card'

export class List extends Component {

  state = {
    status: 'isLoading',
    flights: [],
  }
  componentDidMount = async () => {
    try {
      const api = await flightsService.getAllFlightsFrom(this.props.departureCity)
      this.setState(
        {
          flights: api.data,
          status: 'isLoaded',
        }
      )
      console.log(this.state.flights);

    } catch (error) {
      this.setState({
        status: 'hasError',
      })
      console.log(error)
    }
  }

  render() {
    const { status } = this.state

    switch (status) {
      case 'isLoading':
        return <p>Loading...</p>
      case 'isLoaded':
        return (
          <React.Fragment>
            <h3>Flights from {this.state.flights[0].cityFrom}</h3>
            {
              this.state.flights.map(flight => (
                <Card key={flight.id} data={flight} />
              ))
            }
          </React.Fragment>
        )
      case 'hasError':
        return 'Error!'
      default:
        break
    }
  }
}

export default List

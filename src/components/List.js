import React, { Component } from 'react'

import flightsService from '../lib/flights-service'

// Component
import Card from '../components/Card'

export class List extends Component {

  state = {
    status: 'isLoading',
    flights: [],
    adults: 0
  }
  componentDidMount = async () => {
    try {
      const api = await flightsService.getAllFlightsFrom()
      this.setState(
        {
          flights: api.data,
          adults: api.search_params.seats.adults,
          status: 'isLoaded',
        }
      )
      console.log(api)

    } catch (error) {
      this.setState({
        status: 'hasError',
      })
      console.log(error)
    }
  }

  handleShowList = () => {
    this.props.handleList(false)
  }

  render() {
    const { status } = this.state

    switch (status) {
      case 'isLoading':
        return <p>Loading...</p>
      case 'isLoaded':
        return (
          <React.Fragment>
            <button onClick={this.handleShowList} className="btn btn-link">
              <i className="fas fa-angle-left"></i> Go back
            </button>
            <h3>Flights from {this.state.flights[0].cityFrom}</h3>
            {
              this.state.flights.map(flight => (
                <Card key={flight.id} data={flight} adults={this.state.adults} />
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

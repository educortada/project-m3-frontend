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
        return(
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )
      case 'isLoaded':
        return (
          <React.Fragment>
            <button onClick={this.handleShowList} className="btn btn-link">
              <i className="fas fa-angle-left"></i> Go back
            </button>
            { 
              (this.state.flights.length)
              ? <h3>Flights from {this.state.flights[0].cityFrom}</h3> 
              : <div className="alert alert-danger" role="alert">Error! check your dates</div> 
            }
            {
              this.state.flights.map(flight => (
                <Card key={flight.id} data={flight} adults={this.state.adults} />
              ))
            }
          </React.Fragment>
        )
      case 'hasError':
        return (
          <React.Fragment>
            <button onClick={this.handleShowList} className="btn btn-link">
              <i className="fas fa-angle-left"></i> Go back
            </button>
            <div className="alert alert-danger" role="alert">Error! check your search fields</div>
          </React.Fragment>
        )
      default:
        break
    }
  }
}

export default List

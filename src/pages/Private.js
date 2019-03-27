import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';

import flightsService from '../lib/flights-service'
// import convertTime from '../helpers/index'

// Components
import Card from '../components/Card'

class Private extends Component {
  state = {
    status: 'isLoading',
    flights: [],
  }
  componentDidMount = async () => {
    try {
      const api = await flightsService.getAll()
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

  handleRenderList = () => {
    return (
      this.state.flights.map(flight => (
        <Card key={flight.id} data={flight} />
      ))
    )
  }

  render() {
    const { user } = this.props
    const { status } = this.state

    switch (status) {
      case 'isLoading':
        return <p>Is loading</p>
      case 'isLoaded':
        return (
          <React.Fragment>
            <h1>Welcome {user.username}</h1>
            {this.handleRenderList()}
          </React.Fragment>
        )
      case 'hasError':
        return 'Error!'
      default:
        break
    }
  }
}

export default withAuth(Private);
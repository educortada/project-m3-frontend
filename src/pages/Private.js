import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';

// Components
import Search from '../components/Search'
import List from '../components/List'

class Private extends Component {
  state = {
    isDestinatons: false,
    departureCity: '',
  }

  handleList = (boolean) => {
    this.setState({
      isDestinatons: boolean
    })
  }

  handleDepartureCity = (city) => {
    this.setState({
      departureCity: city
    })
  }

  render() {

    return (
      (this.state.isDestinatons) 
      ? <React.Fragment>
          {/* <Search list={this.handleList} /> */}
          <List departureCity={this.state.departureCity} /> 
        </React.Fragment>
      : <Search handleList={this.handleList} handleDepartureCity={this.handleDepartureCity} />
    )
  }
}

export default withAuth(Private);
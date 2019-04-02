import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';

// Components
import Search from '../components/Search'
import List from '../components/List'

class Private extends Component {
  state = {
    isShowFlights: false,
    departureCity: '',
  }

  handleList = (boolean) => {
    this.setState({
      isShowFlights: boolean
    })
  }

  render() {
    return (
      (this.state.isShowFlights)
        ? <List handleList={this.handleList} departureCity={this.state.departureCity} />
        : <Search handleList={this.handleList} />
    )
  }
}

export default withAuth(Private);
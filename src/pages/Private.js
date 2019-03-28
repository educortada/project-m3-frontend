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

  render() {
    return (
      (this.state.isDestinatons)
        ? <List departureCity={this.state.departureCity} />
        : <Search handleList={this.handleList} />
    )
  }
}

export default withAuth(Private);
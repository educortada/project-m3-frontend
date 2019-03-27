import React, { Component } from 'react'

// Components
import Button from '../components/Button'

export class Search extends Component {
  state = {
    departureCity: '',
  }

  handleChange = (event) => {
    this.setState(
      { [event.target.name]: event.target.value }
    )
  }

  handleFormSubmit = () => {
    this.props.handleDepartureCity(this.state.departureCity)
    this.props.handleList(true)
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <input
            onChange={this.handleChange}
            className="form-control"
            type="text"
            name="departureCity"
            placeholder="Departure"
            value={this.state.departureCity} />
        </div>
        <Button>Search</Button>
      </form>
    )
  }
}

export default Search

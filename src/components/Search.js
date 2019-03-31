import React, { Component } from 'react'
import flightsService from '../lib/flights-service'
import moment from 'moment';

//CSS
import 'react-datepicker/dist/react-datepicker.css'

// Bootstrap JS
import 'bootstrap/js/dist/dropdown'

// Components
import DatePicker from 'react-datepicker'
import QuantityBox from './QuantityBox'


export class Search extends Component {
  state = {
    departureCity: '',
    startDate: new Date(),
    endDate: new Date(),
    adults: 0,
  }

  handleChange = (event) => {
    this.setState({
      departureCity: event.target.value,
    })
  }

  handleFormSubmit = () => {

    const dateFrom = new Date(this.state.startDate)
    flightsService.dateFrom = moment(dateFrom).format("DD/MM/YYYY")

    const dateTo = new Date(this.state.endDate)
    flightsService.dateTo = moment(dateTo).format("DD/MM/YYYY")

    flightsService.departureCity = this.state.departureCity
    flightsService.adults = this.state.adults
    this.props.handleList(true)
  }

  handleChangeDateFrom = (date) => {
    this.setState({
      startDate: date
    })
  }

  handleChangeDateTo = (date) => {
    this.setState({
      endDate: date
    })
  }

  handleQuantity = (quantity) => {
    this.setState({
      adults: quantity
    })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="search-flight">
        <select onChange={this.handleChange} className="custom-select" value={this.state.departureCity}>
          <option value="selected">Departure city</option>
          <option value="BCN">Barcelona</option>
          <option value="MAD">Madrid</option>
          <option value="BIO">Bilbao</option>
          <option value="VLC">Valencia</option>
          <option value="AGP">Malaga</option>
          <option value="SVQ">Sevilla</option>
        </select>
        <span>From:</span>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChangeDateFrom}
          className="date-picker custom-select"
        />
        <span>To:</span>
        <DatePicker
          selected={this.state.endDate}
          onChange={this.handleChangeDateTo}
          className="date-picker custom-select"
        />
        <span>Travellers:</span>
        <QuantityBox adults={this.handleQuantity} />
        <button className="btn btn-primary">Search</button>
      </form>
    )
  }
}

export default Search
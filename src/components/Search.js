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
    startFrom: new Date(),
    startTo: new Date(),
    returnFrom: new Date(),
    returnTo: new Date(),
    adults: 0,
  }

  handleChange = (event) => {
    this.setState({
      departureCity: event.target.value,
    })
  }

  handleFormSubmit = () => {

    const startFrom = new Date(this.state.startFrom)
    flightsService.startFrom = moment(startFrom).format("DD/MM/YYYY")

    const startTo = new Date(this.state.startTo)
    flightsService.startTo = moment(startTo).format("DD/MM/YYYY")

    const returnFrom = new Date(this.state.returnFrom)
    flightsService.returnFrom = moment(returnFrom).format("DD/MM/YYYY")
    
    const returnTo = new Date(this.state.returnTo)
    flightsService.returnTo = moment(returnTo).format("DD/MM/YYYY")

    console.log(flightsService.startFrom);
    console.log(flightsService.startTo);
    console.log(flightsService.returnFrom);
    console.log(flightsService.returnTo);

    flightsService.departureCity = this.state.departureCity
    flightsService.adults = this.state.adults
    this.props.handleList(true)
  }

  handleChangeStartFrom = (date) => {
    this.setState({
      startFrom: date
    })
  }

  handleChangeStartTo = (date) => {
    this.setState({
      startTo: date
    })
  }

  handleChangeReturnFrom = (date) => {
    this.setState({
      returnFrom: date
    })
  }

  handleChangeReturnTo = (date) => {
    this.setState({
      returnTo: date
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
        <span>Date from</span>
        <DatePicker
          selected={this.state.startFrom}
          onChange={this.handleChangeStartFrom}
          className="date-picker custom-select"
        />
        <span>Date to</span>
        <DatePicker
          selected={this.state.startTo}
          onChange={this.handleChangeStartTo}
          className="date-picker custom-select"
        />
        <span>Return from</span>
        <DatePicker
          selected={this.state.returnFrom}
          onChange={this.handleChangeReturnFrom}
          className="date-picker custom-select"
        />
        <span>Return to</span>
        <DatePicker
          selected={this.state.returnTo}
          onChange={this.handleChangeReturnTo}
          className="date-picker custom-select"
        />
        <span>Adults</span>
        <QuantityBox adults={this.handleQuantity} />
        <button className="btn btn-primary">Search</button>
      </form>
    )
  }
}

export default Search
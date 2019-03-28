import React, { Component } from 'react'

//CSS
import "react-datepicker/dist/react-datepicker.css";

// Bootstrap JS
import 'bootstrap/js/dist/dropdown'

// Components
import Button from '../components/Button'
import DatePicker from "react-datepicker";


export class Search extends Component {
  state = {
    departureCity: '',
    startDate: new Date()
  }

  handleChange = (event) => {
    this.setState({
      departureCity: event.target.value,
    })
  }

  handleFormSubmit = () => {
    this.props.handleDepartureCity(this.state.departureCity)
    this.props.handleList(true)
  }

  handleChangeDate = (date) => {
    console.log(date);
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <select onChange={this.handleChange} className="custom-select" value={this.state.departureCity}>
          <option value="selected">Departure city</option>
          <option value="BCN">Barcelona</option>
          <option value="MAD">Madrid</option>
          <option value="BIO">Bilbao</option>
          <option value="VLC">Valencia</option>
          <option value="AGP">Malaga</option>
          <option value="SVQ">Sevilla</option>
        </select>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChangeDate}
        />
        <Button>Search</Button>
      </form>
    )
  }
}

export default Search
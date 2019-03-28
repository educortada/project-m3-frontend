import axios from 'axios';

class FlightsService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.skypicker.com'
    });
    this.dateFrom = ''
    this.dateTo = ''
    this.departureCity = ''
  }

  getAllFlightsFrom = () => {
    return this.api.get(`/flights?&fly_from=${this.departureCity}&fly_to=LGW,CDG,FCO,BER,AMS,MUC,OPO,ATH,JFK,HND,LAX&date_from=${this.dateFrom}&date_to=${this.dateTo}&sort=quality&one_for_city=1`)
      .then(({ data }) => data)
  }
}

const flightsService = new FlightsService();

export default flightsService;

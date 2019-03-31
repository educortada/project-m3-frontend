import axios from 'axios';

class PlacesService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+barcelona&key=AIzaSyDsEByxBnrnhpBaH8ZCuEIPQZP8jRIWaVw'
    })
  }

  getPlaces = () => {
    return this.api.get('')
      .then(({ data }) => console.log(data))
  }
}

const placesService = new PlacesService();

export default placesService;
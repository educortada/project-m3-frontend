import axios from 'axios';

class PlacesService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyAa6Y4zK9Fc3UdzuoXxUHfsGzCFVxuUQ5I&libaries=places',
      withCredentials: true
    })
  }

  getPlaces = () => {
    return this.api.get('')
      .then(({ data }) => console.log(data))
  }
}

const placesService = new PlacesService();

export default placesService;
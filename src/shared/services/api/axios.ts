import axios from 'axios';

export default axios.create({
  baseURL: 'https://truephone-api.herokuapp.com/',
  headers: {
    'Content-type': 'application/json'
  }
});

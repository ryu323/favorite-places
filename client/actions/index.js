import axios from 'axios'

const ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address';

export const ADD_ADDRESS = 'ADD_ADDRESS';

export function addAddress(address) {
  let parseAddress = address.split(' ').join('+');
  const url =`${ROOT_URL}=${parseAddress}`;

  const request = axios.get(url);

  return {
    type: ADD_ADDRESS,
    payload: request
  }
}

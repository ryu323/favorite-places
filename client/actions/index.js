import axios from 'axios'

export const ADD_ADDRESS = 'ADD_ADDRESS';

export function addAddress(address) {

  const request = axios.post('/api/addAddress', { address });

  return {
    type: ADD_ADDRESS,
    payload: address
  }
}

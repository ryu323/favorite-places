import { ADD_ADDRESS } from '../actions/index';

export default function(state = [], action) {
  console.log(action.payload);
  switch (action.type) {
    case ADD_ADDRESS:
      return [ ...state, action.payload.data.results[0] ];
  }
  return state;
}

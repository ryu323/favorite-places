import { combineReducers } from 'redux';
import AddressReducer from './AddressReducer';

const rootReducer = combineReducers({
  address: AddressReducer
});

export default rootReducer;

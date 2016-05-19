import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import AddressList from '../containers/AddressList';

export default class App extends Component {
  render() {
    return (
      <div>
        Hello World!
        <SearchBar />
        <AddressList />
      </div>
    );
  }
}

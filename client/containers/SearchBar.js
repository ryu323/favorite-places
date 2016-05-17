import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAddress } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addAddress(this.state.term);
    this.setState({ term: '' });
  }

  componentDidMount() {
    const input = document.getElementById('search-bar');
    const options = {
      types: [ 'geocode' ],
      componentRestrictions: { country: 'us' }
    };
    let autocomplete = new google.maps.places.Autocomplete(input, options);

    // allows user to hit Enter on dropdown location without triggering form submit
    let userIsTyping = true;
    google.maps.event.addDomListener(input, 'keydown', (event) => {
      if (event.keyCode === 13) {
        if (userIsTyping) {
          event.preventDefault();
        }
      } else {
        userIsTyping = true;
      }
    });

    autocomplete.addListener('place_changed', () => {
      userIsTyping = false;
      input.focus();

      // change later - set state using event.target if possible
      this.setState({ term: input.value });
    });

  }

  render() {

    return (
      <form onSubmit={ this.handleSubmit } className="input-group">
        <input
          placeholder="add an address"

          id="search-bar"
          className="form-control"
          value={ this.state.term }
          onChange={ this.handleChange } />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addAddress }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddressList extends Component {


  renderList() {
    return this.props.address.map((data) => {
      return (
        <li
          key={ data.place_id }
          className="list-group-item">{ data.formatted_address }
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }


}

function mapStateToProps({ address }) {
  return { address };
}

export default connect(mapStateToProps)(AddressList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {
  state = {
    newPerson: '',
  };

  clickAddPassenger = () => {
    this.props.dispatch({
      type: 'ADD_PASSENGER',
      payload: this.state.newPerson,
    });

    this.setState({
      newPerson: '',
    });
  };

  handleChange = (event) => {
    this.setState({
      newPerson: event.target.value,
    });
  };

  render() {
    const passengerList = this.props.store.passengerList.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
    return (
      <div>
        <h2>Passengers</h2>

        <input
          value={this.state.newPerson}
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={this.handleChange}
        />
        <button onClick={this.clickAddPassenger}>Add Passenger</button>

        <ul>{passengerList}</ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(Passengers);

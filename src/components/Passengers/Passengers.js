import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import { TextField } from 'material-ui';

import Box from '@material-ui/core/Box';
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
        <Typography variant="display2">Passengers</Typography>
        <Box m={3}>
          <TextField
            value={this.state.newPerson}
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={this.handleChange}
          />

          <Button variant="contained" onClick={this.clickAddPassenger}>
            Add Passenger
          </Button>
        </Box>
        <ul>{passengerList}</ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(Passengers);

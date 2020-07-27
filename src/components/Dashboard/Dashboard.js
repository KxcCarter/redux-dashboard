import React, { Component } from 'react';
import { connect } from 'react-redux';

// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>

        <p>
          <strong>{this.props.store.speedControl}</strong> lightyears per ...
          year?
        </p>
        <p>
          <strong>{this.props.store.passengerList.length}</strong> passengers on
          spaceship
        </p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(Dashboard);

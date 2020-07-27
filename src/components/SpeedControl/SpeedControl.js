import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {
  clickIncrease = () => {
    this.props.dispatch({
      type: 'INCREASE',
    });
  };

  clickDecrease = () => {
    this.props.dispatch({
      type: 'DECREASE',
    });
  };

  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={this.clickIncrease}>Increase Speed</button>
        <p>{this.props.store.speedControl}</p>
        <button onClick={this.clickDecrease}>Decrease Speed</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(SpeedControl);

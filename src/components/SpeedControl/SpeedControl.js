import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Typography } from '@material-ui/core/';

// icons ---

import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';

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
        <Typography variant="display2">Speed Control</Typography>
        <Typography variant="display3">
          {this.props.store.speedControl}
        </Typography>

        <Button variant="contained" onClick={this.clickDecrease}>
          <FastRewindIcon />
          Decrease Speed{' '}
        </Button>
        <Button variant="contained" onClick={this.clickIncrease}>
          Increase Speed <FastForwardIcon />
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(SpeedControl);

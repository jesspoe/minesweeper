import React, { Component } from 'react';
import Grid from './grid'

class board extends Component {
  constructor() {
    super()
    this.state = {
      status: ""
    }
  }


  render() {
    return (
      <main className="board">
        <Grid showFlag={this.state.showFlag} status={this.state.status} />
      </main>
    );
  }
}

export default board;


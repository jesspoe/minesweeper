import React, { Component } from 'react';

class Cell extends Component {
  constructor() {
    super()
    this.button = React.createRef();
    this.state = {
      flag: false
    }
  }



  handleClick = event => {
    if (event.type === 'click') {
      console.log("one Click")
    }
  }

  showButton = event => {
    console.log("right click!")
    this.setState({
      flag: true
    })
  }





  display = () => {

  }

  render() {
    return (
      <button className='btn' onContextMenu={this.showButton} onClick={(event) => this.handleClick(event)}>
        {this.props.children}
      </button>
    );
  }
}

export default Cell;

// handleClick = () = {
  //   if(e.type === 'click') {
    // console.log('Left click');
    // } else if (e.type === 'contextmenu') {
      // console.log('Right click');
      // }
// }
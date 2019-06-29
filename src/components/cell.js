import React, { Component } from 'react';

class Cell extends Component {
  constructor() {
    super()
    this.button = React.createRef();
    this.state = {
      flag: false
    }
  }

  handleKey = event => {
    if (event.keyCode === 70) {
      console.log("True")
      return true
    }

  }

  handleClick = event => {
    if (event.type === 'click') {
      console.log("Left Click")
    } else if (event.type === "contextmenu") {
      console.log("Right Click")
      this.setState({
        flag: true
      })
    }
  }

  onPointer = event => {
    if (event.isPrimary) {
      return true
    }
  }


  display = () => {

  }

  render() {
    return (
      <button className='btn' onPointerOver={(event) => this.onPointer(event)} onKeyDown={(event) => this.handleKey(event)} onClick={(event) => this.handleClick(event)}>
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
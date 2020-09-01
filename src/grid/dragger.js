import React, { Component, Fragment } from 'react';

export default class Dragger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      focused: false,
    };
  }

  componentDidMount() {}

  onDragStart = (ev) => {
    console.log('onDragStart', ev.dataTransfer);
    this.toggleOnFocus();
  };

  onDragEnd = (ev) => {
    console.log('onDragEnd', ev.dataTransfer);

    let endX = ev.clientX - 150;
    let endY = ev.clientY - 75;

    console.log('onDragEnd', endX, endY);
    // left is endX
    // top is endY
    this.props.handleOnDragEnd(endX, endY);
    this.setState({
      x: endX,
      y: endY,
    });

    /**
     * THen the offsetLeft, offsetTop sent to
     */
  };

  handleOnDrag = (ev) => {
    // console.log('X', ev.clientX);
    //console.log('Y', ev.clientY);
    const grid = document.getElementById('grid');
    const size = grid.getBoundingClientRect();
    this.props.childOutputMethod(ev.clientX, ev.clientY);
    // let draggerRef = document.getElementById('dragger');
    // console.log('draggerRef', draggerRef.getBoundingClientRect());
    // console.log('draggerRef', ev);
    // // console.log('draggerRef', draggerRef.offsetLeft);
    // // console.log('draggerRef', draggerRef.offsetTop);
    // // console.log('draggerRef', draggerRef.offsetRight);
    // // console.log('draggerRef', draggerRef.offsetBottom);

    // this.setState(
    //   {
    //     left: Math.floor(size.left),
    //     top: Math.floor(size.top),
    //     right: Math.floor(size.right),
    //     bottom: Math.floor(size.bottom),
    //   },
    //   () => {
    //     this.props.handleOnDrag(this.state);
    //   }
    // );

    // console.log('onDrag()', this.state);

    // what percentage is the width of the grid of 255.
    // that percentage of 255
  };

  toggleOnFocus = () => {
    this.setState({
      focused: !this.state.focused,
    });
  };

  render() {
    return (
      <div
        id='dragger'
        draggable='true'
        style={{
          left: this.state.x,
          top: this.state.y,
          backgroundColor: this.state.focused ? 'red' : 'blue',
        }}
        // style={{
        //   'background-color': `rgb(${this.state.red}, ${this.state.blue}, ${this.state.green})`,
        // }}
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        onDrag={this.handleOnDrag}
      >
        <h1 onClick={this.myOtherMethod}>Click Me</h1>
      </div>
    );
  }
}

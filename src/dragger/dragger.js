import React, { Component, Fragment } from 'react';
import './styles.scss';

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
  };

  onDragEnd = (ev) => {
    console.log('onDragEnd', ev.dataTransfer);
    let endX = ev.clientX - 150;
    let endY = ev.clientY - 75;

    this.props.handleOnDragEnd(endX, endY);
    this.setState({
      x: endX,
      y: endY,
    });
  };

  handleOnDrag = (ev) => {
    const grid = document.getElementById('grid');
    const size = grid.getBoundingClientRect();
    this.props.collectXAndYCoordinates(ev.clientX, ev.clientY);
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
          backgroundColor: this.state.focused
            ? 'rgba(0,0,0,0.85)'
            : 'rgba(0,0,0,0.25)',
        }}
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        onDrag={this.handleOnDrag}
        onMouseDown={this.toggleOnFocus}
        onMouseUp={this.toggleOnFocus}
      >
        <h1 onClick={this.myOtherMethod}>Drag Me</h1>
      </div>
    );
  }
}

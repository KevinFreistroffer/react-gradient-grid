import React, { Component } from 'react';
import './styles.css';
import Dragger from './dragger.js';
import Tile from './tile.js';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      red: 125,
      green: 125,
      blue: 125,
      draggerX: 0,
      draggerY: 0,
    };
  }

  componentDidMount() {
    let grid = document.getElementById('grid');
    const size = grid.getBoundingClientRect();
    this.setState(
      {
        left: Math.floor(size.left),
        top: Math.floor(size.top),
        right: Math.floor(size.right),
        bottom: Math.floor(size.bottom),
      },
      () => console.log(this.state)
    );
  }

  handleOnDrag = (x, y) => {
    console.log('handleOnDrag()', x, y);

    let red = x > 255 ? x - 255 : x;
    let green = y > 255 ? y - 255 : y;
    let blue = (red + green) / 2;
    this.setState({
      red,
      green,
      blue,
    });

    /**
     * THe value / 4. The closer it is to 0 or the width of the grid,
     * the lower or high the number should be
     */
  };

  setXAndYColor = (x, y) => {
    let red = x > 255 ? x - 255 : x;
    let green = y > 255 ? y - 255 : y;
    let blue = (red + green) / 2;
    this.setState({
      red,
      green,
      blue,
    });
  };

  outputTile = () => {
    console.log('outputTiles()');
    let components = [];
    for (let i = 0; i < 16; i++) {
      components.push(<Tile key={i} />);
    }

    return components;
  };

  handleOnDragEnd = (x, y) => {
    this.setXAndYColor(x, y);
  };

  render() {
    return (
      <div
        id='grid'
        style={{
          background: `radial-gradient(circle at 50% 50%, rgb(${this.state.red}, ${this.state.green}, ${this.state.blue}), rgb(0, 0, 75))`,
        }}
      >
        <Dragger
          x={this.state.draggerX}
          y={this.state.draggerY}
          childOutputMethod={this.handleOnDrag}
          handleOnDragEnd={this.handleOnDragEnd}
        ></Dragger>
        <ul>{this.outputTile()}</ul>
      </div>
    );
  }
}

export default Grid;

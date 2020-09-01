import React, { Component } from 'react';
import './styles.scss';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <li className='tile'>Tile {this.props.id + 1}</li>;
  }
}

export default Tile;

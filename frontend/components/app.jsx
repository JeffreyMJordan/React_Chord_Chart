import React from 'react';
import Arcs from './arcs';
import * as d3 from 'd3';

const arc = d3.arc().innerRadius(100).outerRadius(110);
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const chords = d3.chord().padAngle(0.05)(matrix);

const App = () => {
  return (<svg width={500} height={500}>
    <Arcs arc={arc} chords={chords} width={500} height={500}/>
  </svg>);
};

export default App;
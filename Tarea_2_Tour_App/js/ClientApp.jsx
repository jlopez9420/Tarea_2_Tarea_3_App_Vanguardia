import React from 'react';
import {render} from 'react-dom';
import Honduras from './data.json';
import CardApp from './CardApp';

const App = () => (
  <div style={{margin: 10}}>
    <CardApp deptos={Honduras.deptos} />
  </div>
);

render(<App />, document.getElementById('app'));

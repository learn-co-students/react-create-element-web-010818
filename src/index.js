// Code goes here

import React from 'react';
import ReactDOM from 'react-dom'
const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', { className: 'brown' }, 'Chocolate'),
        React.createElement('li', { className: 'white' }, 'Vanilla'),
        React.createElement('li', { className: 'tan' }, 'Maple Walnut')
      ]
    )
  );

ReactDOM.render(
  list,
  document.getElementById('global')
);

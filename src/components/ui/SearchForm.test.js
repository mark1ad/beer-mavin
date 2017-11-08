import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './SearchForm';


it('renders without crashing without beers', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchForm />, div);
})

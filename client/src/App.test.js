import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



import { render } from '@testing-library/react';
import Players from './components/Players';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('title', () => {
    const { getByText } = render(<App />);
      expect(getByText(/Womens World Cup/i)).toBeTruthy() 
}) 
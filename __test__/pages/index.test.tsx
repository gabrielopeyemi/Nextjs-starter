import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages'; 
import '@testing-library/jest-dom'

describe('Home component', () => {
  it('renders the correct content', () => {
    render(<Home />);
    
  });

});

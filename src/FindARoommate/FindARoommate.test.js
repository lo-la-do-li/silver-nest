import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FindARoommate from './FindARoommate';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('FindARoommate', () => {
  //This testing file focuses more on integration testing
  it('should display a header', () => {
    // setup and execution 
    render(
      <MemoryRouter>
        <FindARoommate/>
      </MemoryRouter>
    )
    //execution
    const headerText = screen.getByText('Select a semester:')  
    // assertions
    expect(headerText).toBeInTheDocument()
  })
  
})
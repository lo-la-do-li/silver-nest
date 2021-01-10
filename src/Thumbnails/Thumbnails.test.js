import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Thumbnails from './Thumbnails';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('Thumbnails', () => {
  //This test file will mostly be for unit testing
  it.skip('It should display thumbnails', () => {
    // setup and execution 
    render(

    )
    //execution
      
    // assertions
    expect(screen.getByText()).toBeInTheDocument()
  })
})
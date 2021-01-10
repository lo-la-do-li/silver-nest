import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('About', () => {
  //this testing file will mostly be for unit testing
  it.skip('It should display a description of the app and the collaboration', () => {
    // setup and execution 
    render(

    )
    //execution
      
    // assertions
    expect(screen.getByText()).toBeInTheDocument()
  })
})

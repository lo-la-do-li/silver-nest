import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('About', () => {
  //This test file will mostly be for unit testing
  it.skip('It should display a description of the app and the collaboration', () => {
    // setup and execution 
    render(

    )
    //execution
      
    // assertions
    expect(screen.getByText()).toBeInTheDocument()
  })
})
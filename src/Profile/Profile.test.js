import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from './Profile';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('Profile', () => {
  //This test file will mostly be for unit testing
  it.skip('It should display a profile of an resident', () => {
    // setup and execution 
    render(

    )
    //execution
      
    // assertions
    expect(screen.getByText()).toBeInTheDocument()
  })
})
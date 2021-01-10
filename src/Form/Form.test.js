import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('About', () => {
  //this file will mostly be for unit testing
  it.skip('It should display a form', () => {
    // setup and execution 
    render(

    )
    //execution

    // assertions
    expect(screen.getByText()).toBeInTheDocument()
  })
})

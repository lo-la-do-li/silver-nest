import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  //This testing file focuses more on integration testing
  it.skip('It should display a header', () => {
    // setup and execution 
    render(

    )
    //execution
      
    // assertions
    expect(screen.getByText()).toBeInTheDocument()
  })
  it.skip('It should display a navBar', () => {
    // setup and execution 
    render(

    )
    //execution
      
    // assertions
    expect(screen.getByText()).toBeInTheDocument()
  })
  it.skip('It should display about details on load', () => {
    // setup and execution 
    render(

    )
    //execution
      
    // assertions
    expect(screen.getByText()).toBeInTheDocument()
  })
  it.skip('It should display FindARoommate component when Find A Roommate tab is clicked', () => {
    // setup and execution 
    render(

    )
    //execution
      
    // assertions
    expect(screen.getByText()).toBeInTheDocument()
  })
})
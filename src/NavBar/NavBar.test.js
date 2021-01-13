import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from "history";

describe('NavBar', () => {
  it('should render navbar with About and Find A Roommate', () => {
    render(
      <MemoryRouter>
        <NavBar/>
      </MemoryRouter>
    )
  
    const aboutTab = screen.getByText('About')
    const findRoommateTab = screen.getByText('Find A Roommate')
  
    expect(aboutTab).toBeInTheDocument()
    expect(findRoommateTab).toBeInTheDocument()
  })

  it('should route user to About page when About tab is clicked', async () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <NavBar/>
      </Router>
    )

    const aboutTab = await waitFor(() => screen.getByText('About'))
    userEvent.click(aboutTab)
    
    expect(history.location.pathname).toBe('/about')
  })

  it('should route user to Find a Roommate page when Find A Roommate tab is clicked', async () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <NavBar/>
      </Router>
    )

    const roommateTab = await waitFor(() => screen.getByRole('tab', { name: /find a roommate/i }))
    userEvent.click(roommateTab)
    
    expect(history.location.pathname).toBe('/find-a-roommate')
  })
})
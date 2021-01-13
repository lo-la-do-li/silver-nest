import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from "history";

describe('About', () => {
  it('It should display a description of the app and the collaboration', () => {
    
    render(
      <MemoryRouter>
        <About/>
      </MemoryRouter>
    )
    
    const missionStatement = screen.getByText('Turing School of Health Sciences has partnered with Mountain View Residences, a senior independent living resort, to match qualified Health Sciences Students to elderly residents living in the community based on compatibility of living preferences, needs, and schedules.')
    
    expect(missionStatement).toBeInTheDocument()
  })

  it('should change have a button that a user can click to go to FindARoommate', async () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <About/>
      </Router>
    )
    
    const roommateButton = await waitFor(() => screen.getByRole('button', { name: /find a roommate/i }))
    
    userEvent.click(roommateButton)
    
    expect(history.location.pathname).toBe('/find-a-roommate')
  })
})

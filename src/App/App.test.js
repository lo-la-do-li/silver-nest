import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    )
  })
  it('should render silver nest logo', () => {
    const logo = screen.getByRole('img', { name: /turing school of health sciences logo/i })

    expect(logo).toBeInTheDocument();
  })

  it('should display About page on load', () => {
    const missionStatement = screen.getByText('Turing School of Health Sciences has partnered with Mountain View Residences, a senior independent living resort, to match qualified Health Sciences Students to elderly residents living in the community based on compatibility of living preferences, needs, and schedules.')
 
    expect(missionStatement).toBeInTheDocument()
  })
  it('should render FindARoommate when FindARoommate Button in About is clicked', () => {
    const findARoommateButton =  screen.getByRole('button', { name: /find a roommate/i })

    userEvent.click(findARoommateButton)

    const findARoommateHeader = screen.getByRole('heading', { name: /select a semester:/i })
    expect(findARoommateHeader).toBeInTheDocument()
  })
  it.skip('should display FindARoommate component when Find A Roommate tab is clicked', () => {
    //execution
      
    // assertions
    expect(screen.getByText()).toBeInTheDocument()
  })
})
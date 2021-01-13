import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

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
})

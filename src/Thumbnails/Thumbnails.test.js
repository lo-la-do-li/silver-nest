import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Thumbnails from './Thumbnails';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import { springResident } from '../mockResidentData';

describe('Thumbnails', () => {
  it('should display residents', () => {
    // setup and execution 
    render(
      <MemoryRouter>
        <Thumbnails
          availableResidents={springResident}
          selectResident={jest.fn()}
          semesterAvailable="Spring-2021"
        />
      </MemoryRouter>
    )
    //execution
    const doris = screen.getByRole('img', { name: /doris/i })
    // assertions
    expect(doris).toBeInTheDocument()
  })
})
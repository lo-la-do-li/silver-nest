import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Thumbnails from './Thumbnails';
import { MemoryRouter } from 'react-router';
import { springResident } from '../mockResidentData';

describe('Thumbnails', () => {
  it('should display residents', () => {
    render(
      <MemoryRouter>
        <Thumbnails
          availableResidents={springResident}
          selectResident={null}
          semesterAvailable="Spring-2021"
        />
      </MemoryRouter>
    )

    const doris = screen.getByRole('img', { name: /doris/i })
    expect(doris).toBeInTheDocument()
  })
})
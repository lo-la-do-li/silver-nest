import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from './Profile';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import { springResident } from '../mockResidentData';

describe('Profile', () => {

  it.skip('should display a profile of an resident', async () => {
    render(
      <MemoryRouter>
        <Profile
          resident={springResident}
          exitProfileView={jest.fn()}
        />
      </MemoryRouter>
    )
    
    const image = await waitFor(() => screen.getByTitle(/doris's photo/i))
    const interests = screen.getByText(/knitting, cats, card games, unsolved mysteries/i)
    const applyButton = screen.getByRole('button', { name: /apply for housing/i })
    
    expect(image).toBeInTheDocument()
    expect(interests).toBeInTheDocument()
    expect(applyButton).toBeInTheDocument()
  })

  it.skip('should allow user to view additional settings by clicking carrot icon', () => {
    render(
      <MemoryRouter>
        <Profile
          resident={springResident}
          exitProfileView={jest.fn()}
        />
      </MemoryRouter>
    )

    const showMore = screen.getByRole('button', { name: /show more/i })
    const height = screen.queryByRole('heading', { name: /height: 5' 9"/i })

    expect(height).not.toBeInTheDocument()

    userEvent.click(showMore)

    expect(height).toBeInTheDocument()
  })
})
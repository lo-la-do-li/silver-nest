import React from 'react';
import '@testing-library/jest-dom';
import Form from './Form';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { createMemoryHistory } from "history";

describe('Form', () => {
  it('It should display a form', () => {
    const mockSelectedSemester = jest.fn()
    render(
      <MemoryRouter>
        <Form
          selectedSemester={mockSelectedSemester}
        />
      </MemoryRouter>
    )

    const formText = screen.getByText('Choose a semester')
    // assertions
    expect(formText).toBeInTheDocument()
  })

  it('It should display a form', async () => {
    const mockSelectedSemester = jest.fn()
    const history = createMemoryHistory()
    
    render(
      <MemoryRouter>
        <Form
          selectedSemester={mockSelectedSemester}
        />
      </MemoryRouter>
    )
    
    const chooseSemesterForm = screen.getByRole('button')
    
    userEvent.click(chooseSemesterForm)
    
    const springText = screen.getByRole('option', { name: /summer 2021/i })
    const summmerText = screen.getByText('Summer 2021')
    const fallText = screen.getByText('Fall 2021')
    
    expect(springText).toBeInTheDocument()
    expect(summmerText).toBeInTheDocument()
    expect(fallText).toBeInTheDocument()
  })
})

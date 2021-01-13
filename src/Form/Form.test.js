import React from 'react';
import '@testing-library/jest-dom';
import Form from './Form';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

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
   
    expect(formText).toBeInTheDocument()
  })

  it('It should display a form', async () => {
    const mockSelectedSemester = jest.fn()
    
    render(
      <MemoryRouter>
        <Form
          selectedSemester={mockSelectedSemester}
        />
      </MemoryRouter>
    )
    
    const semesterDropdown = screen.getByRole('button', { name: /choose a semester ​/i })
    
    userEvent.click(semesterDropdown)
    
    const springText = screen.getByRole('option', { name: /spring 2021/i })
    const summmerText = screen.getByText('Summer 2021')
    const fallText = screen.getByText('Fall 2021')
    
    expect(springText).toBeInTheDocument()
    expect(summmerText).toBeInTheDocument()
    expect(fallText).toBeInTheDocument()
  })
})

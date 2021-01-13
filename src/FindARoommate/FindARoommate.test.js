import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FindARoommate from './FindARoommate';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import { getResidentsBySemester } from '../apiCalls';
import { springResident } from '../mockResidentData';
jest.mock('../apiCalls.js');

describe('FindARoommate', () => {
  
  beforeEach(() => {
    getResidentsBySemester.mockResolvedValueOnce(springResident)
    
    render(
      <MemoryRouter>
        <FindARoommate/>
      </MemoryRouter>
    )
  })
  
  it('should display a header', () => {  
    const headerText = screen.getByText('Select a semester:')  
    expect(headerText).toBeInTheDocument()
  })

  it('should render Form', () => {
    const semesterDropdown = screen.getByRole('button', { name: /choose a semester ​/i })
    expect(semesterDropdown).toBeInTheDocument()
  })

  it('should run call for residents when form option is clicked', async () => {
    const semesterDropdown = await waitFor(() => screen.getByRole('button', { name: /choose a semester ​/i }))
    userEvent.click(semesterDropdown)

    const springText = screen.getByText('Spring 2021')
    userEvent.click(springText)
    
    expect(getResidentsBySemester).toHaveBeenCalledWith('Spring-2021')  
    })

  it('should render residents when form option is clicked', async () => {
    const semesterDropdown = await waitFor(() => screen.getByRole('button', { name: /choose a semester ​/i }))
    userEvent.click(semesterDropdown)

    const springText = screen.getByText('Spring 2021')
    userEvent.click(springText)
    
    const doris = await waitFor(() => screen.getByText('Doris'))
    expect(doris).toBeInTheDocument()  
  })

  it('should render resident profile when a resident button is clicked', async () => {
    const semesterDropdown = await waitFor(() => screen.getByRole('button', { name: /choose a semester ​/i }))
    userEvent.click(semesterDropdown)

    const springText = screen.getByText('Spring 2021')
    userEvent.click(springText)
    
    const dorisButton = await waitFor(() => screen.getByRole('button', { name: /star doris/i }))
    userEvent.click(dorisButton)
    
    const career = screen.getByText('Seamstress')
    expect(career).toBeInTheDocument()  
  })

  it('should allow user to close resident profile by clicking cancel button', async () => {
    const semesterDropdown = await waitFor(() => screen.getByRole('button', { name: /choose a semester ​/i }))
    userEvent.click(semesterDropdown)

    const springText = screen.getByText('Spring 2021')
    userEvent.click(springText)
    
    const dorisButton = await waitFor(() => screen.getByRole('button', { name: /star doris/i }))
    userEvent.click(dorisButton)
    
    const career = screen.queryByText('Seamstress')
    expect(career).toBeInTheDocument()

    const closeProfile = screen.getByRole('button', { name: /cancel/i })
    userEvent.click(closeProfile)

    expect(career).not.toBeInTheDocument()
  })
})
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FindARoommate from './FindARoommate';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import { getAllResidents, getResidentsBySemester } from '../apiCalls';
import mockResidents from '../mockResidentData';
jest.mock('../apiCalls.js');

describe('FindARoommate', () => {
  let mockedResidents;
  beforeEach(() => {
    mockedResidents = getAllResidents.mockResolvedValue(mockResidents)
  })

  //This testing file focuses more on integration testing
  it('should display a header', () => {
    render(
      <MemoryRouter>
        <FindARoommate/>
      </MemoryRouter>
    )
    const headerText = screen.getByText('Select a semester:')  

    expect(headerText).toBeInTheDocument()
  })

  it('should render Form', () => {
    render(
      <MemoryRouter>
        <FindARoommate/>
      </MemoryRouter>
    )
    
    const semesterDropdownForm = screen.getByRole('button', { name: /choose a semester ​/i })
    
    expect(semesterDropdownForm).toBeInTheDocument()
  })

  it('should render list with resident thumbnails', async () => {
    // setup and execution 
    render(
      <MemoryRouter>
        <FindARoommate/>
      </MemoryRouter>
    )
    //execution
    const thumbnailsList = screen.getByRole('list')
    const dorisName = await waitFor(() => screen.getByText('Doris'))
    const ralphName = screen.getByText('Ralph')
    const wendyName = screen.getByText('Wendy')
    // assertions
    expect(thumbnailsList).toBeInTheDocument()
    expect(dorisName).toBeInTheDocument()
    expect(ralphName).toBeInTheDocument()
    expect(wendyName).toBeInTheDocument()
  })
})
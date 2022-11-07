// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react';
import Spinner from './Spinner';
import {screen, render} from '@testing-library/react';

describe('Additional Spinner Test', () => {
  test('Spinner shows loading when true', async () => {
    render(<Spinner on ={true}/>)
    await expect(screen.getByText('Please wait...')).toBeInTheDocument;
  })
})

test('Spinner does not show loading when false', async () => {
  render(<Spinner on = {false}/>)

  await expect(screen.findByText('Please wait...')).not.toBeInTheDocument;
})
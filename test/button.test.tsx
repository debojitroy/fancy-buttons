import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '../src/index';

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button text="Primary" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Primary');
  });
});

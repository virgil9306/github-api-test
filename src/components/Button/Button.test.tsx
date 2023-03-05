import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders learn react link', () => {
  render(<Button text="Hello World" />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});

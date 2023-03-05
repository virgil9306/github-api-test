import React from 'react';
import { render, screen } from '@testing-library/react';
import Pager from './Pager';

test('renders learn react link', () => {
  render(<Pager />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

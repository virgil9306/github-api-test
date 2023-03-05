import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from './Container';

test('renders learn react link', () => {
  render(<Container><p>Hello World</p></Container>);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});


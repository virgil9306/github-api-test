import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders App screen', () => {
  render(<App />);
  const el = screen.getByText(/GitHub Issue Search/i);
  expect(el).toBeInTheDocument();
});

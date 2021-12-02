import { render, screen } from '@testing-library/react';
import Cards from './Cards';

test('loading home page', () => {
  render(<Cards />);
  const linkElement = screen.getByText(/My SecondCard/i);
  expect(linkElement).toBeInTheDocument();
});

test('fade1 true', () => {
    render(<Cards fade1={true} />);
    const linkElement = screen.getByText(/1/i);
    expect(linkElement).toBeInTheDocument();
  });
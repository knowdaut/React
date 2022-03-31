import { render, screen } from '@testing-library/react';
import App from './App';

test('loading home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});

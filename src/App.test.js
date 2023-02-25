import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});

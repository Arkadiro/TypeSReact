import { render, screen } from '@testing-library/react';
import App from './App';

test('renders form', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo text/i);
  expect(linkElement).toBeInTheDocument();
});

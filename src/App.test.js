import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nothing', () => {
  render(<App />);
  const linkElement = screen.getByText(/The Beginning/i);
  expect(linkElement).toBeInTheDocument();
});

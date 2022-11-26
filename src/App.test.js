import { render, screen } from '@testing-library/react';
import Header from './components/Header';
import Feature from './components/Feature';

test('renders Earthquakes title', () => {
  render(<Header />);
  const title = screen.getByText(/Earthquakes of the last 3 days/i);
  expect(title).toBeInTheDocument();
});

test('Feature API version', () => {
  render(<Feature />);
  const apiVer = screen.queryByText(/- API ver./i);
  expect(apiVer).toBeInTheDocument();
});

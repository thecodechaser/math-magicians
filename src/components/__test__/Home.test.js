import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('should contain p element ', () => {
  render(<Home />);
  const element = screen.getByRole('heading', { name: /welcome to our page/i });
  expect(element).toMatchSnapshot();
});

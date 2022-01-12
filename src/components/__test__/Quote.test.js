import { render, cleanup } from '@testing-library/react';
import Quote from '../Quote';

afterEach(() => {
  cleanup();
});

describe('Quote tests', () => {
  it('renders correctly ', () => {
    const tree = render(<Quote />);
    expect(tree).toMatchSnapshot();
  });
});

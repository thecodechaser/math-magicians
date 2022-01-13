import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';
import '@testing-library/jest-dom';

describe('App tests', () => {
  test('should render', () => {
    const app = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(app).toMatchSnapshot();
  });
  test('should navigate to calculator page and find the title', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const calcultorPage = screen.getByRole('link', { name: /calculator/i });
    fireEvent.click(calcultorPage);

    expect(
      screen.getByRole('heading', { name: /let's do some math!/i }),
    ).toBeInTheDocument();
  });

  test('should navigate to Quote page and find the find the quote', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const QuotePage = screen.getByRole('link', { name: /quote/i });
    fireEvent.click(QuotePage);

    const quote = screen.getByText(
      /without mathematics, there’s nothing you can do\. everything around you is mathematics\. everything around you is numbers\./i,
    );

    expect(quote).toBeInTheDocument();
  });
});

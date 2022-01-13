import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../Calculator';

describe('Calculator ui tests', () => {
  test('should render ', () => {
    render(<Calculator />);

    const acBtn = screen.getByRole('button', { name: /ac/i });
    expect(acBtn).toBeInTheDocument();
  });

  test('should render and make calculation', () => {
    render(<Calculator />);

    const num1Btn = screen.getByRole('button', { name: /1/i });
    fireEvent.click(num1Btn);
    const multiplyBtn = screen.getByRole('button', { name: /x/i });
    fireEvent.click(multiplyBtn);
    const num2Btn = screen.getByRole('button', { name: /2/i });
    fireEvent.click(num2Btn);
    const equalBtn = screen.getByRole('button', { name: /=/i });
    fireEvent.click(equalBtn);
    const output = screen.getByTestId('total');

    expect(output).toHaveTextContent('2');
  });
});

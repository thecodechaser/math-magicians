import calculate from './calculate';

describe('calculate tests', () => {
  test('should return an obj with result of 4 + 4', () => {
    let res = calculate({}, '4');
    res = calculate(res, '+');
    res = calculate(res, '4');
    res = calculate(res, '=');
    expect(res.total).toBe('8');
  });
  test('Pass a string instead of num should throw an error', () => {
    let res = calculate({}, 'r');
    res = calculate(res, '=');
    expect(res).toEqual({});
  });

  test('Pass AC to calculate it should return obj with null', () => {
    const res = calculate({}, 'AC');
    expect(res.next).toBe(null);
    expect(res.total).toBe(null);
    expect(res.operation).toBe(null);
  });

  test('Pass 0 twice to calculate function should return empty object', () => {
    let res = calculate({}, '0');
    res = calculate(res, '0');
    expect(res).toStrictEqual({});
  });

  test('calculate negative number and should return negative num', () => {
    let res = calculate({}, '1');
    res = calculate(res, '+/-');
    res = calculate(res, '-');
    res = calculate(res, '2');
    res = calculate(res, '=');
    expect(res.total).toBe('-3');
  });
  test('Multiply 5 x 5 should return 25', () => {
    let res = calculate({}, '5');
    res = calculate(res, 'x');
    res = calculate(res, '5');
    res = calculate(res, '=');
    expect(res.total).toBe('25');
  });
  test('divide 10 / 2 should return 0', () => {
    let res = calculate({}, '10');
    res = calculate(res, '÷');
    res = calculate(res, '2');
    res = calculate(res, '=');
    expect(res.total).toBe('5');
  });
});

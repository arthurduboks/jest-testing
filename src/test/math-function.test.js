import { sum, subtract, multiply, divide } from "../utils/math-function";

describe("sum function", () => {
  it("sums correctly two positive values", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("sums correctly when one value is zero", () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  it("sums correctly two negative values", () => {
    expect(sum(-1, -1)).toBe(-2);
  });

  it("sums correctly a positive and a negative value", () => {
    expect(sum(-5, 10)).toBe(5);
  });
});

describe("subtract function", () => {
  it("subtracts correctly two positive values", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it("subtracts correctly and results in negative value", () => {
    expect(subtract(3, 5)).toBe(-2);
  });

  it("subtracts correctly when one value is zero", () => {
    expect(subtract(0, 5)).toBe(-5);
    expect(subtract(5, 0)).toBe(5);
  });

  it("subtracts correctly two negative values", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });
});

describe("multiply function", () => {
  it("multiplies correctly two positive values", () => {
    expect(multiply(2, 3)).toBeCloseTo(6);
  });

  it("multiplies correctly and results in zero when one value is zero", () => {
    expect(multiply(0, 5)).toBeCloseTo(0);
    expect(multiply(5, 0)).toBeCloseTo(0);
  });

  it("multiplies correctly two negative values", () => {
    expect(multiply(-2, -3)).toBeCloseTo(6);
  });

  it("multiplies correctly a positive and a negative value", () => {
    expect(multiply(-2, 3)).toBeCloseTo(-6);
  });

  it("handles small numbers and rounds to two decimal places", () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 2);
  });
});

describe("divide function", () => {
  it("divides correctly two positive values", () => {
    expect(divide(10, 2)).toBeCloseTo(5);
  });

  it("divides correctly and handles division by a fraction", () => {
    expect(divide(1, 2)).toBeCloseTo(0.5);
  });

  it("divides correctly two negative values", () => {
    expect(divide(-10, -2)).toBeCloseTo(5);
  });

  it("divides correctly a positive and a negative value", () => {
    expect(divide(-10, 2)).toBeCloseTo(-5);
  });

  it("throws an error when trying to divide by zero", () => {
    expect(() => {
      divide(10, 0);
    }).toThrow("Error: Division by zero is not allowed.");
  });
});

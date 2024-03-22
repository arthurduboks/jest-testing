export const sum = (a = 0, b = 0) => {
  return a + b;
};

export const subtract = (a = 0, b = 0) => {
  return a - b;
};

export const multiply = (a = 0, b = 0) => {
  return Number.parseFloat((a * b).toFixed(2)); // Multiply and round to two decimal places
};

export const divide = (a = 0, b = 0) => {
  if (b !== 0) {
    return Number.parseFloat((a / b).toFixed(2)); // Divide and round to two decimal places
  } else {
    throw new Error("Error: Division by zero is not allowed.");
  }
};

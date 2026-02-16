import { capitalize, reverseString, calculator } from "./script";

test("string returns with capitalised first character", () => {
  expect(capitalize("banana")).toBe("Banana");
  expect(capitalize("orange")).toBe("Orange");
});
test("capitalize() throws error.", () => {
  expect(() => capitalize(5)).toThrow(Error);
});

test("string is reversed", () => {
  expect(reverseString("banana")).toBe("ananab");
  expect(reverseString("orange")).toBe("egnaro");
});
test("reverseString() throws error.", () => {
  expect(() => reverseString(5)).toThrow(Error);
});

test("calculator() calculates", () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(1, 1)).toBe(0);
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.divide(1, 1)).toBe(1);
  expect(calculator.divide(1, 2)).toBe(0.5);
  expect(calculator.multiply(1, 1)).toBe(1);
  expect(calculator.multiply(1, 2)).toBe(2);
});
test("calculate throws error.", () => {
  expect(() => calculator.add("test", 5)).toThrow(
    "Both parameters must be numbers.",
  );
});

import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./script";

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
  expect(() => calculator.subtract("test", 5)).toThrow(
    "Both parameters must be numbers.",
  );
  expect(() => calculator.divide("test", 5)).toThrow(
    "Both parameters must be numbers.",
  );
  expect(() => calculator.multiply("test", 5)).toThrow(
    "Both parameters must be numbers.",
  );
});

test("caesarCipher shifts by correct factor", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
  expect(caesarCipher("abc", 2)).toBe("cde");
  expect(caesarCipher("abc", -3)).toBe("xyz");
  expect(caesarCipher("ABC", -3)).toBe("XYZ");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
  expect(caesarCipher("Hello World!", 3)).toBe("Khoor Zruog!");
});

test("analyzeArray returns object with array's average, min, max and length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([2, 5, 7, 6, 8, 9, 12])).toEqual({
    average: 7,
    min: 2,
    max: 12,
    length: 7,
  });
});

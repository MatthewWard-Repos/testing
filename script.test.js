import { capitalize, reverseString } from "./script";

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

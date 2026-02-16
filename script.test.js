import { capitalize } from "./script";

test("string returns with capitalised first character", () => {
  expect(capitalize("banana")).toBe("Banana");
  expect(capitalize("orange")).toBe("Orange");
});
test("capitalize() throws error.", () => {
  expect(() => capitalize(5)).toThrow(Error);
});

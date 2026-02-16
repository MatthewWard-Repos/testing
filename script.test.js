import { capitalize } from "./script";

test("string returns with capitalised first character", () => {
  expect(capitalize("banana")).toBe("Banana");
  expect(capitalize("orange")).toBe("Orange");
});

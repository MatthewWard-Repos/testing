import { type } from "node:os";

export { capitalize, reverseString, calculator };

function capitalize(string) {
  if (typeof string === "string") {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  } else {
    throw new Error("Parameter must be a string.");
  }
}
function reverseString(string) {
  if (typeof string === "string") {
    return string.split("").reverse().join("");
  } else {
    throw new Error("Parameter must be a string.");
  }
}

const calculator = {
  validateNumbers: function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("Both parameters must be numbers.");
    }
  },
  add: function (a, b) {
    this.validateNumbers(a, b);
    return a + b;
  },

  subtract: function (a, b) {
    this.validateNumbers(a, b);
    return a - b;
  },
  divide: function (a, b) {
    this.validateNumbers(a, b);
    return a / b;
  },
  multiply: function (a, b) {
    this.validateNumbers(a, b);
    return a * b;
  },
};

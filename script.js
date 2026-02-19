export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

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
function caesarCipher(string, factor) {
  return string
    .split("")
    .map((letter) => {
      let charcode = letter.charCodeAt(0);

      if (charcode >= 65 && charcode <= 90) {
        return String.fromCharCode(
          ((((charcode - 65 + factor) % 26) + 26) % 26) + 65,
        );
      }
      if (charcode >= 97 && charcode <= 122) {
        return String.fromCharCode(
          ((((charcode - 97 + factor) % 26) + 26) % 26) + 97,
        );
      }
      return letter;
    })
    .join("");
}
// window.caesarCipher = caesarCipher;

function analyzeArray(arr) {
  let obj = {};
  let initalValue = 0;
  obj.average = arr.reduce((acc, cur) => acc + cur, initalValue) / arr.length;
  obj.min = arr.reduce((acc, cur) => (cur < acc ? (acc = cur) : acc), arr[0]);
  obj.max = arr.reduce((acc, cur) => (cur > acc ? (acc = cur) : acc), arr[0]);
  obj.length = arr.length;
  return obj;
}
// window.analyzeArray = analyzeArray;

// const object = analyzeArray([1, 8, 3, 4, 2, 6]);

// object ==
//   {
//     average: 4,
//     min: 1,
//     max: 8,
//     length: 6,
//   };

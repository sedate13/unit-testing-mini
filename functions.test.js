// const functions = require("./functions.js");
const {
  returnTwo,
  add,
  greeting,
  multiply,
  divide,
  subtract
} = require("./functions");
test("returnTwo should equal 2", () => {
  expect(returnTwo()).toBe(2);
  //function inside expect has to be invoked, jest is using  a node instance to run the code
});
test("greeting should equal James", () => {
  expect(greeting("James")).toBe("Hello, James");
});

describe("math functions:", () => {
  test("add should equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });
  test("multiply should equal 2", () => {
    expect(multiply(1, 2)).toBe(2);
  });
  test("divide should equal 0.5", () => {
    expect(divide(1, 2)).toBe(0.5);
  });
  test("subtract should equal -1", () => {
    expect(subtract(1, 2)).toBe(-1);
  });
});

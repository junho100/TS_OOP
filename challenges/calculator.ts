/**
 * Let's make a calculator 🧮
 */
type Op = "add" | "substract" | "multiply" | "divide" | "remainder";
const calculate = (op: Op, a: number, b: number): number => {
  switch (op) {
    case "add": {
      return a + b;
    }
    case "substract": {
      return a - b;
    }
    case "multiply": {
      return a * b;
    }
    case "divide": {
      return a / b;
    }
    case "remainder": {
      return a % b;
    }
    default: {
      throw new Error("unknown error!");
    }
  }
};

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1

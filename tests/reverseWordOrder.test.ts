import { reverseWordOrder } from "../src/reverseWordOrder";

it("should reverse a single word text", () => {
  const expectedResult = "This";

  const actualResult = reverseWordOrder("This");

  expect(actualResult).toBe(expectedResult);
});

it("should reverse a multi-word text", () => {
  const expectedResult = "block a is This";

  const actualResult = reverseWordOrder("This is a block");

  expect(actualResult).toBe(expectedResult);
});

it("should reverse a single space", () => {
  const expectedResult = " ";

  const actualResult = reverseWordOrder(" ");

  expect(actualResult).toBe(expectedResult);
});

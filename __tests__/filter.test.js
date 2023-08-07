import {
  filterEvenNumbers,
  filterLengthWith4,
  filterStartWithA,
} from "../src/filter";

describe("array filter test", () => {
  test("numbers should be odd", () => {
    const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [2, 4, 6, 8, 10];

    const result = filterEvenNumbers(arrNumber);

    expect(result).toStrictEqual(expected);
  }),
    test("words should have the length of 4", () => {
      const wordArray = ["Banana", "ball", "Apple", "bird", "dog"];
      const expected = ["ball", "bird"];

      const result = filterLengthWith4(wordArray);
      expect(result).toStrictEqual(expected);
    }),
    test("words should start with A", () => {
      const wordArray = ["apple", "ball", "axe", "zebra", "dog", "cat"];
      const expected = ["apple", "axe"];

      const result = filterStartWithA(wordArray);

      expect(result).toStrictEqual(expected);
    });
});

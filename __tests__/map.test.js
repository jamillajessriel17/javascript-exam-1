import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("array map test", () => {
  test("should return half value of each number", () => {
    const numberArray = [2, 10, 21];
    const expected = [1, 5, 10.5];

    const result = halfNumbers(numberArray);

    expect(result).toStrictEqual(expected);
  }),
    test("should add Hello in the beginning of each name", () => {
      const nameArray = [
        "John",
        "Axel",
        "Jessriel",
        "Michael",
        "Mark",
        "Richard",
      ];
      const expected = [
        "Hello John",
        "Hello Axel",
        "Hello Jessriel",
        "Hello Michael",
        "Hello Mark",
        "Hello Richard",
      ];

      const result = spliceNames(nameArray);

      expect(result).toStrictEqual(expected);
    }),
    test("should add serial number in each fruit", () => {
      const fruitArray = ["grapes", "banana", "watermelon", "orange", "mango"];
      const expected = [
        "1. grapes",
        "2. banana",
        "3. watermelon",
        "4. orange",
        "5. mango",
      ];

      const result = addSerialNumber(fruitArray);
      expect(result).toStrictEqual(expected);
    });
});

import { TestWatcher } from "jest";
import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe("array find test", () => {
  test("should return the first element that is greater or equal to 18", () => {
    const ageArray = [6, 17, 3, 14, 22, 19, 27];

    const result = firstGrownUp(ageArray);

    expect(result).toBe(22);
    expect(result).toBeGreaterThanOrEqual(18);
  }),
    test("should return orange", () => {
      const fruitArray = ["grapes", "banana", "watermelon", "orange", "mango"];
      const expected = "orange";

      const result = firstOrange(fruitArray);

      expect(result).toBe(expected);
    }),
    test("should return the first name that has length over 5", () => {
      const nameArray = [
        "John",
        "Axel",
        "Jessriel",
        "Michael",
        "Mark",
        "Richard",
      ];
      const expected = "Jessriel";

      const result = firstLengthOver5Name(nameArray);

      expect(result).toBe(expected);
      expect(result.length).toBeGreaterThan(5);
    });
});

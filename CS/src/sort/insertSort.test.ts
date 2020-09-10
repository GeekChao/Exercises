import insertSort from "./insertSort";

describe("Bubble sort", () => {
  it("can return an empty array if invalid input", () => {
    const result = insertSort([]);

    expect(result).toEqual([]);
  });

  it("can sort an unordered array", () => {
    const arr = [4, -1, 5, 19, 2, -3, 7];
    const result = insertSort(arr);

    expect(result).toEqual([-3, -1, 2, 4, 5, 7, 19]);
  });
});

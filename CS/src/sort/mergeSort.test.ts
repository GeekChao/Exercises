import mergeSort from "./mergeSort";

describe("mergeSort sort", () => {
  it("can return an empty array if invalid input", () => {
    const result = mergeSort([], 0, 0);

    expect(result).toEqual([]);
  });

  it("can sort an unordered array", () => {
    const arr = [4, -1, 5, 19, 2, -3, 7];
    const result = mergeSort(arr, 0, arr.length - 1);

    expect(result).toEqual([-3, -1, 2, 4, 5, 7, 19]);
  });
});

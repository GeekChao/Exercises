import quickSort from "./quickSort";

describe("quickSort sort", () => {
  it("can return an empty array if invalid input", () => {
    const result = quickSort([]);

    expect(result).toEqual([]);
  });

  it("can sort an unordered array", () => {
    const arr = [4, -3, -1, 5, 19, 2, -3, 7];
    const result = quickSort(arr);

    expect(result).toEqual([-3, -3, -1, 2, 4, 5, 7, 19]);
  });
});

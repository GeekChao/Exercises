const mergeSort = <T>(arr: T[], start: number, end: number): T[] => {
  if (!Array.isArray(arr) || !arr.length) return [];

  if (start >= end) return [arr[end]];

  // divide
  const middle = Math.floor((start + end) / 2);

  const leftSubArr = mergeSort(arr, start, middle);

  const rightSubArr = mergeSort(arr, middle + 1, end);

  // merge
  const mergedSubArr = [];

  while (leftSubArr.length && rightSubArr.length) {
    if (leftSubArr[0] < rightSubArr[0]) {
      mergedSubArr.push(leftSubArr.shift());
    } else {
      mergedSubArr.push(rightSubArr.shift());
    }
  }

  return mergedSubArr.concat(leftSubArr, rightSubArr);
};

export default mergeSort;

const mergeSort = <T>(arr: T[], start: number, end: number): T[] => {
  if (!Array.isArray(arr) || !arr.length) return [];

  if (start >= end) return [arr[end]];

  // divide
  const middle = Math.floor((start + end) / 2);

  const leftSubArr = mergeSort(arr, start, middle);

  const rightSubArr = mergeSort(arr, middle + 1, end);

  // merge
  const mergedSubArr = [];
  let leftSubArrIndex = 0;
  let rightSubArrIndex = 0;

  while (
    leftSubArrIndex < leftSubArr.length &&
    rightSubArrIndex < rightSubArr.length
  ) {
    if (leftSubArr[leftSubArrIndex] < rightSubArr[rightSubArrIndex]) {
      mergedSubArr.push(leftSubArr[leftSubArrIndex]);
      leftSubArrIndex++;
    } else {
      mergedSubArr.push(rightSubArr[rightSubArrIndex]);
      rightSubArrIndex++;
    }
  }

  return leftSubArrIndex >= leftSubArr.length
    ? mergedSubArr.concat(rightSubArr.slice(rightSubArrIndex))
    : mergedSubArr.concat(leftSubArr.slice(leftSubArrIndex));
};

export default mergeSort;

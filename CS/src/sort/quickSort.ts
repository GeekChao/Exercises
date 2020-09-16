const quickSort = <T>(arr: T[]): T[] => {
  if (!Array.isArray(arr) || !arr.length) return [];

  if (arr.length <= 1) return arr;

  // generate a random index
  const rIndex = Math.floor(arr.length * Math.random());

  const midArr = arr.splice(rIndex, 1);
  const left = arr.filter((item) => item <= midArr[0]);
  const right = arr.filter((item) => item > midArr[0]);

  return [...quickSort(left), ...midArr, ...quickSort(right)];
};

export default quickSort;

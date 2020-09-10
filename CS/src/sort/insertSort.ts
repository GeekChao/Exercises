const insertSort = <T>(arr: T[]): T[] => {
  if (!Array.isArray(arr) || !arr.length) return [];

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        const spliced = arr.splice(i, 1);
        arr.splice(j, 0, ...spliced);
      }
    }
  }

  return arr;
};

export default insertSort;

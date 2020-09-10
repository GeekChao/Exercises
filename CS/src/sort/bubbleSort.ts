const bubbleSort = <T>(arr: T[]): T[] => {
  if (!Array.isArray(arr) || !arr.length) return [];

  let swapped;
  do {
    swapped = false;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

export default bubbleSort;

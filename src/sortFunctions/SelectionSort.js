export async function* SelectionSort(array, swap, highlight, marksort) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (var j = i + 1; j < array.length; j++) {
      yield await highlight([minIndex, j]);

      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i && array[minIndex] !== array[i]) {
      yield await swap(minIndex, i);
    }

    marksort(i);
    yield;
  }
}















 // for (let i = 0; i < array.length; i++) {
  //   let maxIndex = 0;
  //   for (var j = 0; j < array.length - i; j++) {
  //     yield await highlight([maxIndex, j]);

  //     if (array[maxIndex] < array[j]) {
  //       maxIndex = j;
  //     }
  //   }

  //   j = j - 1;
  //   if (maxIndex !== j && array[maxIndex] !== array[j]) {
  //     yield await swap(maxIndex, j);
  //   }

  //   marksort(j);
  //   yield;
// Porównywanie złożonych tablic

const array1 = [
  [1, 2, 3],
  [4, 5, 6]
];

const array2 = [
  [3, 1, 2],
  [6, 4, 5]
];

function sortValues(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  }

  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  return 0;
}

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let areArraysIdentical = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].length !== arr2[i].length) {
      areArraysIdentical = false;
      break;
    }

    let sortedArr1 = arr1[i].sort(sortValues);
    let sortedArr2 = arr2[i].sort(sortValues);

    for (let j = 0; j < sortedArr1.length; j++) {
      if (sortedArr1[j] !== sortedArr2[j]) {
        areArraysIdentical = false;
        break;
      }
    }

    if (areArraysIdentical === false) {
      break;
    }
  }

  return areArraysIdentical;
}

const result = compareArrays(array1, array2);
console.log(result);

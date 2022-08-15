var readlineSync = require('readline-sync');
let readline = readlineSync.question;
let number = readline();
number = parseInt(number);
let array = [1];
const generate = () => {
  let arrayNumber = 0;
  for (let i = 0; i < number; i++) {
    let currentLayer = 2 ** i;
    arrayNumber += currentLayer;
  }
  let parentIdx = 0;
  while (parentIdx < arrayNumber) {
    let leftChildIdx = 2 * parentIdx + 1;
    let rightChildIdx = 2 * parentIdx + 2;
    let leftChild, rightChild;
    if (leftChildIdx < arrayNumber) {
      leftChild = 2 * array[parentIdx];
      array.push(leftChild);
    }
    if (rightChildIdx < arrayNumber) {
      rightChild = 2 * array[parentIdx] + 1;
      array.push(rightChild);
    }
    parentIdx++;
  }
  return array.length;
};
let text;

const frac = (parentIdx) => {
  let leftChildIdx = 2 * parentIdx + 1;
  let rightChildIdx = 2 * parentIdx + 2;

  if (array[leftChildIdx] && array[rightChildIdx]) {
    return `+\\frac{${array[leftChildIdx]}${frac(leftChildIdx)}}{${
      array[rightChildIdx]
    }${frac(rightChildIdx)}}`;
  }

  return ``;
};
generate();
if (array.length === 1) {
  console.log('1');
} else {
  console.log('1' + frac(0));
}

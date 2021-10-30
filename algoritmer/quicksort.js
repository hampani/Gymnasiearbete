import { skapaDelay } from "../utils.JS";

const sortingContainer = document.getElementById("sorting-container");

function insertAfter(newNode, referenceNode) {
  referenceNode.insertBefore(newNode, referenceNode.nextSibling);
}

const byt = async (a, b, elementArr) => {
  const temp = elementArr[a].style.left;
  elementArr[a].style.left = elementArr[b].style.left;
  elementArr[b].style.left = temp;

  const temp2 = elementArr[a];
  elementArr[a] = elementArr[b];
  elementArr[b] = temp2;

  await skapaDelay(1);
};

const swap = async (items, leftIndex, rightIndex, elementArr) => {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;

  await byt(leftIndex, rightIndex, elementArr);
};

const partition = async (items, left, right, elementArr) => {
  const elements = elementArr;
  const pivotIndex = Math.floor((right + left) / 2);
  const pivot = items[pivotIndex]; //middle element
  let i = left; //left pointer
  let j = right; //right pointer

  elements[pivotIndex].style.backgroundColor = "red";

  // Mark where the pivot is

  while (i <= j) {
    elements[i].style.backgroundColor = "purple";
    elements[j].style.backgroundColor = "green";
    await skapaDelay(1);
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      await swap(items, i, j, elementArr); //sawpping two elements
      i++;
      j--;
    }
    elements[i].style.backgroundColor = "#3575ff";
    if (j >= 0) elements[j].style.backgroundColor = "#3575ff";
  }
  elements[pivotIndex].style.backgroundColor = "#3575ff";
  return i;
};

export const quickSort = async (items, left, right, elementArr) => {
  let index;
  if (items.length > 1) {
    index = await partition(items, left, right, elementArr); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      await quickSort(items, left, index - 1, elementArr);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      await quickSort(items, index, right, elementArr);
    }
  }
  return items;
};

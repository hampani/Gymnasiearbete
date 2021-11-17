import { skapaDelay } from "../utils.JS";
import { animeraByte } from "../display.JS";

const elements = document.getElementById("sorting-container").children;

const partition = async (items, left, right) => {
  const pivotIndex = Math.floor((right + left) / 2);
  const pivot = items[pivotIndex]; //middle element
  let i = left; //left pointer
  let j = right; //right pointer

  // Mark where the pivot is

  while (i <= j) {
    await skapaDelay(1);
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      await animeraByte(elements[i], elements[j]);
      let temp = items[i];
      items[i] = items[j];
      items[j] = temp;
      //sawpping two elements
      i++;
      j--;
    }
    if (j >= 0) elements[j].style.backgroundColor = "#3575ff";
  }
  elements[pivotIndex].style.backgroundColor = "#3575ff";
  return i;
};

export const quickSort = async (items, left, right) => {
  let index;
  if (items.length > 1) {
    index = await partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      await quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      await quickSort(items, index, right);
    }
  }
  return items;
};

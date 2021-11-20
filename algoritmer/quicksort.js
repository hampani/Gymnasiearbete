
import { skapaDelay } from "../utils.JS";
import { animeraByte } from "../display.JS";

const elements = document.getElementById("sorting-container").children;

const swap = async (items, a, b) => {
  await animeraByte(elements[a], elements[b])

  const temp = items[a];
  items[a] = items[b];
  items[b] = temp;
}

const partition = async (items, l, r) => {
  
  const pivot = items[r];
  var i = l - 1;
  
  elements[r].classList.add("pivot");
  
  for (var j = l; j <= r - 1; j++) {


    elements[j].classList.add("comparing");
   
    await skapaDelay()

    var value = items[j];
  
    if (value < pivot) {
      i++;

      await swap(items, i, j)

      elements[i].classList.add("lessThan")

      if (i != j) {
          elements[j].classList.add("greaterThan")
      }
      
      await skapaDelay();
    } else {
        elements[j].classList.add("greaterThan")
    }
   
  }
  i++;


  await swap(items, i, r)

  elements[r].classList.add("greaterThan")

  elements[i].classList.add("done")

  await skapaDelay()

  for (var k = 0; k < elements.length; k++) {
    if (!elements[k].classList.contains("done")) {
      elements[k].classList = "element"
    }
    
  }
  
  return i;
}
  
// Asynchronous QuickSort function
export const quickSort = async (items, l, r) => {
  if (l < r) {
    // Storing the index of pivot element after partition
    var pivot_idx = await partition(items, l, r);
    // Recursively calling quicksort for left partition
    await quickSort(items, l, pivot_idx - 1);
    // Recursively calling quicksort for right partition
    await quickSort(items, pivot_idx + 1, r);

  } 
}



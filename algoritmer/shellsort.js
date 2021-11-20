import { animeraByte } from "../display.JS";
import { skapaDelay } from "../utils.JS";

const elements = document.getElementById("sorting-container").children;

export const shellSort = async (arr) => {
  let n = arr.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i += 1) {
      let j = i;

      for (let k = i; k >= 0; k -= gap) {
        elements[k].classList.add("comparable");
      }

      elements[i].classList.add("comparing");
      elements[i - gap].classList.add("comparing");

      await skapaDelay();

      while (j >= gap && arr[j] < arr[j - gap]) {
        await skapaDelay();
        elements[j].classList.add("comparing");
        elements[j - gap].classList.add("comparing");

        await animeraByte(elements[j], elements[j - gap]);
        let temp = arr[j];
        arr[j] = arr[j - gap];
        arr[j - gap] = temp;

        elements[j].classList.remove("comparing");

        j -= gap;
        if (elements[j - gap]) {
          elements[j - gap]?.classList.add("comparing");
          await skapaDelay();
        }
      }

      for (let i = 0; i < elements.length; i++) {
        elements[i].classList = "element";
      }

      await skapaDelay();
    }
  }

  return arr;
};

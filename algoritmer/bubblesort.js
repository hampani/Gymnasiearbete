import { animeraByte } from "../display.JS";
import { skapaDelay } from "../utils.JS";

const elements = document.getElementById("sorting-container").children;

export const bubbleSort = async (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      elements[j].classList.add("comparing");
      elements[j + 1].classList.add("comparing");

      await skapaDelay(elements.length);

      if (array[j] > array[j + 1]) {
        await animeraByte(elements[j], elements[j + 1]);
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }

      elements[j].classList.remove("comparing");
      elements[j + 1].classList.remove("comparing");
    }

    elements[array.length - 1 - i].classList.add("done");
  }
};

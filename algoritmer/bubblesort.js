import { skapaDelay, beräknaDelay } from "../utils.JS";
import { byt } from "../display.JS";

const sortingContainer = document.getElementById("sorting-container");

export const bubbleSort = async (array) => {
  const delay = beräknaDelay(array.length);
  const elements = sortingContainer.children;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      elements[j].style.backgroundColor = "green";
      elements[j + 1].style.backgroundColor = "green";

      await skapaDelay(delay);

      if (array[j] > array[j + 1]) {
        await byt(elements[j], elements[j + 1], delay);
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }

      elements[j].style.backgroundColor = "#3575FF";
      elements[j + 1].style.backgroundColor = "#3575FF";
    }
    elements[array.length - 1 - i].style.backgroundColor = "yellow";
  }
};

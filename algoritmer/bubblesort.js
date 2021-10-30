import { skapaDelay, beräknaDelay } from "../utils.JS";

const byt = async (a, b, elementArr) => {
  const temp = elementArr[a].style.left;
  elementArr[a].style.left = elementArr[b].style.left;
  elementArr[b].style.left = temp;

  const temp2 = elementArr[a];
  elementArr[a] = elementArr[b];
  elementArr[b] = temp2;

  await skapaDelay(1);
};

export const bubbleSort = async (array, elementArray) => {
  const delay = beräknaDelay(array.length);
  const elements = elementArray;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      elements[j].style.backgroundColor = "green";
      elements[j + 1].style.backgroundColor = "green";

      await skapaDelay(delay);

      if (array[j] > array[j + 1]) {
        await byt(j, j + 1, elements);
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

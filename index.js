import { generate } from "./display.JS";
import { bubbleSort } from "./algoritmer/bubblesort.JS";
import { quickSort } from "./algoritmer/quicksort.JS";
import { shellSort } from "./algoritmer/shellsort.JS";

const noOfElementsSlider = document.getElementById("noOfElements");

const sortButton = document.getElementById("sort-button");
const generateButton = document.getElementById("generate-button");
const algorithmInput = document.getElementsByName("sorting-algo-radio");

let numberArray = [];
let sortingStatus = "idle";

const setArrays = () => {
  numberArray = generate(noOfElementsSlider.value);
};

// När slidern ändras, generar en ny lista lista med det nya antalet element
noOfElementsSlider.oninput = () => {
  setArrays();
};

sortButton.onclick = () => {
  sort();
};

generateButton.onclick = () => {
  setArrays();
};

const getInput = () => {
  //console.log(algorithmInput);
  for (let i = 0; i < algorithmInput.length; i++) {
    if (algorithmInput[i].checked) {
      return algorithmInput[i].value;
    }
  }
};

export const setSortingStatus = (status) => {
  sortingStatus = status;
  if (status === "sorting") {
    sortButton.disabled = true;
    generateButton.disabled = true;
    noOfElementsSlider.disabled = true;
  } else {
    sortButton.disabled = false;
    generateButton.disabled = false;
    noOfElementsSlider.disabled = false;
  }
};

const sort = async () => {
  switch (getInput()) {
    case "bubble-sort":
      setSortingStatus("sorting");
      await bubbleSort(numberArray);
      setSortingStatus("idle");
      break;
    case "quick-sort":
      setSortingStatus("sorting");
      await quickSort(numberArray, 0, numberArray.length - 1);
      setSortingStatus("idle");
      break;
    default:
      setSortingStatus("sorting");
      await shellSort(numberArray);
      setSortingStatus("idle");
      break;
  }
};

setArrays();

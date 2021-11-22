import { generate } from "./display.js";
import { bubbleSort } from "./algoritmer/bubblesort.js";
import { quickSort } from "./algoritmer/quicksort.js";
import { shellSort } from "./algoritmer/shellsort.js";

const noOfElementsSlider = document.getElementById("noOfElements");

const elements = document.getElementById("sorting-container").children;

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
    markAsDone();
    sortButton.disabled = false;
    generateButton.disabled = false;
    noOfElementsSlider.disabled = false;
  }
};

const markAsDone = () => {
  for (var k = 0; k < elements.length; k++) {
    elements[k].classList = "element done";
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
    case "shell-sort":
      setSortingStatus("sorting");
      await shellSort(numberArray);
      setSortingStatus("idle");
      break;
    default:
      alert("Detta borde inte hända!");
  }
};

setArrays();

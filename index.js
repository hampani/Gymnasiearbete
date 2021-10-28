import { generate, byt } from "./display.JS";
import { bubbleSort } from "./algoritmer/bubblesort.JS";

//const noOfElements = 10;
const noOfElementsSlider = document.getElementById("noOfElements");

const sortButton = document.getElementById("sort-button");
const generateButton = document.getElementById("generate-button");

let numberArray = [];
let sortingStatus = "idle";

// När slidern ändras, generar en ny lista lista med det nya antalet element
noOfElementsSlider.oninput = () => {
  numberArray = generate(noOfElementsSlider.value);
};

sortButton.onclick = () => {
  sort();
};

generateButton.onclick = () => {
  generate(noOfElementsSlider.value);
};

const sort = () => {
  if (sortingStatus !== "idle") {
    return;
  }
  bubbleSort(numberArray);
};

numberArray = generate(noOfElementsSlider.value);

import { generate } from "./display.JS";
import { bubbleSort } from "./algoritmer/bubblesort.JS";
import { quickSort } from "./algoritmer/quicksort.JS";

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

const sort = async () => {
  if (sortingStatus !== "idle") return;
  switch (getInput()) {
    case "bubble-sort":
      bubbleSort(numberArray);
      break;
    case "quick-sort":
      console.log(await quickSort(numberArray, 0, numberArray.length - 1));
      break;
    default:
      alert(getInput() + " är inte implementerad än!");
      break;
  }
};

setArrays();

import { generate } from "./display.JS";
import { bubbleSort } from "./algoritmer/bubblesort.JS";
import { quickSort } from "./algoritmer/quicksort.JS";

const noOfElementsSlider = document.getElementById("noOfElements");

const sortButton = document.getElementById("sort-button");
const generateButton = document.getElementById("generate-button");
const algorithmInput = document.getElementsByName("sorting-algo-radio");

let numberArray = [];
let elementArray = [];
let sortingStatus = "idle";

const setArrays = () => {
  const { numberArr, elementArr } = generate(noOfElementsSlider.value);
  numberArray = numberArr;
  elementArray = elementArr;
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
      bubbleSort(numberArray, elementArray);
      break;
    case "quick-sort":
      console.log(
        await quickSort(numberArray, 0, numberArray.length - 1, elementArray)
      );
      break;
    default:
      alert(getInput() + " är inte implementerad än!");
      break;
  }
};

setArrays();

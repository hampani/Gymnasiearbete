import { generate } from "./display.JS";
import { bubbleSort } from "./algoritmer/bubblesort.JS";

const noOfElementsSlider = document.getElementById("noOfElements");

const sortButton = document.getElementById("sort-button");
const generateButton = document.getElementById("generate-button");
const algorithmInput = document.getElementsByName("sorting-algo-radio");

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

const getInput = () => {
  //console.log(algorithmInput);
  for (let i = 0; i < algorithmInput.length; i++) {
    if (algorithmInput[i].checked) {
      return algorithmInput[i].value;
    }
  }
};

const sort = () => {
  if (sortingStatus !== "idle") return;
  switch (getInput()) {
    case "bubble-sort":
      bubbleSort(numberArray);
      break;
    default:
      alert(getInput() + " är inte implementerad än!");
      break;
  }
};

numberArray = generate(noOfElementsSlider.value);

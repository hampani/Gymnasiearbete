const range = 100;

// Elements
const parentDiv = document.getElementById("sorting-container");
const noOfElementsSlider = document.getElementById("noOfElements");
const radioButtons = document.getElementsByName("sorting-algo-radio");

// Listeners
noOfElementsSlider.oninput = () => {
  generate();
};

const generateRandomArray = (noOfElements) => {
  // Hard coded range to 100. Varför skulle man vilja ändra range?
  const arr = [];

  for (let i = 0; i < noOfElements; i++) {
    //Kan teoretiskt sätt vara 0?
    arr.push(Math.floor(Math.random() * range) + 1);
  }
  return arr;
};

const displayArray = (arr) => {
  arr.forEach((elemNumber) => {
    const element = document.createElement("div");

    element.classList.add("element");
    element.style.height = elemNumber + "%";

    parentDiv.appendChild(element);
  });
};

const generate = () => {
  parentDiv.innerHTML = "";
  displayArray(generateRandomArray(noOfElementsSlider.value));
};

const handleSortPress = () => {
  radioButtons.forEach((elem) => {
    if (elem.checked) {
      console.log(elem.value);
    }
  });
};

generate();

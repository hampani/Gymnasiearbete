const parentDiv = document.getElementById("sorting-container");

const generateRandomArray = (noOfElements, range) => {
  const arr = [];
  for (let i = 0; i < noOfElements; i++) {
    arr.push(Math.floor(Math.random() * range + 1));
  }
  return arr;
};

const constant = 10;

const displayArray = (arr) => {
  arr.forEach((elemNumber) => {
    const element = document.createElement("div");

    console.log(elemNumber);

    element.classList.add("element");
    element.style.height = elemNumber * constant + "px";

    parentDiv.appendChild(element);
  });
};

const generate = (noOfElements = 20, range = 20) => {
  parentDiv.innerHTML = "";
  displayArray(generateRandomArray(noOfElements, range));
};

const handleSubmit = () => {
  const range = document.getElementById("range").value;
  const noOfElements = document.getElementById("noOfElements").value;

  const rangeOutput = document.getElementById("rangeOutput");
  const noOfElementsOutput = document.getElementById("noOfElementsOutput");

  rangeOutput.innerHTML = range;
  noOfElementsOutput.innerHTML = noOfElements;

  generate(noOfElements, range);
};

generate();

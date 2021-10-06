const range = 100;
let isSorting = false;

// Elements
const parentDiv = document.getElementById("sorting-container");
const noOfElementsSlider = document.getElementById("noOfElements");
const radioButtons = document.getElementsByName("sorting-algo-radio");

// Listeners
noOfElementsSlider.oninput = () => {
  generate();
};

let currentArr = [];

const getBackgroundColor = (elemNumber, arrLength) =>
  "hsl(" + (360 * elemNumber) / arrLength + ",80%,50%)";

const generateRandomArray = (noOfElements) => {
  // Hard coded range to 100. Varför skulle man vilja ändra range?
  const arr = [];

  for (let i = 0; i < noOfElements; i++) {
    //Kan teoretiskt sätt vara 0?
    arr.push(Math.floor(Math.random() * range) + 1);
  }
  currentArr = arr;
};

const displayArray = (arr) => {
  arr.forEach((elemNumber, index) => {
    const element = document.createElement("div");

    element.classList.add("element");
    element.style.height = elemNumber + "%";
    element.style.backgroundColor = getBackgroundColor(elemNumber, arr.length);
    element.id = index;

    parentDiv.appendChild(element);
  });
};

const generate = () => {
  if (isSorting) return;
  parentDiv.innerHTML = "";
  generateRandomArray(noOfElementsSlider.value);
  displayArray(currentArr);
};

const handleSortPress = () => {
  if (isSorting) return;
  radioButtons.forEach((elem) => {
    if (elem.checked) {
      const delay = document.getElementById("delaySlider").value * 10;
      if (elem.value === "bubble_sort") {
        bubbleSort(delay);
      }
    }
  });
};

const swap = async (a, b, delay) => {
  // Byt styles
  a.style.backgroundColor = "red";
  b.style.backgroundColor = "red";

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay)
  );

  const temp = a.style.transfrom;
  a.style.transfrom = b.style.transfrom;
  b.style.transfrom = temp;

  parentDiv.insertBefore(b, a);
};

const bubbleSort = async (delay) => {
  isSorting = true;
  const array = currentArr;
  const elements = parentDiv.children;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      elements[j].style.backgroundColor = "blue";
      elements[j + 1].style.backgroundColor = "blue";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      if (array[j] > array[j + 1]) {
        await swap(elements[j], elements[j + 1], delay);
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }

      elements[j].style.backgroundColor = getBackgroundColor(
        array[j],
        array.length
      );
      elements[j + 1].style.backgroundColor = getBackgroundColor(
        array[j + 1],
        array.length
      );
    }
  }
  isSorting = false;
};

generate();

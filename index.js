
//const noOfElements = 10;
const sortingContainer = document.getElementById("sorting-container");
const noOfElementsSlider = document.getElementById("noOfElements");

let elementArray = [];
let numberArray = []

noOfElementsSlider.oninput = () => {
  generate();
};

const calculateDelay = (noOfElements) => {
  return Math.pow(0.9, noOfElements) + 1
}

const generateRandomArray = (noOfElements) => {
  // Hard coded range to 100. Varför skulle man vilja ändra range?
  const numberArr = [];
  const elementArr = [];

  for (let i = 0; i < noOfElements; i++) {
    //Gör så att det inte kan vara 100 eller 1. ger fel med UI
    const siffra = Math.floor(Math.random() * 99) + 2;
    numberArr.push(siffra);
    elementArr.push(skapaElement(siffra, i, noOfElements))
  }
  elementArray = elementArr;
  numberArray = numberArr;
};

const skapaElement = (elemNumber, index, noOfElements) => {
  // 90 p.g.a. 5% margin per sida
  const elementBredd = 80 / noOfElements;
  const element = document.createElement("div");

  const delay = calculateDelay(noOfElements);

  const antalMellanrum = noOfElements - 1;
  const mellanrumBredd = 20 / antalMellanrum;

    element.classList.add("element");
    element.style.height = elemNumber + "%";
    element.style.width = elementBredd + "%";
    element.style.left = index * elementBredd + mellanrumBredd * index + "%"
    element.style.transition = delay + "s";
    //element.style.left = 1 * index + elementWidth + "%"

  if (noOfElements < 30) {
    const text = document.createElement("p");
    text.classList.add("element-text");
    text.style.fontSize = elementBredd * 20 + "%"
  
    text.innerText = elemNumber;
  
    element.appendChild(text)
  }

  

    sortingContainer.appendChild(element);
    return element;
}

const byt = async (elemA, elemB, delay) => {

  const temp = elemA.style.left;
  elemA.style.left = elemB.style.left;
  elemB.style.left = temp;

  await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay * 1000)
      );

  sortingContainer.insertBefore(elemB, elemA);
}

const jämför = (a, b) => {
  a.style.backgroundColor = "green";
  b.style.backgroundColor = "green";
}

const bubbleSort = async () => {
  const array = numberArray;
  const elements = sortingContainer.children;

  const delay = calculateDelay(array.length);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      elements[j].style.backgroundColor = "green";
      elements[j + 1].style.backgroundColor = "green";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay * 1000)
      );

      if (array[j] > array[j + 1]) {
        await byt(elements[j], elements[j + 1], delay);
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }

      elements[j].style.backgroundColor = "red"
      elements[j + 1].style.backgroundColor = "red"
    }
    elements[array.length - 1 - i].style.backgroundColor = "yellow"
  }
};


const generate = () => {
  sortingContainer.innerHTML = "";
  generateRandomArray(noOfElementsSlider.value)
  console.log("generationg")
};

generate()
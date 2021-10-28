//const noOfElements = 10;
const sortingContainer = document.getElementById("sorting-container");
const noOfElementsSlider = document.getElementById("noOfElements");

let numberArray = [];
let sortingStatus = "idle";

// När slidern ändras, generar en ny lista lista med det nya antalet element
noOfElementsSlider.oninput = () => {
  generate();
};

// Beräkna den pålagda-delayen i sorteringen. Högt antal element ska ge låg delay och tvärtom
const calculateDelay = (noOfElements) => {
  return Math.pow(0.9, noOfElements) + 1;
};

// Skapa en array med n antal slumpade siffror.
const generateRandomArray = (noOfElements) => {
  const numberArr = [];

  for (let i = 0; i < noOfElements; i++) {
    // Genererar en siffra mellan 1-100
    const siffra = Math.ceil(Math.random() * 100);
    // Skapar och lägger till element till skärm
    skapaElement(siffra, i, noOfElements);
    numberArr.push(siffra);
  }
  numberArray = numberArr;
};

const skapaDelay = async (delay) => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay * 1000)
  );
};

// Generarar HTML koden för varje element (pelare)
const skapaElement = (elemNumber, index, noOfElements) => {
  const elementBredd = 80 / noOfElements; //i procent. Använder 80 p.g.a. 20% av skärmen är till mellanrum dvs. 80% av skärmen är till pelare

  const delay = calculateDelay(noOfElements); //beräkna delay

  const antalMellanrum = noOfElements - 1; //beräkna hur många mellanrum det finns
  const mellanrumBredd = 20 / antalMellanrum; //totalt 20% av skärmen kommer vara mellanrum. Fördela dessa 20% mellan antalet mellanrum

  // Skapa elementet i DOM
  const element = document.createElement("div");
  element.classList.add("element"); //ge div klassnamnet "element"
  element.style.height = elemNumber + "%"; //ge div höjd på x%
  element.style.width = elementBredd + "%"; //ge div bredd på x%
  element.style.left = index * elementBredd + mellanrumBredd * index + "%"; //beräkna hur långt ifrån vänsterkanten varje div ska vara.
  element.style.transition = delay + "s"; //hur lång animationen ska vara

  // Om antalet element mer än 30, lägg till en text med elementets höjd på varje element
  if (noOfElements < 30) {
    const text = document.createElement("p");
    text.classList.add("element-text");
    text.style.fontSize = elementBredd * 20 + "%";

    text.innerText = elemNumber;

    element.appendChild(text);
  }

  // Lägg till element som child till div sorting container
  sortingContainer.appendChild(element);
};

const byt = async (elemA, elemB, delay) => {
  const temp = elemA.style.left;
  elemA.style.left = elemB.style.left;
  elemB.style.left = temp;

  await skapaDelay(delay);

  sortingContainer.insertBefore(elemB, elemA);

  await skapaDelay(delay);
};

const jämför = (a, b) => {
  a.style.backgroundColor = "green";
  b.style.backgroundColor = "green";
};

const bubbleSort = async () => {
  const array = numberArray;
  const elements = sortingContainer.children;

  const delay = calculateDelay(array.length);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      elements[j].style.backgroundColor = "green";
      elements[j + 1].style.backgroundColor = "green";

      await skapaDelay(delay);

      if (array[j] > array[j + 1]) {
        await byt(elements[j], elements[j + 1], delay);
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }

      elements[j].style.backgroundColor = "#3575FF";
      elements[j + 1].style.backgroundColor = "#3575FF";
    }
    elements[array.length - 1 - i].style.backgroundColor = "yellow";
  }
};

const generate = () => {
  sortingContainer.innerHTML = "";
  generateRandomArray(noOfElementsSlider.value);
};

generate();

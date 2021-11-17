import { beräknaDelay, skapaDelay } from "./utils.JS";

const sortingContainer = document.getElementById("sorting-container");

// Skapa en array med n antal slumpade siffror.
export const generate = (noOfElements) => {
  sortingContainer.innerHTML = "";
  const numberArr = [];

  for (let i = 0; i < noOfElements; i++) {
    // Genererar en siffra mellan 1-100
    const siffra = Math.ceil(Math.random() * 100);
    // Skapar och lägger till element till skärm
    skapaElement(siffra, i, noOfElements);
    numberArr.push(siffra);
  }
  return numberArr;
};

// Generarar HTML koden för varje element (pelare)
const skapaElement = (elemNumber, index, noOfElements) => {
  const elementBredd = 80 / noOfElements; //i procent. Använder 80 p.g.a. 20% av skärmen är till mellanrum dvs. 80% av skärmen är till pelare

  const delay = beräknaDelay(noOfElements); //beräkna delay

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

  return element;
};

export const animeraByte = async (element1, element2) => {
  //console.log(element1);

  const temp = element1.style.left;
  element1.style.left = element2.style.left;
  element2.style.left = temp;

  await skapaDelay(sortingContainer.children.length);

  var clonedElement1 = element1.cloneNode(true);
  var clonedElement2 = element2.cloneNode(true);

  element2.parentNode?.replaceChild(clonedElement1, element2);
  element1.parentNode?.replaceChild(clonedElement2, element1);

  await skapaDelay(sortingContainer.children.length);
};

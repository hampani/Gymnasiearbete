export const skapaDelay = async (noOfElements) => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, beräknaDelay(noOfElements) * 1000)
  );
};

export const beräknaDelay = (noOfElements) => {
  return 0.5;
  return Math.pow(0.9, noOfElements) + 1;
};

export const skapaArrayMedSiffror = (antalElement) => {
  const arr = [];
  const steg = 100 / antalElement;
  for (let i = 1; i <= antalElement; i++) {
    arr.push(i * steg);
  }
  return arr;
};

export const blanda = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

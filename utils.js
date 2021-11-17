export const skapaDelay = async (noOfElements) => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, beräknaDelay(noOfElements) * 5)
  );
};

export const beräknaDelay = (noOfElements) => {
  return Math.pow(0.9, noOfElements) + 1;
};

export const skapaDelay = async (delay) => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay * 0)
  );
};

export const beräknaDelay = (noOfElements) => {
  return Math.pow(0.9, noOfElements) + 1;
};

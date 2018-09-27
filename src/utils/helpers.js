export const getTopPosition = element => {
  const boundingClientRect = element && element.getBoundingClientRect();
  const { top } = boundingClientRect || {};

  return top;
};

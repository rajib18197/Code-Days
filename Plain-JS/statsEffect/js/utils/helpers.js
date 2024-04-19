export const debounce = function (businessLogic, delay) {
  let timeoutId;

  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => businessLogic.apply(null, args), delay);
  };
};

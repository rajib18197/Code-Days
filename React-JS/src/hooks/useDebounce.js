export function useDebounce(businessLogic, delay) {
  const debounce = function () {
    let timeout;

    return (...args) => {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => businessLogic.call(null, ...args), delay);
    };
  };

  return debounce;
}

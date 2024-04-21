export function useDebounce() {
  const debounce = function (businessLogic, delay) {
    let timeout;

    return (...args) => {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => businessLogic.call(null, ...args), delay);
    };
  };

  return debounce;
}

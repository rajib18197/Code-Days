export const hasPointedHalf = function (e) {
  const position = e.target.closest("svg").getBoundingClientRect();
  const distance = e.clientX - position.x;

  if (distance < Math.round(position.width / 2)) {
    return true;
  }

  return false;
};

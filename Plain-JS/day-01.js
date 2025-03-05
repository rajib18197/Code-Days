const maxPriceMemoization = function (index, maxWeight, wt, val, cache) {
  if (index === 0) {
    if (wt[0] <= maxWeight) return val[0];
    return 0;
  }

  if (cache[index][maxWeight] !== -1) return cache[index][maxWeight];

  const notTake = 0 + maxPriceMemoization(index - 1, maxWeight, wt, val, cache);
  let take = -1e9;

  if (wt[index] <= maxWeight) {
    take =
      val[index] +
      maxPriceMemoization(index - 1, maxWeight - wt[index], wt, val, cache);
  }

  return (cache[index][maxWeight] = notTake > take ? notTake : take);
};

const calcMaxPrice = function (wt, val, maxWeight) {
  const cache = Array.from({ length: val.length }, () =>
    Array.from({ length: maxWeight + 1 }, () => -1)
  );
  const maxPrice = maxPriceMemoization(
    val.length - 1,
    maxWeight,
    wt,
    val,
    cache
  );
  console.log(maxPrice);
  console.log(cache);
};

const init = function () {
  const wt = [1, 2, 4, 5];
  const val = [5, 4, 8, 6];
  calcMaxPrice(wt, val, 5);
};

init();

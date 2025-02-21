// const calcMinCoins = function (index, target, coins, cache) {
//   if (index === 0) {
//     if (target % coins[0] === 0) {
//       return target / coins[0];
//     }
//     return 1e9;
//   }

//   if (cache[index][target] !== -1) {
//     return cache[index][target];
//   }

//   const notTake = 0 + calcMinCoins(index - 1, target, coins, cache);

//   let take = 1e9;
//   if (target >= coins[index]) {
//     take = 1 + calcMinCoins(index, target - coins[index], coins, cache);
//   }

//   return (cache[index][target] = notTake < take ? notTake : take);
// };

// const calcMinCoinsTabulation = function (coins, target) {
//   const cache = Array.from({ length: coins.length }, () =>
//     Array.from({ length: target + 1 }, () => 0)
//   );

//   for (let t = 0; t <= target; t++) {
//     if (t % coins[0] === 0) {
//       cache[0][t] = t / coins[0];
//     }
//   }

//   for (let index = 1; index < coins.length; index++) {
//     for (let t = 0; t <= target; t++) {
//       const notTake = 0 + cache[index - 1][t];
//       let take = 1e9;
//       if (t >= coins[index]) {
//         take = 1 + cache[index][t - coins[index]];
//       }
//       cache[index][t] = notTake < take ? notTake : take;
//     }
//   }

//   console.log(cache);
// };

// const calcMinCoinsSpaceOptimization = function (coins, target) {
//   const prev = Array.from({ length: target + 1 }, () => 0);

//   for (let t = 0; t <= target; t++) {
//     if (t % coins[0] === 0) {
//       prev[t] = t / coins[0];
//     }
//   }

//   for (let index = 1; index < coins.length; index++) {
//     for (let t = 0; t <= target; t++) {
//       const notTake = 0 + prev[t];
//       let take = 1e9;
//       if (t >= coins[index]) {
//         take = 1 + prev[t - coins[index]];
//       }
//       prev[t] = notTake < take ? notTake : take;
//     }
//   }

//   console.log(prev);
// };

// const coinChange = function (coins, target) {
//   // const cache = Array.from({ length: coins.length }, () =>
//   //   Array.from({ length: target + 1 }, () => -1)
//   // );
//   // const minCoins = calcMinCoins(coins.length - 1, target, coins, cache);
//   // console.log(minCoins);
//   // console.log(cache);

//   // const minCoins = calcMinCoinsTabulation(coins, target);
//   const minCoins = calcMinCoinsSpaceOptimization(coins, target);
//   return minCoins;
// };

// coinChange([1, 2, 5], 11);
let num = 1100;
let result = 0;
let incrementBy = 1;
while (num > 0) {
  const rem = num % 10;
  result = result + incrementBy * rem;
  num = Math.round(num / 10);
  incrementBy *= 2;
}
console.log(result);
